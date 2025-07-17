
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
});

export async function submitLead(values: z.infer<typeof leadSchema>) {
  const parsed = leadSchema.safeParse(values);

  if (!parsed.success) {
    // This should ideally not happen if client-side validation is working
    throw new Error('Invalid form data.');
  }

  try {
    await addDoc(collection(db, 'leads'), {
      ...parsed.data,
      submittedAt: serverTimestamp(),
    });
  } catch (error: any) {
    console.error('Error writing document to Firebase: ', error);
    
    // Check for a specific Firebase error related to configuration
    if (error.code === 'invalid-argument' || error.message.includes('firestore')) {
      throw new Error("Firebase credentials are not set up correctly. Please check your .env file and ensure Firestore is enabled in your Firebase project.");
    }

    // Generic error for other issues
    throw new Error('Could not save your information. Please try again.');
  }
}
