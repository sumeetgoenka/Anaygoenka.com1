import { NextRequest, NextResponse } from 'next/server';
import { updatePost, deletePost } from '@/lib/blog';
import { assertFirebaseAdminConfig } from '@/lib/firebase-admin';

const ADMIN_PASSWORD = 'MONKEY';

interface Props {
  params: Promise<{ id: string }>;
}

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    assertFirebaseAdminConfig();
    const { id } = await params;
    const body = await request.json();
    const { password, ...updateData } = body;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await updatePost(id, updateData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to update blog post:', error);
    const details = error instanceof Error ? error.message : 'Unknown error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        error: 'Failed to update post',
        details,
        stack: process.env.NODE_ENV === 'development' ? stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    assertFirebaseAdminConfig();
    const { id } = await params;
    const body = await request.json();

    if (body.password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await deletePost(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete blog post:', error);
    const details = error instanceof Error ? error.message : 'Unknown error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        error: 'Failed to delete post',
        details,
        stack: process.env.NODE_ENV === 'development' ? stack : undefined,
      },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
