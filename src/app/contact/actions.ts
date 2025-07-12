'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const leadSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
});


export async function submitLead(values: z.infer<typeof leadSchema>) {
  try {
    await addDoc(collection(db, 'leads'), {
      ...values,
      submittedAt: new Date(),
    });
    return { success: true };
  } catch (e: any) {
    console.error('Error adding document: ', e.message);
    return { error: 'Something went wrong. Please try again.', success: false };
  }
}

// The custom plan schema needs to be re-defined here for server-side validation.
const customPlanFormSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    services: z.array(z.string()).min(1),
});

export async function submitCustomPlan(values: z.infer<typeof customPlanFormSchema>) {
  try {
    const docRef = await addDoc(collection(db, 'custom_plans'), {
      ...values,
      submittedAt: new Date(),
    });
    return { success: true, docId: docRef.id };
  } catch (e: any) {
    console.error('Error adding document: ', e.message);
    return { error: 'Something went wrong. Please try again.', success: false };
  }
}
