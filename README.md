# SmartResto

A comprehensive web platform that replaces paper order pads, WhatsApp bookings, and spreadsheet stock counts for small and mid-size restaurants.

## 🎯 Overview

SmartResto is a unified solution designed for small restaurant teams who find enterprise POS systems too costly and complex. It combines:

- **Live Menu Management** - Dynamic menu with real-time availability
- **Table Reservations** - Booking system with automatic waitlist
- **Order Pipeline** - Shared status board between kitchen and floor staff
- **Inventory Management** - Real-time stock tracking with low-stock alerts
- **Billing System** - Itemized bills with live payment status
- **Analytics Dashboard** - Revenue, peak hours, and demand forecasts
- **AI Chat Assistant** - Guest recommendations and manager insights

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI framework
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first styling

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web server framework
- **tRPC** - Type-safe API layer with end-to-end type safety
- **PostgreSQL** - Relational database
- **Drizzle ORM** - TypeScript-first ORM

### Authentication & Authorization
- **OAuth** - Secure sign-in via Google/other providers
- **Role-based Access Control (RBAC)** - Separate views for customers, staff, and managers

### AI & Analytics
- **LLM Integration** - Chat assistant with role-aware prompts
- **Demand Forecasting** - Predict peak hours and demand patterns

## 📁 Project Structure

```
smart_resto/
├── packages/
│   ├── frontend/              # React + Vite application
│   │   ├── src/
│   │   │   ├── components/    # Reusable UI components
│   │   │   ├── pages/         # Route pages
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── services/      # API client services
│   │   │   ├── types/         # TypeScript types
│   │   │   ├── styles/        # Global styles
│   │   │   └── App.tsx        # Root component
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   ├── backend/               # Express.js API server
│   │   ├── src/
│   │   │   ├── routes/        # API route handlers
│   │   │   ├── services/      # Business logic
│   │   │   ├── db/            # Database schemas (Drizzle)
│   │   │   ├── middleware/    # Auth, error handling, etc.
│   │   │   ├── types/         # TypeScript types
│   │   │   ├── ai/            # AI chat and forecasting
│   │   │   ├── utils/         # Helper functions
│   │   │   └── server.ts      # Express app setup
│   │   ├── .env.example
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── shared/                # Shared types and utilities
│       ├── src/
│       │   ├── types/         # Shared TypeScript types
│       │   ├── constants/     # Shared constants
│       │   └── utils/         # Shared utilities
│       └── package.json
│
├── docker-compose.yml         # Local development setup
├── .env.example              # Environment template
├── .gitignore
├── package.json              # Root monorepo configuration
├── pnpm-workspace.yaml       # pnpm workspace config
├── tsconfig.json             # Shared TypeScript config
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm or npm
- PostgreSQL 13+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/triveni1323-crypto/smart_resto.git
   cd smart_resto
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start PostgreSQL** (using Docker)
   ```bash
   docker-compose up -d postgres
   ```

5. **Run database migrations**
   ```bash
   cd packages/backend
   pnpm run db:migrate
   ```

6. **Start development servers**
   ```bash
   # Terminal 1: Backend
   cd packages/backend
   pnpm run dev

   # Terminal 2: Frontend
   cd packages/frontend
   pnpm run dev
   ```

7. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📋 Core Features

### 1. Menu Management
- Create, update, and manage menu items
- Real-time availability status
- Categorized items (Appetizers, Mains, Desserts, etc.)
- Pricing and descriptions

### 2. Reservations & Bookings
- Table availability calendar
- Automatic waitlist when full
- Guest notifications
- Party size and preferences

### 3. Order Pipeline
- Unified order board visible to kitchen and floor staff
- Status transitions: Placed → Preparing → Ready → Served
- Real-time kitchen display screen (KDS)
- Order time tracking

### 4. Inventory Management
- Track stock levels by item
- Auto-deduct stock when orders are placed
- Low-stock alerts and thresholds
- Inventory audit and history

### 5. Billing System
- Itemized bills generated from orders
- Multiple payment methods
- Real-time payment status
- Discount and tax calculations

### 6. Analytics Dashboard
- Revenue tracking and reports
- Peak hour analysis
- Demand forecasting
- Staff performance metrics
- Customer insights

### 7. AI Chat Assistant
- Menu recommendations for guests
- Demand insights for managers
- Order status queries
- Reservation assistance

## 🔐 Authentication & Authorization

Three role-based views:

- **Customer**: Browse menu, make reservations, view orders
- **Staff**: Manage orders, update inventory, handle reservations
- **Manager**: Access analytics, view all data, manage staff

## 🗄️ Database Schema (Preview)

### Main Tables
- `users` - User accounts with roles
- `restaurants` - Restaurant metadata
- `menu_items` - Menu items and pricing
- `tables` - Dining tables and capacity
- `reservations` - Table bookings
- `orders` - Customer orders
- `order_items` - Items in each order
- `inventory` - Stock levels
- `bills` - Bill records
- `payments` - Payment transactions

## 🤖 AI Integration

### Chat Assistant
- LLM-powered recommendations
- Context-aware responses
- Multi-language support

### Demand Forecasting
- Predict orders by time, day, season
- Suggest staffing levels
- Optimize inventory planning

## 📱 Real-Time Updates

- **WebSockets** for live order updates
- **Server-Sent Events (SSE)** for notifications
- **Database polling** for fallback

## 🚦 Development Roadmap

- [ ] Core CRUD for menus, orders, reservations
- [ ] Real-time order board
- [ ] Inventory tracking system
- [ ] Billing and payment integration
- [ ] Analytics dashboard
- [ ] AI chat assistant
- [ ] Demand forecasting
- [ ] Kitchen display screens (KDS)
- [ ] Mobile app (React Native)
- [ ] UPI/WhatsApp payments
- [ ] Delivery platform sync
- [ ] Multi-branch support
- [ ] Multi-tenant SaaS model

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 👨‍💻 Author

**Triveni** - Project Lead & Development

## 📞 Support

For issues and feature requests, please use the [GitHub Issues](https://github.com/triveni1323-crypto/smart_resto/issues) page.

---

**Built with ❤️ for small restaurant teams**
