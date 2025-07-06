
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

### 3. Get Your Firebase Credentials

The contact form saves leads to a Firestore database.

- Go to your [Firebase Project Settings](https://console.firebase.google.com/project/_/settings/general/).
- Scroll down to the "Your apps" card.
- Select "Web" as the platform type if you haven't already.
- Find and copy the configuration values (`apiKey`, `authDomain`, etc.) into the corresponding `NEXT_PUBLIC_FIREBASE_*` variables in your `.env` file.
- **Important**: In the Firebase Console, go to **Build > Firestore Database** and ensure you have created a database. If not, create one in "Production mode" and accept the default security rules.

### 4. Run the Application

Once your `.env` file is configured, you can start the development server:

```bash
npm run dev
```

Now, your AI tools and contact form should be fully functional!

To get started, take a look at `src/app/page.tsx`.
