'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const customPlanSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one service.',
  }),
});

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

export async function submitCustomPlan(values: z.infer<typeof customPlanSchema>) {
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
