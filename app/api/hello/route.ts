import { NextRequest, NextResponse } from 'next/server';
import { assertFirebaseAdminConfig } from '@/lib/firebase-admin';
import { createHelloMessage, getAllHelloMessages } from '@/lib/hello';

const ADMIN_PASSWORD = 'MONKEY';

export async function GET(request: NextRequest) {
  try {
    assertFirebaseAdminConfig();
    const password = request.headers.get('x-admin-password');
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const messages = await getAllHelloMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Failed to fetch hello messages:', error);
    const details = error instanceof Error ? error.message : 'Unknown error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        error: 'Failed to fetch hello messages',
        details,
        stack: process.env.NODE_ENV === 'development' ? stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    assertFirebaseAdminConfig();
    const body = await request.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const id = await createHelloMessage({ name, email, message });
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    console.error('Failed to create hello message:', error);
    const details = error instanceof Error ? error.message : 'Unknown error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        error: 'Failed to send message',
        details,
        stack: process.env.NODE_ENV === 'development' ? stack : undefined,
      },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
