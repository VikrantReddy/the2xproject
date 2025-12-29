# The XX Project

A feminist e-commerce storefront empowering women through fashion. Every purchase supports women's rights organizations worldwide.

## Getting Started

### Prerequisites

- Node.js & npm installed

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd the2xproject

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Development

### Available Commands

```sh
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn-ui
- **State Management**: React Context API (cart)
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner (toast)
- **Clipboard**: copy-to-clipboard

## Features

- Responsive product showcase with dynamic grid layout
- Shopping cart system with localStorage support
- Shareable cart links with simple URL encoding (no backend required)
- Checkout page displaying shared cart details
- Mobile-friendly design
- Accessible UI components (Radix UI)
