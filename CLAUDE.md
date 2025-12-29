# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a feminist storefront e-commerce application built with React, TypeScript, Vite, and Tailwind CSS. It features a product catalog with a shopping cart system. The project is also integrated with Lovable, which provides collaborative UI development capabilities.

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS with shadcn-ui component library
- **State Management**: React Context API (cart), TanStack Query for server state
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn-ui (Radix UI primitives + Tailwind CSS)
- **Development**: SWC for fast compilation, ESLint for code quality
- **Notifications**: Sonner (toast notifications)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn-ui component library (auto-generated)
│   ├── Navbar.tsx      # Header navigation with cart button
│   ├── HeroSection.tsx # Landing hero banner
│   ├── ProductsSection.tsx  # Product grid display
│   ├── ProductCard.tsx      # Individual product card with add-to-cart
│   ├── CartDrawer.tsx       # Side drawer for shopping cart
│   ├── MissionSection.tsx   # Mission/values section
│   ├── NewsletterSection.tsx # Email signup section
│   └── Footer.tsx           # Footer component
├── contexts/            # React Context providers
│   └── CartContext.tsx  # Shopping cart state management
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile viewport detection
│   └── use-toast.ts    # Toast notification hook
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page (wraps all sections)
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
│   └── utils.ts        # Tailwind CSS classname merging (cn utility)
├── App.tsx             # Root app component with routing and providers
├── main.tsx            # Entry point
├── index.css           # Global styles (Tailwind directives)
└── vite-env.d.ts       # Vite environment type definitions
```

## Key Architecture Patterns

### Cart State Management (CartContext)

The cart system is built on React Context API with the following features:
- **CartContext** (`src/contexts/CartContext.tsx`): Manages cart items, quantities, and drawer visibility
- **Cart Item Structure**: `{id, name, slogan, price, image, quantity}`
- **Item ID Generation**: Based on product name (lowercased with spaces replaced by dashes)
- **Key Methods**:
  - `addToCart()` - Adds item or increments quantity if exists
  - `removeFromCart()` - Removes entire item
  - `updateQuantity()` - Updates quantity or removes if ≤ 0
  - `clearCart()` - Empties cart
- **Computed Values**: `totalItems` and `totalPrice` calculated from items array
- **UI Integration**: `isCartOpen` state controls CartDrawer visibility

### Component Architecture

**Layout Components**: Navbar → HeroSection → ProductsSection → MissionSection → NewsletterSection → Footer (all rendered in Index.tsx)

**shadcn-ui Integration**: All UI components in `src/components/ui/` are auto-generated from shadcn-ui. Regenerate with:
```bash
npx shadcn-ui@latest add [component-name]
```

**Routing**: Using React Router with catch-all 404 route. Add new routes in App.tsx `<Routes>` before the `*` catch-all.

## Common Commands

### Development
```bash
npm run dev          # Start Vite dev server (http://localhost:8080)
npm run build        # Production build
npm run build:dev    # Development build with source maps
npm run lint         # Run ESLint on all files
npm run preview      # Preview production build locally
```

### Dependencies Management
```bash
npm i                # Install dependencies
npm install          # Same as above
```

## Code Patterns & Conventions

### Import Aliases
Use `@/` alias for src imports (configured in tsconfig):
```tsx
import { useCart } from "@/contexts/CartContext";
import Button from "@/components/ui/button";
```

### Type Safety
- TypeScript strict mode is disabled for flexibility
- Define interfaces explicitly for context values (see CartContextType)
- Use `Omit` for product type in `addToCart` to exclude derived fields

### Component Patterns
- Functional components only (no class components)
- Use React Router outlet for nested routes
- Export components as default exports
- Use `CartProvider` wrapper for any page needing cart functionality

### Tailwind CSS
- Use utility classes directly in JSX
- Use `cn()` utility from `@/lib/utils.ts` to conditionally merge Tailwind classes
- shadcn-ui components pre-styled with Tailwind (override with className prop)

## Configuration Files

- **vite.config.ts**: Vite config with React SWC plugin, path alias, and Lovable component tagger
- **tsconfig.json**: TypeScript base config delegating to tsconfig.app.json
- **tsconfig.app.json**: App-specific TypeScript settings (ES2020 target, React JSX)
- **eslint.config.js**: ESLint with React hooks and refresh plugins
- **postcss.config.js**: PostCSS with Tailwind CSS and Autoprefixer

## Important Notes

- **Type Checking**: Relaxed TypeScript settings allow development velocity. Tighten if needed with `"strict": true` in tsconfig.app.json.
- **No Test Setup**: No test runner configured. Add vitest if testing is needed.
- **No API Layer**: Currently a static UI. Implement API integration using TanStack Query (already installed) when backend needed.
- **Clipboard Handling**: Uses industry-standard `copy-to-clipboard` library for reliable cross-browser clipboard access.
