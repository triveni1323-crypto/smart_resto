export type UserRole = 'customer' | 'staff' | 'manager' | 'owner';

export type OrderStatus =
  | 'placed'
  | 'preparing'
  | 'ready'
  | 'served'
  | 'cancelled';

export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean;
}

export interface OrderItem {
  id: string;
  menuItemId: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  tableNumber: number;
  customerName: string;
  status: OrderStatus;
  createdAt: string;
  items: OrderItem[];
}

export interface Reservation {
  id: string;
  tableNumber: number;
  guestName: string;
  partySize: number;
  status: ReservationStatus;
  date: string;
  time: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  lowStockThreshold: number;
}

export interface DashboardStats {
  revenue: number;
  ordersToday: number;
  peakHour: string;
  occupancyRate: number;
}

export const appConstants = {
  defaultRestaurantName: 'SmartResto',
  supportedRoles: ['customer', 'staff', 'manager', 'owner'] as const,
};
