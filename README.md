
# Firebase Studio

This is a NextJS starter in Firebase Studio.

## Getting Started

To run this project locally and enable all features (including the AI Tools and Contact Form), you need to set up your environment variables.

### 1. Create an Environment File

If you don't have one, create a new file named `.env` in the root of your project.

Your `GEMINI_API_KEY` has already been configured for you, enabling the AI features.

### 2. Configure Resend for Email Leads

The contact form uses [Resend](https://resend.com) to email lead notifications to you.

- Go to [Resend.com](https://resend.com), sign up for a free account, and create an API Key.
- Add your domain to Resend and follow their instructions to verify it. This is crucial for email delivery.
- Open your `.env` file and add the following variables:
  - `RESEND_API_KEY`: Your API key from Resend.
  - `NEXT_PUBLIC_LEAD_RECIPIENT_EMAIL`: The email address where you want to receive lead notifications (e.g., thecontexagency09@gmail.com).
  - `NEXT_PUBLIC_LEAD_SENDER_EMAIL`: The "from" email address (e.g., `leads@yourdomain.com`). This must be on the domain you verified with Resend.

Your `RESEND_API_KEY` has been pre-configured, but you may need to update the domain and sender email to match your verified domain in Resend.

### 3. Run the Application

Once your `.env` file is configured, you can start the development server:

```bash
npm run dev
```

Now, your AI tools and contact form should be fully functional!

To get started, take a look at `src/app/page.tsx`.
