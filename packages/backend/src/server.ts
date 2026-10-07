import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const app = express();
app.use(cors());
app.use(express.json());

const t = initTRPC.create();

const appRouter = t.router({
  health: t.procedure.query(() => ({ status: 'ok', service: 'smart-resto-backend' })),
  menuItems: t.procedure.query(() => [
    {
      id: 'm1',
      name: 'Margherita Pizza',
      description: 'Classic basil and mozzarella pizza',
      price: 320,
      category: 'Pizza',
      available: true,
    },
    {
      id: 'm2',
      name: 'Butter Paneer Masala',
      description: 'Creamy north-indian curry',
      price: 280,
      category: 'Main Course',
      available: true,
    },
    {
      id: 'm3',
      name: 'Cold Coffee',
      description: 'Iced coffee with cream',
      price: 180,
      category: 'Beverages',
      available: true,
    },
  ]),
  createOrder: t.procedure
    .input(
      z.object({
        tableNumber: z.number(),
        customerName: z.string(),
        items: z.array(
          z.object({
            menuItemId: z.string(),
            quantity: z.number().min(1),
          })
        ),
      })
    )
    .mutation(({ input }) => ({
      id: `ord_${Date.now()}`,
      ...input,
      status: 'placed',
      createdAt: new Date().toISOString(),
    })),
  dashboardStats: t.procedure.query(() => ({
    revenue: 12540,
    ordersToday: 86,
    peakHour: '19:00 - 20:00',
    occupancyRate: 78,
  })),
});

export type AppRouter = typeof appRouter;

const { server } = createHTTPServer({
  router: appRouter,
  middleware: async (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
      console.log(`${req.method} ${req.url} ${res.statusCode} (${Date.now() - start}ms)`);
    });
    next();
  },
  createContext: () => ({})
});

const port = Number(process.env.PORT || 3000);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'smart-resto-backend' });
});

server.listen(port, () => {
  console.log(`SmartResto backend listening on http://localhost:${port}`);
});

export default app;
