import { getAdminDb } from './firebase-admin';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  date: string;
  tags: string[];
}

const COLLECTION = 'devlog';

export async function getAllPosts(): Promise<BlogPost[]> {
  const db = getAdminDb();
  const snapshot = await db.collection(COLLECTION).orderBy('date', 'desc').get();
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost));
}

export async function getRecentPosts(count: number): Promise<BlogPost[]> {
  const db = getAdminDb();
  const snapshot = await db.collection(COLLECTION).orderBy('date', 'desc').limit(count).get();
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const db = getAdminDb();
  const snapshot = await db.collection(COLLECTION).where('slug', '==', slug).limit(1).get();
  if (snapshot.empty) return null;
  const d = snapshot.docs[0];
  return { id: d.id, ...d.data() } as BlogPost;
}

export async function createPost(post: Omit<BlogPost, 'id'>): Promise<string> {
  const db = getAdminDb();
  const ref = await db.collection(COLLECTION).add(post);
  return ref.id;
}

export async function updatePost(id: string, data: Partial<BlogPost>): Promise<void> {
  const db = getAdminDb();
  await db.collection(COLLECTION).doc(id).update(data);
}

export async function deletePost(id: string): Promise<void> {
  const db = getAdminDb();
  await db.collection(COLLECTION).doc(id).delete();
}
