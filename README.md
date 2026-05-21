Terrann Interiors A premium, full-stack architectural tile gallery. Terrann Interiors is a high-end web application designed to catalog and showcase premium ceramic, porcelain, and natural stone tiles. It prioritizes user experience through fluid typography, defensively programmed responsive layouts, and zero-layout-shift data fetching.

Live Link: https://terrann-interior.vercel.app

🛠️ Technologies Used Framework: Next.js (App Router)
Styling: Tailwind CSS & DaisyUI
Authentication: BetterAuth
Database: MongoDB & JSON Server (Mock API)
Icons & Fonts: React Icons & Google Fonts (Montserrat)
Notifications: React Toastify (Custom styled)

🚀 Key Features

Secure User Authentication Supports both credential (email/password) and social (Google OAuth) logins using BetterAuth, complete with intelligent client-side routing to protect private routes like user profiles and individual tile details.

High-Performance Real-Time Search Features client-side array filtering utilizing .includes() and .filter() for instant, layout-shift-free gallery queries. By fetching the initial payload natively on the server, the client search operates in real-time without triggering additional network requests.

Defensive Mobile Responsiveness Meticulously crafted Flexbox layouts ensure pixel-perfect rendering across extreme mobile devices and ultra-wide desktop environments. Utilizing fractional widths and strict flex-shrink rules prevents responsive layout collapse.
