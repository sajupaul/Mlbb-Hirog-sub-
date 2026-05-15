// Static game & product data for MVP
export const GAMES = [
  {
    id: 'mlbb',
    name: 'Mobile Legends: Bang Bang',
    short: 'MLBB',
    publisher: 'Moonton',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    accent: 'from-fuchsia-600 via-purple-600 to-indigo-700',
    fields: [
      { key: 'userId', label: 'User ID', placeholder: '123456789', type: 'text' },
      { key: 'serverId', label: 'Server (Zone) ID', placeholder: '2001', type: 'text' }
    ],
    featured: true,
    description: 'Top up Mobile Legends: Bang Bang diamonds instantly. The fastest, safest way to recharge your MLBB account with 24/7 support and best prices.'
  },
  {
    id: 'ff',
    name: 'Free Fire',
    short: 'FF',
    publisher: 'Garena',
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=600&q=80',
    accent: 'from-orange-500 via-red-600 to-rose-700',
    fields: [{ key: 'userId', label: 'Player ID', placeholder: '1234567890', type: 'text' }],
    description: 'Top up Garena Free Fire diamonds with instant delivery.'
  },
  {
    id: 'pubgm',
    name: 'PUBG Mobile',
    short: 'PUBGM',
    publisher: 'Tencent',
    image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=600&q=80',
    accent: 'from-amber-500 via-orange-600 to-red-700',
    fields: [{ key: 'userId', label: 'Character ID', placeholder: '5012345678', type: 'text' }],
    description: 'Top up PUBG Mobile UC instantly and safely.'
  },
  {
    id: 'genshin',
    name: 'Genshin Impact',
    short: 'Genshin',
    publisher: 'HoYoverse',
    image: 'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?auto=format&fit=crop&w=600&q=80',
    accent: 'from-cyan-500 via-blue-600 to-indigo-700',
    fields: [
      { key: 'userId', label: 'UID', placeholder: '700000000', type: 'text' },
      { key: 'server', label: 'Server', placeholder: 'Asia / Europe / America', type: 'text' }
    ],
    description: 'Recharge Genesis Crystals and Blessing of the Welkin Moon.'
  },
  {
    id: 'hsr',
    name: 'Honkai: Star Rail',
    short: 'HSR',
    publisher: 'HoYoverse',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=600&q=80',
    accent: 'from-violet-500 via-purple-600 to-fuchsia-700',
    fields: [
      { key: 'userId', label: 'UID', placeholder: '800000000', type: 'text' },
      { key: 'server', label: 'Server', placeholder: 'Asia', type: 'text' }
    ],
    description: 'Top up Oneiric Shards for Honkai: Star Rail.'
  },
  {
    id: 'valorant',
    name: 'Valorant',
    short: 'Valo',
    publisher: 'Riot Games',
    image: 'https://images.unsplash.com/photo-1636036824578-d0d300a4effb?auto=format&fit=crop&w=600&q=80',
    accent: 'from-rose-500 via-pink-600 to-red-700',
    fields: [{ key: 'userId', label: 'Riot ID#Tag', placeholder: 'PlayerName#1234', type: 'text' }],
    description: 'Top up Valorant Points for skins and battlepass.'
  },
  {
    id: 'codm',
    name: 'Call of Duty: Mobile',
    short: 'CODM',
    publisher: 'Activision',
    image: 'https://images.pexels.com/photos/7858742/pexels-photo-7858742.jpeg?auto=compress&w=600&q=80',
    accent: 'from-emerald-500 via-green-600 to-teal-700',
    fields: [{ key: 'userId', label: 'Player ID', placeholder: '0123456789', type: 'text' }],
    description: 'Top up Call of Duty Mobile CP instantly.'
  },
  {
    id: 'roblox',
    name: 'Roblox Robux',
    short: 'Roblox',
    publisher: 'Roblox Corp',
    image: 'https://images.pexels.com/photos/28993061/pexels-photo-28993061.jpeg?auto=compress&w=600&q=80',
    accent: 'from-red-500 via-rose-600 to-pink-700',
    fields: [{ key: 'userId', label: 'Roblox Username', placeholder: 'YourUsername', type: 'text' }],
    description: 'Get Robux for your Roblox account.'
  }
];

// Diamond/credit packages per game (price in INR)
export const PRODUCTS = {
  mlbb: [
    { id: 'mlbb-11', name: '11 Diamonds', amount: 11, price: 14, badge: null, popular: false },
    { id: 'mlbb-22', name: '22 Diamonds', amount: 22, price: 28, badge: null, popular: false },
    { id: 'mlbb-56', name: '56 Diamonds', amount: 56, price: 70, badge: null, popular: false },
    { id: 'mlbb-86', name: '86 Diamonds', amount: 86, price: 105, badge: null, popular: true },
    { id: 'mlbb-172', name: '172 Diamonds', amount: 172, price: 210, badge: null, popular: false },
    { id: 'mlbb-257', name: '257 Diamonds', amount: 257, price: 310, badge: 'Hot', popular: false },
    { id: 'mlbb-344', name: '344 Diamonds', amount: 344, price: 415, badge: null, popular: false },
    { id: 'mlbb-429', name: '429 Diamonds', amount: 429, price: 520, badge: null, popular: false },
    { id: 'mlbb-514', name: '514 Diamonds', amount: 514, price: 620, badge: null, popular: false },
    { id: 'mlbb-706', name: '706 Diamonds', amount: 706, price: 850, badge: null, popular: false },
    { id: 'mlbb-878', name: '878 Diamonds', amount: 878, price: 1050, badge: 'Best Value', popular: true },
    { id: 'mlbb-1050', name: '1050 Diamonds', amount: 1050, price: 1250, badge: null, popular: false },
    { id: 'mlbb-1412', name: '1412 Diamonds', amount: 1412, price: 1680, badge: null, popular: false },
    { id: 'mlbb-1755', name: '1755 Diamonds', amount: 1755, price: 2090, badge: null, popular: false },
    { id: 'mlbb-2195', name: '2195 Diamonds', amount: 2195, price: 2600, badge: null, popular: false },
    { id: 'mlbb-2901', name: '2901 Diamonds', amount: 2901, price: 3450, badge: null, popular: false },
    { id: 'mlbb-3688', name: '3688 Diamonds', amount: 3688, price: 4390, badge: null, popular: false },
    { id: 'mlbb-5532', name: '5532 Diamonds', amount: 5532, price: 6580, badge: 'Mega', popular: true },
    { id: 'mlbb-wpass', name: 'Weekly Diamond Pass', amount: 'Weekly Pass', price: 145, badge: 'Pass', popular: true, isPass: true },
    { id: 'mlbb-2xwpass', name: 'Twilight Pass', amount: 'Twilight Pass', price: 720, badge: 'Pass', popular: false, isPass: true }
  ],
  ff: [
    { id: 'ff-100', name: '100 Diamonds', amount: 100, price: 80, popular: false },
    { id: 'ff-310', name: '310 Diamonds', amount: 310, price: 240, popular: true },
    { id: 'ff-520', name: '520 Diamonds', amount: 520, price: 400, popular: false },
    { id: 'ff-1060', name: '1060 Diamonds', amount: 1060, price: 800, popular: true },
    { id: 'ff-2180', name: '2180 Diamonds', amount: 2180, price: 1600, popular: false },
    { id: 'ff-5600', name: '5600 Diamonds', amount: 5600, price: 4000, popular: false }
  ],
  pubgm: [
    { id: 'pubg-60', name: '60 UC', amount: 60, price: 85, popular: false },
    { id: 'pubg-325', name: '325 UC', amount: 325, price: 420, popular: true },
    { id: 'pubg-660', name: '660 UC', amount: 660, price: 840, popular: false },
    { id: 'pubg-1800', name: '1800 UC', amount: 1800, price: 2100, popular: true },
    { id: 'pubg-3850', name: '3850 UC', amount: 3850, price: 4200, popular: false },
    { id: 'pubg-8100', name: '8100 UC', amount: 8100, price: 8400, popular: false }
  ],
  genshin: [
    { id: 'gs-60', name: '60 Genesis Crystals', amount: 60, price: 80, popular: false },
    { id: 'gs-300', name: '300 Genesis Crystals', amount: 300, price: 400, popular: true },
    { id: 'gs-980', name: '980 Genesis Crystals', amount: 980, price: 1300, popular: false },
    { id: 'gs-1980', name: '1980 Genesis Crystals', amount: 1980, price: 2600, popular: true },
    { id: 'gs-3280', name: '3280 Genesis Crystals', amount: 3280, price: 4250, popular: false },
    { id: 'gs-welkin', name: 'Blessing of the Welkin Moon', amount: 'Welkin', price: 410, popular: true, isPass: true }
  ],
  hsr: [
    { id: 'hsr-60', name: '60 Oneiric Shards', amount: 60, price: 80, popular: false },
    { id: 'hsr-300', name: '300 Oneiric Shards', amount: 300, price: 400, popular: true },
    { id: 'hsr-980', name: '980 Oneiric Shards', amount: 980, price: 1300, popular: false },
    { id: 'hsr-1980', name: '1980 Oneiric Shards', amount: 1980, price: 2600, popular: false },
    { id: 'hsr-express', name: 'Express Supply Pass', amount: 'Pass', price: 410, popular: true, isPass: true }
  ],
  valorant: [
    { id: 'val-125', name: '125 VP', amount: 125, price: 100, popular: false },
    { id: 'val-420', name: '420 VP', amount: 420, price: 320, popular: true },
    { id: 'val-700', name: '700 VP', amount: 700, price: 530, popular: false },
    { id: 'val-1375', name: '1375 VP', amount: 1375, price: 1050, popular: true },
    { id: 'val-2400', name: '2400 VP', amount: 2400, price: 1850, popular: false }
  ],
  codm: [
    { id: 'cod-80', name: '80 CP', amount: 80, price: 80, popular: false },
    { id: 'cod-400', name: '400 CP', amount: 400, price: 400, popular: true },
    { id: 'cod-800', name: '800 CP', amount: 800, price: 800, popular: false },
    { id: 'cod-2000', name: '2000 CP', amount: 2000, price: 1900, popular: true }
  ],
  roblox: [
    { id: 'rbx-80', name: '80 Robux', amount: 80, price: 99, popular: false },
    { id: 'rbx-400', name: '400 Robux', amount: 400, price: 459, popular: true },
    { id: 'rbx-800', name: '800 Robux', amount: 800, price: 899, popular: false },
    { id: 'rbx-1700', name: '1700 Robux', amount: 1700, price: 1899, popular: true }
  ]
};

export const FLASH_SALES = [
  { gameId: 'mlbb', productId: 'mlbb-257', discount: 15 },
  { gameId: 'mlbb', productId: 'mlbb-878', discount: 12 },
  { gameId: 'ff', productId: 'ff-1060', discount: 10 },
  { gameId: 'genshin', productId: 'gs-980', discount: 8 },
  { gameId: 'pubgm', productId: 'pubg-660', discount: 10 },
  { gameId: 'valorant', productId: 'val-1375', discount: 7 }
];


export const NEWS = [
  {
    id: 'fanny-galactic',
    title: 'MLBB Galactic Fanny Event — New Epic Skin & Exclusive Rewards',
    date: 'June 1, 2025',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A brand new Galactic Fanny skin enters the shop with limited-time draw events and exclusive diamond bundles.'
  },
  {
    id: 'naruto-collab',
    title: 'MLBB x Naruto Collab — New Hero Skins & Limited Events',
    date: 'May 28, 2025',
    category: 'Collab',
    image: 'https://images.unsplash.com/photo-1587095951604-b9d924a3fda0?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Six legendary hero skins from the Hidden Leaf join Mobile Legends in a month-long crossover event.'
  },
  {
    id: 'flash-sale-jun',
    title: 'June Flash Sale — Up to 20% Off Diamond Packs',
    date: 'June 5, 2025',
    category: 'Promo',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Our biggest sale of the season — limited time discounts on MLBB, Free Fire, and PUBGM top-ups.'
  }
];

export const BANNERS = [
  {
    id: 1,
    title: 'MLBB Mega Sale',
    subtitle: 'Up to 20% OFF on diamonds',
    cta: 'Top Up Now',
    href: '/topup/mlbb',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    gradient: 'from-fuchsia-700 via-purple-700 to-indigo-900'
  },
  {
    id: 2,
    title: 'Instant Delivery',
    subtitle: 'Diamonds in your account in under 30 seconds',
    cta: 'Browse Games',
    href: '/topup',
    image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=1600&q=80',
    gradient: 'from-violet-700 via-fuchsia-700 to-pink-800'
  },
  {
    id: 3,
    title: 'Track by Order ID',
    subtitle: 'Buy a package and follow it from the Track Order page',
    cta: 'Track Order',
    href: '/track',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=1600&q=80',
    gradient: 'from-amber-600 via-orange-600 to-rose-700'
  }
];

export function getGame(id) {
  return GAMES.find((g) => g.id === id);
}
export function getProducts(gameId) {
  return PRODUCTS[gameId] || [];
}
export function getProduct(gameId, productId) {
  return (PRODUCTS[gameId] || []).find((p) => p.id === productId);
}

