import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, createPost } from '@/lib/devlog';

const ADMIN_PASSWORD = 'MONKEY';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Failed to fetch devlog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, ...postData } = body;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = await createPost(postData);
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    console.error('Failed to create devlog post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
