# 🎟️ TickedIn — Event Ticket Marketplace SaaS

TickedIn is a modern, responsive B2B ticketing platform built with React, TypeScript, Clerk, Tailwind CSS, and TanStack Router. It allows users to browse, reserve, and purchase tickets for concerts, sports, and event experiences.

## ✨ Features

- 🔐 User authentication with Clerk
- 🌙 Dark mode support
- 📅 Responsive event listing grid
- 📍 Event detail pages with full descriptions
- 🎫 Ticket reservation & countdown expiration
- 💳 Purchase and release flow for tickets
- 📱 Fully responsive & mobile-first design

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Auth**: Clerk.dev
- **UILibrary**: Shadcn/UI
- **Design**: Responsive UI with dark mode support

---

## 📦 Installation
1. **Clone the repo**

<!-- ```bash -->
git clone https://github.com/ruebeniosdev/tickedin.git


1. **Install dependencies**
bun install

## 📦 Set up Clerk
Create a .env.local file and add your Clerk credentials:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CLERK_SECRET_KEY=your_clerk_secret_key

## 📦 Development Server
bun dev

## 🧱 Folder Structure

src/
├── assets/          # Images & media
├── components/      # Reusable UI components (EventCard, Header, etc.)
├── pages/           # Route-based pages (EventList, EventDetail, etc.)
├── router/          # TanStack Router setup
├── styles/          # Global styles
├── App.tsx          # Root app file
└── main.tsx         # Entry point

## 🔐 Authentication
We use Clerk for authentication (sign in, sign up, session management). Users must be authenticated to access ticket reservation and checkout features.


## ✅ To-Do Features

✅ Event list grid

✅ Event detail page

✅ Reserve/purchase ticket UI

⏳ Payment integration (Stripe or Flutterwave)

⏳ Organizer dashboard

⏳ Admin controls

⏳ Search & filter events

⏳ Email notifications

## 📸 Screenshots
![alt text](<src/assets/Screenshot 2025-07-01 105003.png>)
## 👨‍💻 Author
Built with ❤️ by Akankobateng Rueben Ansoliwen