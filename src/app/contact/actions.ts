
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// IMPORTANT: You must configure these environment variables in your .env file.
const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.NEXT_PUBLIC_LEAD_RECIPIENT_EMAIL; 
const FROM_EMAIL = process.env.NEXT_PUBLIC_LEAD_SENDER_EMAIL;

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
});

export async function submitLead(values: z.infer<typeof leadSchema>) {
  const parsed = leadSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error('Invalid form data.');
  }

  if (!process.env.RESEND_API_KEY) {
    throw new Error('Resend API key is not configured. Please check your .env file.');
  }

  if (!TO_EMAIL || !FROM_EMAIL) {
    throw new Error('Recipient or Sender email is not configured. Please check your .env file.');
  }

  try {
    await resend.emails.send({
      from: `ConteX Leads <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: 'New Strategy Call Lead!',
      html: `
        <h1>New Lead Submission</h1>
        <p>You have a new lead from the website.</p>
        <ul>
          <li><strong>Name:</strong> ${parsed.data.name}</li>
          <li><strong>Email:</strong> ${parsed.data.email}</li>
          <li><strong>Phone:</strong> ${parsed.data.phone}</li>
        </ul>
      `,
    });
  } catch (error: any) {
    console.error('Error sending email with Resend: ', error);
    throw new Error('Could not submit your information. Please try again later.');
  }
}
