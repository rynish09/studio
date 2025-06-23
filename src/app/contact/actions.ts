
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

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
    const docRef = await addDoc(collection(db, 'leads'), {
      ...validatedFields.data,
      submittedAt: new Date(),
    });
    return { success: true, docId: docRef.id };
  } catch (e: any) {
    console.error('Error adding document: ', e.message);
    return { error: 'Something went wrong. Please try again.' };
  }
}
