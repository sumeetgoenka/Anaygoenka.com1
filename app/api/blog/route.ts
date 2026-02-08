import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, createPost } from '@/lib/blog';
import { assertFirebaseAdminConfig } from '@/lib/firebase-admin';

const ADMIN_PASSWORD = 'MONKEY';

export async function GET() {
  try {
    assertFirebaseAdminConfig();
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    const details = error instanceof Error ? error.message : 'Unknown error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        error: 'Failed to fetch posts',
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
    const { password, ...postData } = body;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = await createPost(postData);
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    console.error('Failed to create blog post:', error);
    const details = error instanceof Error ? error.message : 'Unknown error';
    const stack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        error: 'Failed to create post',
        details,
        stack: process.env.NODE_ENV === 'development' ? stack : undefined,
      },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
