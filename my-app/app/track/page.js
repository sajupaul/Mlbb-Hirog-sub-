'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { findOrderById } from '../lib/orders';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [searched, setSearched] = useState(false);
  const [order, setOrder] = useState(null);

  const trackOrder = (value = orderId) => {
    const trimmed = value.trim();
    setOrderId(trimmed);
    setOrder(trimmed ? findOrderById(trimmed) : null);
    setSearched(true);
  };

  useEffect(() => {
    const queryOrder = new URLSearchParams(window.location.search).get('order');
    if (queryOrder) {
      trackOrder(queryOrder);
    }
  }, []);

  return (
    <div className="pt-20 pb-8 px-4 md:px-8 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-4 inline-flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </Link>

      <div className="text-center mb-8 mt-4">
        <h1 className="text-2xl md:text-4xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-2">
          Track Your Order
        </h1>
        <p className="text-sm text-slate-400">Enter your order ID to check delivery status</p>
      </div>

      <div className="glass rounded-2xl p-6 mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Order ID (e.g. HM-260515-ABCD)"
            value={orderId}
            onChange={(event) => {
              setOrderId(event.target.value);
              setSearched(false);
              setOrder(null);
            }}
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
          />
          <button
            onClick={() => trackOrder()}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all whitespace-nowrap"
          >
            Track
          </button>
        </div>
      </div>

      {searched && order && (
        <div className="glass rounded-2xl p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-slate-500">Order ID</p>
              <p className="text-sm font-bold text-white">{order.id}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
              {order.status}
            </span>
          </div>

          <div className="h-px bg-white/10 mb-4" />

          <div className="space-y-4">
            {[
              { status: 'Order Placed', desc: 'Your order has been created successfully', done: true },
              { status: 'Payment Pending', desc: 'Support will confirm payment and start processing', done: true },
              { status: 'Processing', desc: 'Your top-up is being prepared', done: order.status !== 'Pending' },
              { status: 'Delivered', desc: 'Your items have been credited to your account', done: order.status === 'Delivered' },
            ].map((step, index) => (
              <div key={step.status} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${step.done ? 'bg-emerald-500' : 'bg-slate-700'}`} />
                  {index < 3 && <div className={`w-0.5 flex-1 mt-1 ${step.done ? 'bg-emerald-500/30' : 'bg-slate-800'}`} />}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-medium text-white">{step.status}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                  {index === 0 && (
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/10 my-4" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Game</span>
            <span className="text-white font-medium">{order.gameName}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-slate-400">Package</span>
            <span className="text-white font-medium">{order.productName}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-slate-400">Amount</span>
            <span className="font-bold gradient-text">Rs. {order.price}</span>
          </div>
          {Object.entries(order.player).map(([label, value]) => (
            <div key={label} className="flex items-center justify-between text-sm mt-2">
              <span className="text-slate-400">{label}</span>
              <span className="text-white font-medium">{value}</span>
            </div>
          ))}
        </div>
      )}

      {searched && !orderId && (
        <div className="glass rounded-2xl p-8 text-center animate-slide-up">
          <p className="text-slate-400">Please enter an order ID to track</p>
        </div>
      )}

      {searched && orderId && !order && (
        <div className="glass rounded-2xl p-8 text-center animate-slide-up">
          <p className="text-white font-semibold mb-1">Order not found</p>
          <p className="text-sm text-slate-400">Please check the ID or contact support with your order details.</p>
        </div>
      )}

      {!searched && (
        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-sm text-slate-400 mb-1">Enter your order ID above to track your order</p>
          <p className="text-xs text-slate-600">Order IDs are shown after you buy a package</p>
        </div>
      )}
    </div>
  );
}
