# Terrann Interiors - Architectural Tile Gallery


**Live Site URL:** [https://terrann-interior.vercel.app/](https://terrann-interior.vercel.app/)

## 📖 Overview

Terrann Interiors is a premium, full-stack architectural tile gallery — a high-end web application designed to catalog and showcase premium ceramic, porcelain, and natural stone tiles. It prioritizes user experience through fluid typography, defensively programmed responsive layouts, and zero-layout-shift data fetching.

## ✨ Core Features

* **Secure User Authentication:** Supports both credential (email/password) and social (Google OAuth) logins using BetterAuth, complete with intelligent client-side routing to protect private routes like user profiles and individual tile details.
* **High-Performance Real-Time Search:** Client-side array filtering using `.includes()` and `.filter()` for instant, layout-shift-free gallery queries. The initial payload is fetched natively on the server, so search operates in real-time without triggering additional network requests.
* **Defensive Mobile Responsiveness:** Meticulously crafted Flexbox layouts ensure pixel-perfect rendering across extreme mobile devices and ultra-wide desktop environments. Fractional widths and strict flex-shrink rules prevent responsive layout collapse.

## 🛠️ Technologies Used

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS & DaisyUI
* **Authentication:** BetterAuth
* **Database:** MongoDB & JSON Server (Mock API)
* **Icons & Fonts:** React Icons & Google Fonts (Montserrat)
* **Notifications:** React Toastify (custom styled)

## 📦 Dependencies

```
next
react
react-dom
tailwindcss
daisyui
better-auth
json-server
react-icons
react-toastify
```

> ⚠️ Update this list with the exact packages from your `package.json` — this is a placeholder based on what's been mentioned so far.

## 🚀 Getting Started Locally

1. Clone the repo

   ```bash
   git clone https://github.com/rupesh-saha/Terrann-Interior.git
   cd Terrann-Interior
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables — create a `.env.local` file in the root:

   ```env
   NEXT_PUBLIC_API_URL=
   BETTER_AUTH_SECRET=
   MONGODB_URI=
   ```

4. Run the mock JSON Server (if used for local data)

   ```bash
   npx json-server --watch db.json --port 5000
   ```

5. Run the dev server

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔗 Links

* **Live Site:** [https://terrann-interior.vercel.app/](https://terrann-interior.vercel.app/)
