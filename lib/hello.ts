import { getAdminDb } from './firebase-admin';

export interface HelloMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const COLLECTION = 'hello_messages';

export async function getAllHelloMessages(): Promise<HelloMessage[]> {
  const db = getAdminDb();
  const snapshot = await db.collection(COLLECTION).orderBy('createdAt', 'desc').get();
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as HelloMessage));
}

export async function createHelloMessage(data: Omit<HelloMessage, 'id' | 'createdAt'>): Promise<string> {
  const db = getAdminDb();
  const payload = { ...data, createdAt: new Date().toISOString() };
  const ref = await db.collection(COLLECTION).add(payload);
  return ref.id;
}
