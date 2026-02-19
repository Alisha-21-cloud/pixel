# 🚀 Full Stack Analytics SaaS Platform

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)

A modern **Full Stack Analytics SaaS Platform** built with **Next.js
16**, **Insforge Authentication**, and **Tailwind CSS**, deployed on
**Vercel**.

Track everything about your website visitors with a single script tag
--- from unique visitors and page views to traffic sources, live
sessions, device details, and geolocation maps.

------------------------------------------------------------------------

## 🌟 Features

-   🔐 Secure Authentication (Insforge)
-   📊 Analytics Dashboard with Interactive Charts
-   📈 Unique Visitors Tracking
-   👀 Page Views Tracking
-   🌍 Geolocation Tracking with Map View
-   🖥️ Device Tracking (Browser & OS Detection)
-   🌐 Traffic Source Tracking (Referrer, UTM)
-   🚪 Entry & Exit Page Analytics
-   ⚡ Real-Time Live Visitor Tracking
-   🏷️ Single Script Tag Integration
-   🎨 Modern UI with ShadCN + Tailwind Themes
-   🚀 One-Click Deployment with Vercel

------------------------------------------------------------------------

## 🏗️ Tech Stack

### Frontend

-   Next.js 16 (App Router)
-   Tailwind CSS
-   ShadCN UI Components
-   ShadCN Themes

### Backend

-   Next.js API Routes
-   Insforge Authentication
-   IP API (Geolocation)
-   Flags API (Country Flags)

### Deployment

-   Vercel

------------------------------------------------------------------------

## 🔌 External APIs Used

  API                     Purpose
  ----------------------- ------------------------
  http://ip-api.com       Visitor IP Geolocation
  https://flagsapi.com    Country Flag Rendering
  https://ui.shadcn.com   UI Components
  https://nextjs.org      Framework

------------------------------------------------------------------------

## 🧠 How It Works

1.  User signs up / logs in via Insforge authentication.
2.  User creates a project inside dashboard.
3.  Platform generates a unique tracking script.
4.  User adds the script tag to their website.
5.  Script collects:
    -   Visitor IP
    -   Device info
    -   Browser
    -   OS
    -   Referrer
    -   Page URL
    -   Timestamp
6.  Data is stored securely.
7.  Dashboard renders:
    -   Charts
    -   Maps
    -   Device analytics
    -   Traffic insights
    -   Live visitor tracking

------------------------------------------------------------------------

## 🏷️ Script Tag Example

``` html
<script src="https://yourdomain.com/analytics.js" data-project-id="PROJECT_ID"></script>
```

Just add this script to your website's `<head>` or before `</body>`.

------------------------------------------------------------------------

## 📊 Dashboard Analytics Includes

-   Total Visitors
-   Unique Visitors
-   Total Page Views
-   Top Pages
-   Traffic Sources
-   Device Breakdown
-   OS Breakdown
-   Country Map Visualization
-   Entry Pages
-   Exit Pages
-   Live Visitors Counter

------------------------------------------------------------------------

## 🛠️ Local Development Setup

### 1️⃣ Clone Repository

``` bash
git clone https://github.com/yourusername/analytics-saas.git
cd analytics-saas
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Setup Environment Variables

Create `.env.local`:

    NEXT_PUBLIC_APP_URL=http://localhost:3000
    INSFORGE_SECRET_KEY=your_secret
    INSFORGE_APP_URL=your_url

### 4️⃣ Run Development Server

``` bash
npm run dev
```

Visit:

    http://localhost:3000

------------------------------------------------------------------------

## 🚀 Deployment (Vercel)

1.  Push code to GitHub
2.  Connect repository to Vercel
3.  Add environment variables
4.  Deploy

Your Analytics SaaS is now live.

------------------------------------------------------------------------

## 📈 SaaS Capabilities

-   Multi-tenant architecture
-   Per-project analytics isolation
-   Scalable tracking system
-   Real-time data updates
-   Production-ready deployment

------------------------------------------------------------------------

## 🔒 Security

-   Auth-protected dashboard
-   Project-level data isolation
-   Secure API endpoints
-   Environment variable protection

------------------------------------------------------------------------

## 🎨 UI & Design

-   Clean SaaS Dashboard Layout
-   Dark/Light Mode Support
-   Responsive Design
-   Professional Charts & Graphs
-   Modern ShadCN UI Components

------------------------------------------------------------------------

## 🧩 Future Improvements

-   Revenue tracking
-   Conversion funnel analytics
-   Session replay
-   Heatmaps
-   AI-powered insights
-   Custom event tracking

------------------------------------------------------------------------

## 📜 License

MIT License

------------------------------------------------------------------------

## 👨‍💻 Author

Built with ❤️ using Next.js 16 & Insforge.

------------------------------------------------------------------------

# ⭐ If you like this project, give it a star!
