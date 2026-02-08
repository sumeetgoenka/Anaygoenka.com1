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

export interface DevlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  date: string;
  tags: string[];
}

const COLLECTION = 'devlog';

export async function getAllPosts(): Promise<DevlogPost[]> {
  const q = query(collection(db, COLLECTION), orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as DevlogPost));
}

export async function getRecentPosts(count: number): Promise<DevlogPost[]> {
  const q = query(collection(db, COLLECTION), orderBy('date', 'desc'), limit(count));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as DevlogPost));
}

export async function getPostBySlug(slug: string): Promise<DevlogPost | null> {
  const q = query(collection(db, COLLECTION), where('slug', '==', slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const d = snapshot.docs[0];
  return { id: d.id, ...d.data() } as DevlogPost;
}

export async function createPost(post: Omit<DevlogPost, 'id'>): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), post);
  return ref.id;
}

export async function updatePost(id: string, data: Partial<DevlogPost>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
