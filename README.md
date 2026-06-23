# Xebia LMS Frontend

A next-generation Learning Management System frontend designed specifically for structured learning, educators, trainers, and forward-thinking organizations.

## Overview

This project is a high-performance, responsive React application built with Vite and Tailwind CSS. It features a strict, centralized Design System that enforces visual consistency, semantic HTML structure, and beautiful micro-interactions powered by Framer Motion.

## Key Features

- **Strict Design System**: Unified typography, spacing (120px hero, 100px sections), border-radii, and a simplified color palette (Primary Purple, Secondary Emerald) managed via CSS tokens in Tailwind v4.
- **Interactive UI**: Fluid scroll-spy navigation, glassmorphism effects, 3D tilt interactions on cards, and animated statistics counters.
- **Semantic Components**: Cleanly separated components (`Hero`, `Features`, `PortalSelection`, `FAQ`, `Statistics`, `Contact`, `Footer`).
- **Performance Optimized**: Reusable CSS utility classes resulting in a minimal CSS footprint.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Scroll (for smooth single-page scrolling)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/GURNOOR-SANDHU01/xebia-lms-frontend.git
   cd xebia-lms-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Design System Configuration

The core design tokens are located in `src/index.css`. Modifications to the primary colors, border radii, or typography scales should be made directly to the `:root` variables, which will instantly propagate across the entire application.

## License

This project is licensed under the MIT License.
