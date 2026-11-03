# Second Chance Transplant Foundation 🕊️

Official web platform for the **Second Chance Transplant Foundation** — a dedicated foundation standing beside transplant patients, living donors, and families from waiting, through healing, and for all the years ahead.

---

## 🌟 Key Features

- **Compassionate Storytelling**: Honoring the founder's 10-year liver transplant milestone (May 21st, 2016) and the sacred gift of life.
- **Bilingual English & Arabic Architecture**: Seamless instant language toggle with full right-to-left (RTL) typography, font scaling (`Cairo` & `Alexandria`), and culturally resonant copy.
- **Bento Grid Mission Pillars**: Structured presentation of the foundation's core commitments:
  1. _Waiting with Hope_ — Navigational guidance and emotional strength during the transplant waitlist.
  2. _Healing & Thriving_ — Post-operative recovery and immunosuppressive reality education.
  3. _Honoring Donors & Families_ — Reverence for the supreme altruism of donors and donor family support.
- **Stay Connected Lead Engagement**: Validated 3-field engagement form (Full Name, Verified Email, Phone Number) with real-time feedback, honeypot bot defense, and secure database persistence.
- **Accessible & High-Performance UI**: Modern glassmorphic aesthetic, OKLCH palette, ambient sunrise glow effects, and responsive layout across mobile and desktop.

---

## 🛠️ Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **UI Library**: [React 19](https://react.dev) with [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/vite`
- **Component Primitives**: [Radix UI](https://www.radix-ui.com) & [Lucide Icons](https://lucide.dev)
- **Validation**: [Zod](https://zod.dev)
- **Data & Storage**: [Supabase](https://supabase.com) client with real-time row-level security
- **Testing**: [Vitest](https://vitest.dev) & [React Testing Library](https://testing-library.com)
- **Code Hygiene**: ESLint 9 & Prettier

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v20 or v22+ recommended)
- [npm](https://www.npmjs.com)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd delivery-dock-main

# Install dependencies
npm install
```

### Local Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🧪 Testing & Code Quality

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Type check with TypeScript
npx tsc --noEmit

# Run ESLint linter
npm run lint

# Format code with Prettier
npm run format

# Production Build
npm run build
```

---

## 🌐 Production & GoDaddy Launch

For complete step-by-step instructions on setting up DNS records, SSL certificates, Supabase database rules, and launching your custom domain on **GoDaddy**, see the detailed guide:
👉 **[DEPLOYMENT.md](./DEPLOYMENT.md)**

---

## 📁 Project Structure

```text
├── public/                 # Static assets (official Logo.png, favicons)
├── src/
│   ├── assets/             # Asset metadata & descriptors
│   ├── components/         # Reusable UI primitives & Radix components
│   │   └── ui/             # Buttons, cards, dialogs, inputs, etc.
│   ├── hooks/              # Custom React hooks (useLanguage, useMobile)
│   ├── integrations/       # Backend integrations (Supabase client & schemas)
│   ├── lib/                # Internationalization (i18n), Zod schemas, utilities
│   ├── routes/             # TanStack file-based routes (__root.tsx, index.tsx)
│   ├── styles.css          # Design tokens, typography, and glassmorphic styles
│   └── test/               # Vitest configuration & routing suites
├── drizzle/                # Database migrations & schemas
├── package.json            # Project manifest & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & bundle pipeline
```

---

## 👨‍💻 Author & Lead Engineer

This platform was designed, engineered, and crafted by **Bavly Hamdy**:

- **LinkedIn**: [https://www.linkedin.com/in/bavly-hamdy](https://www.linkedin.com/in/bavly-hamdy)
- **Role**: Lead Full-Stack Software Engineer & UI/UX Architect

---

## 🔒 Security & Privacy

All inquiries collected through the "Stay Connected" portal are treated with confidentiality and stored securely under strict row-level security policies. Contact details are never exposed to public endpoints.

---

## 📄 License

© 2026 Second Chance Transplant Foundation. All rights reserved.
