'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
});

export async function submitLead(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields.' };
  }

  try {
    await addDoc(collection(db, 'leads'), {
      ...validatedFields.data,
      submittedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (e) {
    console.error('Error adding document: ', e);
    return { error: 'Something went wrong. Please try again.' };
  }
}
