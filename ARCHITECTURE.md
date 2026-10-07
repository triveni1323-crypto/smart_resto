# SmartResto Architecture

## System Overview

SmartResto follows a monorepo architecture with clear separation between frontend, backend, and shared code.

```
┌─────────────────────────────────────────────────────┐
│              Frontend (React + Vite)                │
│  Components, Pages, Hooks, Services, Types          │
└──────────────────┬──────────────────────────────────┘
                   │ HTTP/WebSocket
                   │
┌──────────────────▼──────────────────────────────────┐
│         Backend (Node.js + Express + tRPC)          │
│  Routes, Services, Middleware, Database, AI         │
└──────────────────┬──────────────────────────────────┘
                   │ SQL
                   │
┌──────────────────▼──────────────────────────────────┐
│         PostgreSQL Database                          │
│  Tables: Users, Orders, Inventory, Reservations... │
└─────────────────────────────────────────────────────┘
```

## Data Flow

### Order Flow
1. **Customer** browses menu via frontend
2. **Customer** places order → Frontend sends to backend via tRPC
3. **Backend** validates, creates order, updates inventory
4. **Kitchen** sees order on order board (real-time via WebSocket)
5. **Staff** updates order status → All screens update
6. **Customer** sees order status live
7. **Order served** → Inventory finalized, bill generated

### Real-Time Updates
- **WebSocket connections** maintained between frontend and backend
- **Order board** syncs across all staff devices
- **Inventory alerts** broadcast to managers
- **Chat notifications** via Server-Sent Events (SSE)

## Database Schema (Simplified)

```sql
-- Core Tables
USERS (id, email, role, restaurant_id, created_at)
RESTAURANTS (id, name, address, phone, config)
MENU_ITEMS (id, restaurant_id, name, price, category, available)
TABLES (id, restaurant_id, number, capacity)

-- Transaction Tables
RESERVATIONS (id, table_id, user_id, date, time, party_size, status)
ORDERS (id, restaurant_id, table_id, customer_id, created_at, status)
ORDER_ITEMS (id, order_id, menu_item_id, quantity, price)
BILLS (id, order_id, total, tax, discount, paid_at)

-- Operations
INVENTORY (id, menu_item_id, quantity, unit_cost)
INVENTORY_LOGS (id, item_id, change, reason, timestamp)
PAYMENTS (id, bill_id, method, amount, status)

-- Analytics
ORDER_ANALYTICS (order_id, item_id, quantity, revenue, timestamp)
```

## API Architecture (tRPC)

### Router Structure
```
router
  ├── auth.router
  │   ├── login
  │   ├── logout
  │   └── getProfile
  │
  ├── menu.router
  │   ├── getItems
  │   ├── getItemById
  │   └── updateItem (manager)
  │
  ├── orders.router
  │   ├── create
  │   ├── getAll
  │   ├── updateStatus
  │   └── getAnalytics (manager)
  │
  ├── reservations.router
  │   ├── create
  │   ├── getAvailableTables
  │   └── cancel
  │
  ├── inventory.router
  │   ├── getItems
  │   ├── updateLevel
  │   └── getLowStockAlerts
  │
  ├── billing.router
  │   ├── getBill
  │   ├── processPayment
  │   └── getReceipts
  │
  └── ai.router
      ├── chat
      ├── getRecommendations
      └── forecastDemand
```

## Authentication & Authorization

### Flow
1. User signs in via OAuth (Google)
2. Backend validates token, creates session
3. JWT token issued with user role
4. All tRPC calls include JWT in header
5. Middleware checks role → Routes return 403 if unauthorized

### Roles
- **CUSTOMER**: Can order, reserve tables
- **STAFF**: Can manage orders, inventory
- **MANAGER**: Full access to analytics, staff management
- **OWNER**: Administrative access

## Real-Time Features

### WebSocket Implementation
- Backend maintains connections from order board clients
- On order status change → broadcast to all connected clients
- Reconnection logic handles network drops

### Event Types
- `order:created`
- `order:status-updated`
- `inventory:low-stock`
- `reservation:confirmed`
- `table:available`

## Performance Considerations

### Caching (Redis)
- Menu items cache (1 hour TTL)
- Inventory cache (5 min TTL)
- User session cache

### Database Optimization
- Indexed queries on `restaurant_id`, `status`, `created_at`
- Connection pooling via PgBouncer
- Query result caching for analytics

### Frontend Optimization
- Code splitting per route
- Lazy loading of components
- Memoization of expensive computations

## Error Handling

### Backend
- tRPC error middleware catches exceptions
- Returns structured error objects with codes
- Logs errors to monitoring service

### Frontend
- Network error retry logic (exponential backoff)
- User-facing error messages
- Fallback UI for network failures

## Deployment

### Stack
- **Frontend**: Vercel or Netlify (SPA)
- **Backend**: Railway, Render, or Heroku (Node.js)
- **Database**: Managed PostgreSQL (Supabase, AWS RDS)
- **File Storage**: S3 or similar for images

### Environment Management
- Development: Local docker-compose
- Staging: Cloud deployment with staging database
- Production: Cloud deployment with encrypted configs

## Future Enhancements

- [ ] Multi-tenant architecture for SaaS
- [ ] GraphQL API alongside tRPC
- [ ] Mobile app (React Native)
- [ ] Advanced analytics and ML models
- [ ] Payment gateway integration (Stripe, UPI)
- [ ] Kitchen display system (KDS) optimization
- [ ] WhatsApp and SMS integrations
- [ ] Delivery platform APIs (Zomato, Swiggy)
