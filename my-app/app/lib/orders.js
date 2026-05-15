export const ORDER_STORAGE_KEY = 'hirog_orders';

export function generateOrderId() {
  const stamp = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `HM-${stamp}-${random}`;
}

export function getStoredOrders() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(ORDER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  if (typeof window === 'undefined') {
    return order;
  }

  const orders = getStoredOrders();
  const nextOrders = [order, ...orders.filter((item) => item.id !== order.id)];
  window.localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(nextOrders));
  return order;
}

export function findOrderById(orderId) {
  const normalized = orderId.trim().toUpperCase();
  return getStoredOrders().find((order) => order.id.toUpperCase() === normalized) || null;
}
