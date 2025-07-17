
# Firebase Studio

This is a NextJS starter in Firebase Studio.

## Getting Started

To run this project locally and enable all features (including the AI Tools and Contact Form), you need to set up your environment variables.

### 1. Create an Environment File

Create a new file named `.env` in the root of your project by copying the example file:

```bash
cp .env.example .env
```

### 2. Get Your Google AI API Key

The AI-powered tools use the Gemini API.

- Go to [Google AI Studio](https://aistudio.google.com/app/apikey) to generate your free API key.
- Open your new `.env` file and paste the key into the `GEMINI_API_KEY` variable.

### 3. Configure Resend for Email Leads

The contact form uses [Resend](https://resend.com) to email lead notifications to you.

- Go to [Resend.com](https://resend.com), sign up for a free account, and create an API Key.
- Add your domain to Resend and follow their instructions to verify it. This is crucial for email delivery.
- Open your `.env` file and add the following variables:
  - `RESEND_API_KEY`: Your API key from Resend.
  - `NEXT_PUBLIC_LEAD_RECIPIENT_EMAIL`: The email address where you want to receive lead notifications.
  - `NEXT_PUBLIC_LEAD_SENDER_EMAIL`: The "from" email address (e.g., `leads@yourdomain.com`). This must be on the domain you verified with Resend.

### 4. Run the Application

Once your `.env` file is configured, you can start the development server:

```bash
npm run dev
```

Now, your AI tools and contact form should be fully functional!

To get started, take a look at `src/app/page.tsx`.
