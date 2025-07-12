
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

const customPlanFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  services: z.array(z.string()).min(1, "You must select at least one service."),
});


export async function submitCustomPlan(prevState: any, formData: FormData) {
  const validatedFields = customPlanFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    services: formData.getAll('services'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      isSuccess: false,
    };
  }
  
  const { name, email, phone, services } = validatedFields.data;

  try {
    await addDoc(collection(db, 'custom_plans'), {
      name,
      email,
      phone,
      services,
      submittedAt: new Date(),
    });
    
    revalidatePath('/contact');
    return {
      errors: {},
      message: 'Success! Please book your call below.',
      isSuccess: true,
    }

  } catch (e: any) {
    console.error('Error adding document: ', e.message);
    return {
      errors: { _form: 'Something went wrong on our end. Please try again.' },
      message: 'An unexpected error occurred.',
      isSuccess: false,
    };
  }
}
