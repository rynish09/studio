
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
  phone: z.string().min(10, 'Please enter a valid phone number.').optional(),
  services: z.array(z.string()).optional(),
  source: z.enum(['Strategy Call', 'Growth OS']),
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

  const { name, email, phone, services, source } = parsed.data;

  const servicesHtml = services && services.length > 0 
    ? `<h3>Services of Interest:</h3><ul>${services.map(s => `<li>${s}</li>`).join('')}</ul>`
    : '';

  try {
    await resend.emails.send({
      from: `ConteX Leads <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: source === 'Strategy Call' ? 'New Strategy Call Lead!' : 'New Growth OS Download Lead!',
      html: `
        <h1>New Lead Submission</h1>
        <p><strong>Source:</strong> ${source}</p>
        <h2>Contact Details</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
        </ul>
        ${servicesHtml}
      `,
    });
  } catch (error: any) {
    console.error('Error sending email with Resend: ', error);
    throw new Error('Could not submit your information. Please try again later.');
  }
}
