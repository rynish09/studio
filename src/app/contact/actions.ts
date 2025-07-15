
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const leadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export async function submitLead(values: z.infer<typeof leadSchema>) {
  const parsed = leadSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error('Invalid form data.');
  }

  try {
    await addDoc(collection(db, 'leads'), {
      ...parsed.data,
      submittedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error writing document to Firebase: ', error);
    throw new Error('Could not save lead. Please try again.');
  }
}
