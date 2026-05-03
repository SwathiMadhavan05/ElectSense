# ElectSense India

ElectSense India is a civic education web app for first-time voters in India. It explains the election process, helps users learn key concepts, includes an interactive quiz, and provides Gemini-powered assistance for election-related questions.

Live app: https://electsense-india-227354855072.asia-south1.run.app

## Features

- Election timeline for understanding the voting process
- Civic education content tailored for Indian voters
- AI assistant powered by Gemini
- Fact-checking support for election-related claims
- Constituency lookup flow
- Interactive quiz experience
- Responsive React UI

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Gemini API via `@google/genai`
- Docker and nginx for Cloud Run hosting

## Getting Started

### Prerequisites

- Node.js 22 or newer
- npm
- Gemini API key from Google AI Studio

### Install

```bash
npm install
```

### Environment

Create a `.env.local` file:

```bash
GEMINI_API_KEY="your_gemini_api_key"
```

You can also use:

```bash
VITE_GEMINI_API_KEY="your_gemini_api_key"
```

The key is injected during the Vite build. Do not commit `.env.local`.

### Run Locally

```bash
npm run dev
```

The app runs at:

```text
http://localhost:3000
```

### Build

```bash
npm run build
```

### Type Check

```bash
npm run lint
```

## Cloud Run Deployment

This repo includes:

- `Dockerfile`
- `nginx.conf.template`
- `.dockerignore`

Deploy with:

```bash
gcloud run deploy electsense-india \
  --source . \
  --region asia-south1 \
  --project electsense \
  --allow-unauthenticated
```

Cloud Run serves the Vite production build through nginx and uses the runtime `PORT` value provided by Cloud Run.

## Project Structure

```text
src/
  App.tsx
  LandingPage.tsx
  constants.ts
  translations.ts
  services/
    geminiService.ts
```

## Notes

Gemini API access is configured at build time through Vite. If the deployed app shows a missing API key message, rebuild and redeploy with a valid `GEMINI_API_KEY` or `VITE_GEMINI_API_KEY` available in the build environment.
