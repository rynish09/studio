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
    const validatedData = leadSchema.parse(values);
    await addDoc(collection(db, 'leads'), {
      ...validatedData,
      submittedAt: new Date(),
    });
    return { success: true };
  } catch (e: any) {
    console.error('Error adding document: ', e.message);
    if (e instanceof z.ZodError) {
      return { error: e.errors.map(err => err.message).join(', '), success: false };
    }
    return { error: 'Something went wrong. Please try again.', success: false };
  }
}

const customPlanFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().optional(),
    services: z.array(z.string()).min(1, "You must select at least one service."),
});

export async function submitCustomPlan(values: unknown) {
  try {
    const validatedData = customPlanFormSchema.parse(values);
    const docRef = await addDoc(collection(db, 'custom_plans'), {
      ...validatedData,
      submittedAt: new Date(),
    });
    return { success: true, docId: docRef.id };
  } catch (e: any) {
    console.error('Error adding document: ', e.message);
    if (e instanceof z.ZodError) {
      return { error: e.errors.map(err => err.message).join(', '), success: false };
    }
    return { error: 'Something went wrong. Please try again.', success: false };
  }
}
