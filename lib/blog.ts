import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  limit,
} from 'firebase/firestore';
import { db } from './firebase';

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
  const q = query(collection(db, COLLECTION), orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost));
}

export async function getRecentPosts(count: number): Promise<BlogPost[]> {
  const q = query(collection(db, COLLECTION), orderBy('date', 'desc'), limit(count));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const q = query(collection(db, COLLECTION), where('slug', '==', slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const d = snapshot.docs[0];
  return { id: d.id, ...d.data() } as BlogPost;
}

export async function createPost(post: Omit<BlogPost, 'id'>): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), post);
  return ref.id;
}

export async function updatePost(id: string, data: Partial<BlogPost>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
