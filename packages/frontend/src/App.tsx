import { BarChart3, BellRing, ChefHat, LayoutDashboard, PackageCheck, Sparkles, UtensilsCrossed } from 'lucide-react';

const stats = [
  { label: 'Revenue', value: '₹1,25,400', change: '+12.4%' },
  { label: 'Orders Today', value: '86', change: '+8.1%' },
  { label: 'Occupancy', value: '78%', change: '+5.7%' },
  { label: 'Low Stock Alerts', value: '3', change: '-2 items' },
];

const modules = [
  {
    icon: UtensilsCrossed,
    title: 'Menu & Orders',
    description: 'Live menu with real-time order status pipeline for kitchen and floor staff.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen View',
    description: 'Unified kitchen board to track preparing, ready, and served items effortlessly.',
  },
  {
    icon: BellRing,
    title: 'Reservations',
    description: 'Manage bookings, party sizes, and waitlists without double-booking tables.',
  },
  {
    icon: PackageCheck,
    title: 'Inventory',
    description: 'Low-stock alerts and automatic deduction when orders are placed.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track revenue patterns, peak hours, and forecast future demand.',
  },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    description: 'Get guest recommendations and manager insights from the same data layer.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-soft">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-2 backdrop-blur-sm">
              <LayoutDashboard size={22} />
            </div>
            <div>
              <p className="text-xl font-bold">SmartResto</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-violet-100 hover:text-white">Features</a>
            <a href="#analytics" className="text-sm font-medium text-violet-100 hover:text-white">Analytics</a>
            <a href="#about" className="text-sm font-medium text-violet-100 hover:text-white">About</a>
          </div>

          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-50">
            Launch Demo
          </button>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              Restaurant Intelligence Platform
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              Smarter service for the modern restaurant.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Replace paper order pads, WhatsApp bookings, and spreadsheet stock tracking with one real-time system for menu, reservations, orders, inventory, and billing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-violet-700">
                Book a Demo
              </button>
              <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                Explore Features
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Live Overview</h2>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Live</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-emerald-600">{stat.change}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-white">
              <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                <span>Order Pipeline</span>
                <span>12 active</span>
              </div>
              <div className="space-y-3">
                {['Placed', 'Preparing', 'Ready', 'Served'].map((status, index) => (
                  <div key={status} className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 rounded-full ${index <= 2 ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                    <div className="flex-1 rounded-full bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${index === 0 ? 'w-1/4' : index === 1 ? 'w-2/4' : index === 2 ? 'w-3/4' : 'w-full'} bg-gradient-to-r from-violet-400 to-indigo-400`}
                      />
                    </div>
                    <span className="text-xs text-slate-300">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Core Modules</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Everything a restaurant needs in one place</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {modules.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-4 inline-flex rounded-xl bg-violet-100 p-3 text-violet-700">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="analytics" className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Analytics</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Forecast demand and run smarter shifts</h2>
              <p className="mt-4 text-slate-600">
                SmartResto turns order history into actionable insight, helping managers predict peak hours, reduce stockouts, and allocate staff effectively.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Revenue Trend</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">+18.2%</span>
              </div>
              <div className="flex h-44 items-end gap-3">
                {[35, 52, 60, 58, 78, 90, 72].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-600 to-indigo-400" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-soft md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Why SmartResto</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Built for teams who need speed, clarity, and control.</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Unlike generic POS platforms, SmartResto is designed for small and mid-sized restaurants that want an affordable, role-aware system with real-time coordination between floor staff, kitchen, inventory, and managers.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
