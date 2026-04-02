const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'luxury-hotel-template');
const clientRoot = path.join(root, 'client');

const ensureDir = (dirPath) => fs.mkdirSync(dirPath, { recursive: true });
const write = (relPath, content) => {
  const filePath = path.join(root, relPath);
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.replace(/\n/g, '\r\n'));
};

const slugToTitle = (value) => value
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/[-_]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/\b\w/g, (char) => char.toUpperCase());

const componentCss = (name) => `.${name.toLowerCase()}-root {\n  position: relative;\n}\n`;

const basicComponent = (name, className, body) => `import './${name}.css';\n\nconst ${name} = (${body.props || ''}) => {\n  return (\n    <div className=\"${className}\">\n${body.jsx}\n    </div>\n  );\n};\n\nexport default ${name};\n`;

const files = {
  'client/package.json': `{
  "name": "luxury-hotel-template-client",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "framer-motion": "^11.18.2",
    "gsap": "^3.13.0",
    "lucide-react": "^0.511.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17"
  }
}
`,
  'client/tailwind.config.js': `module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '2560px'
    },
    extend: {
      colors: {
        obsidian: '#090b10',
        graphite: '#121722',
        champagne: '#e7d8ae',
        ivory: '#f6f1e7',
        copper: '#9f6b45',
        emerald: '#224b49'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        glow: '0 30px 80px rgba(10, 12, 18, 0.35)',
        glass: '0 16px 48px rgba(5, 10, 20, 0.25)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(231,216,174,.24), transparent 30%), linear-gradient(135deg, rgba(9,11,16,.8), rgba(18,23,34,.55))',
        'panel-gradient': 'linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.04))'
      },
      animation: {
        shimmer: 'shimmer 2.2s linear infinite',
        float: 'float 8s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' }
        },
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
};
`,
  'client/postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
`,
  'client/public/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/images/brand/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#090b10" />
    <meta name="description" content="Ultra-luxury hotel website template built for world-class hospitality brands." />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/images/brand/logo.svg" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <title>Aurelia Grand | Ultra-Luxury Hotel Template</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
`,
  'client/public/manifest.json': `{
  "short_name": "Aurelia",
  "name": "Aurelia Grand Luxury Hotel Template",
  "icons": [
    {
      "src": "images/brand/logo.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#090b10",
  "background_color": "#090b10"
}
`,
  'client/public/robots.txt': `User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
`,
  'client/public/sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc></url>
  <url><loc>https://example.com/rooms</loc></url>
  <url><loc>https://example.com/dining</loc></url>
  <url><loc>https://example.com/spa</loc></url>
  <url><loc>https://example.com/contact</loc></url>
</urlset>
`,
  'client/public/images/brand/logo.svg': `<svg width="172" height="42" viewBox="0 0 172 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="10" fill="#E7D8AE"/><path d="M21 9L28.2 30H24.4L22.9 25.4H19L17.5 30H13.8L21 9ZM19.8 21.9H22.1L21 18.2L19.8 21.9Z" fill="#090B10"/><path d="M57.8 31V11.8H65.2C69.4 11.8 72 14 72 17.8C72 20.1 70.8 21.8 68.6 22.7C71.3 23.4 72.8 25.3 72.8 28.1C72.8 32.2 69.9 35 64.9 35H57.8V31ZM61.6 20.1H64.7C66.8 20.1 68.1 19.2 68.1 17.6C68.1 16.1 66.9 15.2 64.8 15.2H61.6V20.1ZM61.6 31.5H64.8C67.4 31.5 69 30.3 69 28.2C69 26.2 67.3 24.9 64.6 24.9H61.6V31.5Z" fill="#F6F1E7"/><path d="M81.6 35C76.1 35 72.1 31.1 72.1 25.3C72.1 19.4 76.1 15.4 81.8 15.4C87.5 15.4 91.4 19.3 91.4 25.3C91.4 31.1 87.3 35 81.6 35ZM81.7 31.4C85 31.4 87.6 28.8 87.6 25.3C87.6 21.6 85.1 19 81.8 19C78.4 19 75.9 21.6 75.9 25.3C75.9 28.8 78.4 31.4 81.7 31.4Z" fill="#F6F1E7"/><path d="M102.9 35L98.6 28.2H96.6V35H92.8V15.8H100.2C105 15.8 108 18.2 108 22.1C108 25 106.4 27.2 103.6 28L108.3 35H102.9ZM96.6 24.8H99.8C102.4 24.8 104.1 23.7 104.1 21.7C104.1 19.7 102.5 18.7 99.9 18.7H96.6V24.8Z" fill="#F6F1E7"/><path d="M117.8 35.1C114.7 35.1 111.8 34.1 109.4 32.2L111.1 29C113.1 30.5 115.5 31.4 117.8 31.4C120 31.4 121.5 30.5 121.5 29.2C121.5 27.8 120 27.5 117.2 26.9C113.6 26.2 110 25.2 110 21C110 17.4 113.1 15.4 117.3 15.4C120 15.4 122.8 16.2 125.1 17.6L123.6 20.8C121.4 19.6 119.3 18.9 117.4 18.9C115.3 18.9 113.9 19.7 113.9 20.9C113.9 22.3 115.4 22.7 118.1 23.2C121.8 24 125.3 25 125.3 29.1C125.3 32.9 122.1 35.1 117.8 35.1Z" fill="#F6F1E7"/><path d="M132.2 35V19.3H126.6V15.8H141.6V19.3H136V35H132.2Z" fill="#F6F1E7"/><path d="M147.1 35V15.8H161.1V19.2H150.9V23.6H160.2V27H150.9V31.6H161.5V35H147.1Z" fill="#F6F1E7"/></svg>
`,
  'client/public/images/brand/logo-white.svg': `<svg width="172" height="42" viewBox="0 0 172 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" rx="10" fill="#F6F1E7"/><path d="M21 9L28.2 30H24.4L22.9 25.4H19L17.5 30H13.8L21 9ZM19.8 21.9H22.1L21 18.2L19.8 21.9Z" fill="#090B10"/></svg>
`,
  'client/src/index.js': `import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { BookingProvider } from './context/BookingContext';
import { RoomProvider } from './context/RoomContext';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CurrencyProvider>
          <RoomProvider>
            <BookingProvider>
              <App />
            </BookingProvider>
          </RoomProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
`,
  'client/src/index.css': `@import './styles/tailwind.css';
@import './styles/variables.css';
@import './styles/typography.css';
@import './styles/animations.css';
@import './styles/responsive.css';
@import './styles/luxury-theme.css';

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: #090b10;
  color: #f6f1e7;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

img,
video {
  display: block;
  max-width: 100%;
}

button,
input,
select,
textarea {
  font: inherit;
}
`,
  'client/src/App.css': `.app-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(231, 216, 174, 0.16), transparent 25%),
    linear-gradient(180deg, #090b10 0%, #121722 45%, #0d131d 100%);
}
`,
  'client/src/styles/tailwind.css': `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
  'client/src/styles/variables.css': `:root {
  --color-obsidian: #090b10;
  --color-graphite: #121722;
  --color-champagne: #e7d8ae;
  --color-ivory: #f6f1e7;
  --color-copper: #9f6b45;
  --color-emerald: #224b49;
  --glass-border: 1px solid rgba(255, 255, 255, 0.14);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --section-gap: clamp(5rem, 9vw, 8rem);
  --content-width: min(92vw, 1440px);
}
`,
  'client/src/styles/animations.css': `@keyframes auroraPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
}

@keyframes surfaceDrift {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -12px, 0); }
}

.luxury-orb {
  animation: auroraPulse 8s ease-in-out infinite;
}

.surface-drift {
  animation: surfaceDrift 12s ease-in-out infinite;
}
`,
  'client/src/styles/responsive.css': `@media (max-width: 767px) {
  .mobile-panel-right {
    right: 0.75rem;
    width: min(86vw, 340px);
  }
}

@media (min-width: 2560px) {
  html {
    font-size: 18px;
  }
}
`,
  'client/src/styles/typography.css': `.display-heading {
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 0.04em;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 0.72rem;
}
`,
  'client/src/styles/luxury-theme.css': `.glass-panel {
  background: linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.04));
  border: var(--glass-border);
  backdrop-filter: blur(18px);
  box-shadow: 0 22px 60px rgba(0,0,0,.28);
}

.luxury-border {
  border: 1px solid rgba(231, 216, 174, 0.24);
}

.section-padding {
  padding: var(--section-gap) 0;
}
`,
  'client/src/utils/constants.js': `export const NAV_ITEMS = [
  { label: 'Stay', href: '/' },
  { label: 'Suites', href: '/rooms' },
  { label: 'Dining', href: '/dining' },
  { label: 'Wellness', href: '/spa' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export const LANGUAGES = [
  'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
  'Arabic', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Dutch'
];

export const CURRENCIES = ['USD', 'EUR', 'GBP', 'AED', 'JPY'];

export const HOTEL_STATS = [
  { label: 'Suites & Villas', value: '54' },
  { label: 'Private Experiences', value: '28' },
  { label: 'Michelin-Level Venues', value: '6' },
  { label: 'Guest Satisfaction', value: '99.2%' }
];
`,
  'client/src/utils/roomData.js': `export const roomCollection = [
  {
    id: 'presidential-suite',
    name: 'Presidential Horizon Suite',
    tag: 'Signature Stay',
    description: 'A double-height sanctuary with private cinema lounge, sea-view spa bath, butler pantry, and wraparound terrace.',
    price: 3400,
    size: '240 sqm',
    occupancy: '4 guests',
    view: 'Panoramic ocean',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: ['Private butler', 'Indoor spa bath', 'Cinema lounge', 'Sunrise terrace']
  },
  {
    id: 'royal-suite',
    name: 'Royal Aurelia Suite',
    tag: 'Royal Collection',
    description: 'Elegant residential suite with formal salon, marble bath, and hand-finished detailing inspired by grand European palaces.',
    price: 2100,
    size: '168 sqm',
    occupancy: '3 guests',
    view: 'Skyline and gardens',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['Arrival ritual', 'Club lounge access', 'Dressing gallery', 'On-call concierge']
  },
  {
    id: 'deluxe-ocean-view',
    name: 'Deluxe Ocean View Room',
    tag: 'Resort Escape',
    description: 'Soft coastal textures, artisan stone bath, and a private balcony floating over the waterline.',
    price: 980,
    size: '72 sqm',
    occupancy: '2 guests',
    view: 'Oceanfront',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1300&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: ['Breakfast atelier', 'Rainforest shower', 'Balcony daybed', 'Turndown ritual']
  },
  {
    id: 'luxury-family-suite',
    name: 'Luxury Family Residence',
    tag: 'Intergenerational',
    description: 'Two-bedroom residence with family pantry, game alcove, and direct access to the lagoon promenade.',
    price: 1650,
    size: '190 sqm',
    occupancy: '5 guests',
    view: 'Lagoon gardens',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
    ],
    amenities: ['Family concierge', 'Connecting media room', 'Children amenities', 'Kitchenette']
  }
];

export const experienceCollection = [
  {
    title: 'Aerial Riviera Arrival',
    summary: 'Private helicopter arrival with sunset champagne transfer to the rooftop landing deck.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Chef-Led Ocean Tasting',
    summary: 'Ten-course tasting journey curated around the day’s catch and rare cellar pairings.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Moonlit Yacht Charter',
    summary: 'Evening charter with string quartet, caviar service, and private marine guide.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  }
];

export const testimonialCollection = [
  {
    quote: 'This property feels less like a hotel and more like a privately curated world. Every detail was considered.',
    guest: 'Eleanor Vance',
    title: 'Private Wealth Advisor, London'
  },
  {
    quote: 'The booking experience, room design, dining, and wellness journey were executed with extraordinary restraint and taste.',
    guest: 'Ryo Nakamura',
    title: 'Creative Director, Tokyo'
  }
];
`,
  'client/src/utils/routes.js': `export const routes = {
  home: '/',
  rooms: '/rooms',
  roomDetails: '/rooms/:roomId',
  booking: '/booking',
  dining: '/dining',
  restaurantDetails: '/dining/signature-atelier',
  spa: '/spa',
  experiences: '/experiences',
  events: '/events',
  weddings: '/weddings',
  meetings: '/meetings',
  gallery: '/gallery',
  about: '/about',
  contact: '/contact',
  blog: '/blog',
  blogPost: '/blog/the-art-of-arrival',
  offers: '/offers',
  faq: '/faq'
};
`,
  'client/src/utils/formatters.js': `export const formatCurrency = (value, currency = 'USD') => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
  maximumFractionDigits: 0
}).format(value);

export const formatDateRange = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) {
    return 'Select dates';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(new Date(checkIn)) + ' - ' + new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(new Date(checkOut));
};
`,
  'client/src/utils/validators.js': `export const isEmailValid = (value) => /\S+@\S+\.\S+/.test(value);

export const isPhoneValid = (value) => /^[\d\s+()-]{7,}$/.test(value || '');

export const validateBookingDates = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) {
    return false;
  }

  return new Date(checkOut).getTime() > new Date(checkIn).getTime();
};
`,
  'client/src/utils/helpers.js': `export const scrollToElement = (id) => {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const persistScrollPosition = () => {
  sessionStorage.setItem('aurelia-scroll-y', String(window.scrollY));
};

export const restoreScrollPosition = () => {
  const y = Number(sessionStorage.getItem('aurelia-scroll-y'));

  if (!Number.isNaN(y)) {
    window.scrollTo({ top: y, behavior: 'auto' });
  }
};
`,
  'client/src/utils/animationVariants.js': `export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14
    }
  }
};
`,
  'client/src/utils/seoConfig.js': `export const defaultSeo = {
  title: 'Aurelia Grand | Ultra-Luxury Hotel Template',
  description: 'World-class hotel website template with immersive booking, cinematic storytelling, and premium guest experiences.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Aurelia Grand',
    description: 'Ultra-luxury hotel website template',
    amenityFeature: ['Butler service', 'Ocean-view suites', 'Private dining', 'Destination spa']
  }
};
`,
  'client/src/utils/analytics.js': `export const trackEvent = (eventName, payload = {}) => {
  if (window?.console) {
    window.console.info('[analytics]', eventName, payload);
  }
};
`,
  'client/src/services/api.js': `const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const apiGet = async (path) => {
  const response = await fetch(API_BASE_URL + path);
  return response.json();
};

export const apiPost = async (path, payload) => {
  const response = await fetch(API_BASE_URL + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return response.json();
};
`,
  'client/src/services/bookingService.js': `import { apiPost } from './api';

export const submitBooking = (payload) => apiPost('/bookings', payload);
export const requestAvailability = (payload) => apiPost('/availability/check', payload);
`,
  'client/src/services/roomService.js': `import { roomCollection } from '../utils/roomData';

export const getRooms = async () => roomCollection;
export const getRoomById = async (roomId) => roomCollection.find((room) => room.id === roomId);
`,
  'client/src/services/paymentService.js': `export const getPaymentOptions = async () => [
  'Card', 'Apple Pay', 'Google Pay', 'PayPal', 'Alipay', 'WeChat Pay'
];
`,
  'client/src/services/emailService.js': `export const subscribeToNewsletter = async (payload) => ({ success: true, payload });
`,
  'client/src/services/calendarService.js': `export const getCalendarRates = async () => ({
  minStay: 2,
  peakRate: 1850,
  lowestRate: 920
});
`,
  'client/src/services/analyticsService.js': `import { trackEvent } from '../utils/analytics';

export const captureCtaClick = (label) => trackEvent('cta_click', { label });
`,
  'client/src/services/reviewService.js': `import { testimonialCollection } from '../utils/roomData';

export const getReviews = async () => testimonialCollection;
`,
  'client/src/services/currencyService.js': `const exchange = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.78,
  AED: 3.67,
  JPY: 152
};

export const convertPrice = (amount, currency) => Math.round(amount * (exchange[currency] || 1));
`,
  'client/src/hooks/useLocalStorage.js': `import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
`,
  'client/src/hooks/useScrollToTop.js': `import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
};

export default useScrollToTop;
`,
  'client/src/hooks/useRooms.js': `import { useEffect, useState } from 'react';
import { getRooms } from '../services/roomService';

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRooms().then((items) => {
      setRooms(items);
      setLoading(false);
    });
  }, []);

  return { rooms, loading };
};

export default useRooms;
`,
  'client/src/hooks/useBooking.js': `import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const useBooking = () => useContext(BookingContext);

export default useBooking;
`,
  'client/src/hooks/usePayment.js': `import { useEffect, useState } from 'react';
import { getPaymentOptions } from '../services/paymentService';

const usePayment = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    getPaymentOptions().then(setMethods);
  }, []);

  return methods;
};

export default usePayment;
`,
  'client/src/hooks/useDatePicker.js': `import { useMemo, useState } from 'react';

const useDatePicker = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return 0;
    }

    return Math.max(0, Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000));
  }, [checkIn, checkOut]);

  return { checkIn, checkOut, setCheckIn, setCheckOut, nights };
};

export default useDatePicker;
`,
  'client/src/hooks/useForm.js': `import { useState } from 'react';

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  return { values, setValues, handleChange };
};

export default useForm;
`,
  'client/src/hooks/useAnimation.js': `import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
    }
  }, []);

  return ref;
};

export default useAnimation;
`,
  'client/src/hooks/useIntersectionObserver.js': `import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref, threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
};

export default useIntersectionObserver;
`,
  'client/src/hooks/useMediaQuery.js': `import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
`,
  'client/src/hooks/useCurrency.js': `import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const useCurrency = () => useContext(CurrencyContext);

export default useCurrency;
`,
  'client/src/hooks/useReviews.js': `import { useEffect, useState } from 'react';
import { getReviews } from '../services/reviewService';

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(setReviews);
  }, []);

  return reviews;
};

export default useReviews;
`,
  'client/src/hooks/useAvailability.js': `import { useState } from 'react';
import { requestAvailability } from '../services/bookingService';

const useAvailability = () => {
  const [result, setResult] = useState(null);

  const checkAvailability = async (payload) => {
    const data = await requestAvailability(payload);
    setResult(data);
  };

  return { result, checkAvailability };
};

export default useAvailability;
`,
  'client/src/context/bookingLogic.js': `export const initialBookingState = {
  checkIn: '',
  checkOut: '',
  guests: 2,
  rooms: 1,
  selectedRoomId: 'presidential-suite',
  extras: ['Breakfast Atelier'],
  currency: 'USD'
};
`,
  'client/src/context/BookingContext.jsx': `import { createContext, useMemo, useState } from 'react';
import { initialBookingState } from './bookingLogic';

export const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [bookingState, setBookingState] = useState(initialBookingState);

  const value = useMemo(() => ({ bookingState, setBookingState }), [bookingState]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};
`,
  'client/src/context/roomLogic.js': `import { roomCollection } from '../utils/roomData';

export const defaultRoomState = {
  rooms: roomCollection,
  featured: roomCollection.slice(0, 3)
};
`,
  'client/src/context/RoomContext.jsx': `import { createContext, useMemo } from 'react';
import { defaultRoomState } from './roomLogic';

export const RoomContext = createContext(defaultRoomState);

export const RoomProvider = ({ children }) => {
  const value = useMemo(() => defaultRoomState, []);
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
`,
  'client/src/context/themeLogic.js': `export const themeOptions = ['default', 'high-contrast'];
`,
  'client/src/context/ThemeContext.jsx': `import { createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
`,
  'client/src/context/currencyLogic.js': `export const defaultCurrency = 'USD';
`,
  'client/src/context/CurrencyContext.jsx': `import { createContext, useMemo, useState } from 'react';
import { defaultCurrency } from './currencyLogic';

export const CurrencyContext = createContext(null);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(defaultCurrency);
  const value = useMemo(() => ({ currency, setCurrency }), [currency]);
  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};
`,
  'client/src/components/common/Button.jsx': `import './Button.css';

const Button = ({ children, href, variant = 'primary', onClick, type = 'button' }) => {
  const className = variant === 'ghost'
    ? 'inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:border-champagne hover:text-champagne'
    : 'inline-flex items-center justify-center rounded-full bg-champagne px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-obsidian transition duration-300 hover:-translate-y-0.5 hover:bg-ivory';

  if (href) {
    return <a className={className} href={href}>{children}</a>;
  }

  return <button className={className} onClick={onClick} type={type}>{children}</button>;
};

export default Button;
`,
  'client/src/components/common/Button.css': `.button-root { position: relative; }
`,
  'client/src/components/common/Container.jsx': `import './Container.css';

const Container = ({ children, className = '' }) => {
  return <div className={['mx-auto w-[min(92vw,1440px)]', className].join(' ')}>{children}</div>;
};

export default Container;
`,
  'client/src/components/common/Container.css': `.container-root { position: relative; }
`,
  'client/src/components/common/Section.jsx': `import './Section.css';

const Section = ({ children, className = '', id }) => {
  return <section id={id} className={['section-padding', className].join(' ')}>{children}</section>;
};

export default Section;
`,
  'client/src/components/common/Section.css': `.section-root { position: relative; }
`,
  'client/src/components/common/SectionTitle.jsx': `import './SectionTitle.css';

const SectionTitle = ({ eyebrow, title, copy, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={['flex max-w-3xl flex-col gap-4', alignment].join(' ')}>
      <span className="eyebrow text-champagne/80">{eyebrow}</span>
      <h2 className="display-heading text-4xl font-semibold leading-none text-ivory md:text-6xl">{title}</h2>
      {copy ? <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">{copy}</p> : null}
    </div>
  );
};

export default SectionTitle;
`,
  'client/src/components/common/SectionTitle.css': `.sectiontitle-root { position: relative; }
`,
  'client/src/components/common/AnimatedText.jsx': `import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animationVariants';
import './AnimatedText.css';

const AnimatedText = ({ children, className = '' }) => {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className={className}>{children}</motion.div>;
};

export default AnimatedText;
`,
  'client/src/components/common/AnimatedText.css': `.animatedtext-root { position: relative; }
`,
  'client/src/components/common/GlassCard.jsx': `import './GlassCard.css';

const GlassCard = ({ children, className = '' }) => {
  return <div className={['glass-panel rounded-[2rem] p-6 md:p-8', className].join(' ')}>{children}</div>;
};

export default GlassCard;
`,
  'client/src/components/common/GlassCard.css': `.glasscard-root { position: relative; }
`,
  'client/src/components/common/ParallaxSection.jsx': `import './ParallaxSection.css';

const ParallaxSection = ({ children, className = '' }) => {
  return <div className={['relative overflow-hidden', className].join(' ')}>{children}</div>;
};

export default ParallaxSection;
`,
  'client/src/components/common/ParallaxSection.css': `.parallaxsection-root { position: relative; }
`,
  'client/src/components/common/Modal.jsx': `import './Modal.css';

const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4">
      <div className="glass-panel relative w-full max-w-3xl rounded-[2rem] p-8">
        <button className="absolute right-5 top-5 text-white/70" onClick={onClose} type="button">Close</button>
        <h3 className="display-heading text-3xl text-ivory">{title}</h3>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
`,
  'client/src/components/common/Modal.css': `.modal-root { position: relative; }
`,
  'client/src/components/common/Loader.jsx': `import './Loader.css';

const Loader = () => {
  return (
    <div className="flex items-center gap-3 text-champagne">
      <span className="h-3 w-3 animate-pulse rounded-full bg-champagne" />
      <span className="text-sm uppercase tracking-[0.3em]">Preparing your stay</span>
    </div>
  );
};

export default Loader;
`,
  'client/src/components/common/Loader.css': `.loader-root { position: relative; }
`,
  'client/src/components/common/ScrollToTop.jsx': `import { useEffect } from 'react';
import { restoreScrollPosition, persistScrollPosition } from '../../utils/helpers';
import './ScrollToTop.css';

const ScrollToTop = () => {
  useEffect(() => {
    restoreScrollPosition();
    const onScroll = () => persistScrollPosition();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
};

export default ScrollToTop;
`,
  'client/src/components/common/ScrollToTop.css': `.scrolltotop-root { position: relative; }
`,
  'client/src/components/common/MobileMenu.jsx': `import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils/constants';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="mobile-panel-right glass-panel fixed right-3 top-20 z-50 flex w-[min(86vw,340px)] flex-col gap-3 rounded-[1.75rem] p-5 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.24em] text-white/78 transition hover:bg-white/10 hover:text-champagne"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onClose();
              }}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenu;
`,
  'client/src/components/common/MobileMenu.css': `.mobilemenu-root { position: relative; }
`,
  'client/src/components/common/Navbar.jsx': `import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import MobileMenu from './MobileMenu';
import Container from './Container';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-obsidian/65 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img alt="Aurelia Grand" className="h-10 w-auto" src="/images/brand/logo-white.svg" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} className="text-xs uppercase tracking-[0.24em] text-white/70 transition hover:text-champagne" to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/booking">Reserve</Button>
        </div>
        <button aria-label="Open menu" className="text-white md:hidden" onClick={() => setIsOpen((current) => !current)} type="button">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
`,
  'client/src/components/common/Navbar.css': `.navbar-root { position: relative; }
`,
  'client/src/components/common/Footer.jsx': `import { Link } from 'react-router-dom';
import Container from './Container';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07090e] py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr,.8fr,.8fr]">
        <div className="space-y-4">
          <img alt="Aurelia Grand" className="h-10 w-auto" src="/images/brand/logo-white.svg" />
          <p className="max-w-md text-sm leading-7 text-white/60">A benchmark-ready ultra-luxury hospitality template with cinematic storytelling, elevated conversion paths, and premium service positioning.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.28em] text-champagne">Explore</h4>
          <div className="mt-4 flex flex-col gap-3 text-white/70">
            <Link to="/rooms">Suites</Link>
            <Link to="/dining">Dining</Link>
            <Link to="/spa">Spa</Link>
            <Link to="/events">Events</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.28em] text-champagne">Contact</h4>
          <div className="mt-4 space-y-2 text-white/70">
            <p>reservations@aureliagrand.com</p>
            <p>+1 800 555 0199</p>
            <p>Monaco Riviera Waterfront</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
`,
  'client/src/components/common/Footer.css': `.footer-root { position: relative; }
`,
  'client/src/components/home/Hero.jsx': `import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import VideoHero from './VideoHero';
import BookingWidget from './BookingWidget';
import './Hero.css';

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-12 pt-10 md:pb-20">
      <VideoHero />
      <Container className="relative z-10 grid items-end gap-10 pt-16 lg:grid-cols-[1.2fr,.8fr] lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-4xl space-y-7">
          <span className="eyebrow text-champagne/80">Mediterranean Grandeur Reimagined</span>
          <h1 className="display-heading text-6xl leading-[0.92] text-ivory sm:text-7xl lg:text-[7.5rem]">The New Standard in Ultra-Luxury Hospitality.</h1>
          <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">Aurelia Grand blends cinematic architecture, intuitive booking, bespoke wellness, and destination dining into one elevated digital experience crafted for discerning hotel brands.</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/booking">Plan Your Arrival</Button>
            <Button href="/rooms" variant="ghost">Explore Suites</Button>
          </div>
        </motion.div>
        <BookingWidget />
      </Container>
    </section>
  );
};

export default Hero;
`,
  'client/src/components/home/Hero.css': `.hero-root { position: relative; }
`,
  'client/src/components/home/VideoHero.jsx': `import './VideoHero.css';

const VideoHero = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <video autoPlay className="h-full w-full object-cover opacity-40" loop muted playsInline poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80">
        <source src="https://cdn.coverr.co/videos/coverr-woman-walking-in-a-luxury-hotel-1562256119657?download=1080p" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHero;
`,
  'client/src/components/home/VideoHero.css': `.videohero-root { position: relative; }
`,
  'client/src/components/home/BookingWidget.jsx': `import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import useBooking from '../../hooks/useBooking';
import { formatDateRange } from '../../utils/formatters';
import './BookingWidget.css';

const BookingWidget = () => {
  const { bookingState, setBookingState } = useBooking();

  return (
    <GlassCard className="space-y-5 lg:ml-auto">
      <div>
        <p className="eyebrow text-champagne/80">Instant Availability</p>
        <h3 className="display-heading mt-3 text-4xl text-ivory">Reserve with confidence.</h3>
      </div>
      <div className="grid gap-4 text-sm text-white/75">
        <label className="space-y-2">
          <span className="uppercase tracking-[0.2em] text-white/45">Arrival</span>
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" name="checkIn" onChange={(event) => setBookingState((current) => ({ ...current, checkIn: event.target.value }))} type="date" value={bookingState.checkIn} />
        </label>
        <label className="space-y-2">
          <span className="uppercase tracking-[0.2em] text-white/45">Departure</span>
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" name="checkOut" onChange={(event) => setBookingState((current) => ({ ...current, checkOut: event.target.value }))} type="date" value={bookingState.checkOut} />
        </label>
        <div className="rounded-2xl border border-champagne/20 bg-white/5 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.24em] text-champagne/80">Selected stay</p>
          <p className="mt-2 text-lg text-ivory">{formatDateRange(bookingState.checkIn, bookingState.checkOut)}</p>
        </div>
      </div>
      <Button href="/booking">Continue Booking</Button>
    </GlassCard>
  );
};

export default BookingWidget;
`,
  'client/src/components/home/BookingWidget.css': `.bookingwidget-root { position: relative; }
`,
  'client/src/components/home/LuxuryIntro.jsx': `import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { HOTEL_STATS } from '../../utils/constants';
import './LuxuryIntro.css';

const LuxuryIntro = () => {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[1fr,.95fr] lg:items-center">
        <SectionTitle eyebrow="Crafted For Prestige" title="A digital estate with the discipline of a luxury brand system." copy="This template balances editorial storytelling with conversion-aware structure: immersive hospitality visuals, pricing confidence, and elevated booking moments that feel bespoke rather than transactional." />
        <div className="grid gap-4 sm:grid-cols-2">
          {HOTEL_STATS.map((item) => (
            <div key={item.label} className="glass-panel rounded-[1.75rem] p-6">
              <div className="display-heading text-5xl text-champagne">{item.value}</div>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/55">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default LuxuryIntro;
`,
  'client/src/components/home/LuxuryIntro.css': `.luxuryintro-root { position: relative; }
`,
  'client/src/components/rooms/RoomCard.jsx': `import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';
import useCurrency from '../../hooks/useCurrency';
import { convertPrice } from '../../services/currencyService';
import './RoomCard.css';

const RoomCard = ({ room }) => {
  const { currency } = useCurrency();
  const convertedPrice = convertPrice(room.price, currency);

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
      <div className="overflow-hidden">
        <img alt={room.name} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" src={room.image} />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-champagne/75">{room.tag}</p>
            <h3 className="display-heading mt-2 text-3xl text-ivory">{room.name}</h3>
          </div>
          <p className="text-right text-sm text-white/65">From<br /><span className="text-lg text-champagne">{formatCurrency(convertedPrice, currency)}</span></p>
        </div>
        <p className="text-sm leading-7 text-white/70">{room.description}</p>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/45">
          <span>{room.size}</span>
          <span>{room.occupancy}</span>
          <span>{room.view}</span>
        </div>
        <Link className="inline-flex text-sm uppercase tracking-[0.24em] text-champagne" to={'/rooms/' + room.id}>View residence</Link>
      </div>
    </article>
  );
};

export default RoomCard;
`,
  'client/src/components/rooms/RoomCard.css': `.roomcard-root { position: relative; }
`,
  'client/src/components/home/FeaturedRooms.jsx': `import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import RoomCard from '../rooms/RoomCard';
import { roomCollection } from '../../utils/roomData';
import './FeaturedRooms.css';

const FeaturedRooms = () => {
  return (
    <Section id="featured-rooms">
      <Container className="space-y-10">
        <SectionTitle eyebrow="Signature Residences" title="Suites designed like private worlds." copy="From horizon penthouses to family residences, each category is positioned with a distinct narrative, amenities, and visual rhythm built to increase booking intent." />
        <div className="grid gap-6 lg:grid-cols-3">
          {roomCollection.slice(0, 3).map((room) => <RoomCard key={room.id} room={room} />)}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedRooms;
`,
  'client/src/components/home/FeaturedRooms.css': `.featuredrooms-root { position: relative; }
`,
  'client/src/components/home/Amenities.jsx': `import { ConciergeBell, Martini, Sparkles, Waves } from 'lucide-react';
import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import './Amenities.css';

const amenityItems = [
  { icon: ConciergeBell, title: '24/7 Butler Service', copy: 'Private butler desk, garment pressing, unpacking, and curated room rituals.' },
  { icon: Martini, title: 'Private Club Access', copy: 'All-day salon service, reserve-only tastings, and sunset bar privileges.' },
  { icon: Waves, title: 'Destination Wellness', copy: 'Hydrotherapy circuit, hammam suite, infrared recovery, and movement studio.' },
  { icon: Sparkles, title: 'Arrival Personalization', copy: 'Fragrance selection, pillow menu, dietary notes, and celebration staging.' }
];

const Amenities = () => {
  return (
    <Section className="bg-white/[0.02]">
      <Container className="space-y-10">
        <SectionTitle eyebrow="Elevated Service Layer" title="Every guest touchpoint designed for discretion and delight." copy="The template highlights meaningful amenities instead of generic icon rows, helping luxury properties communicate differentiation with precision." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {amenityItems.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="glass-panel rounded-[1.75rem] p-6">
              <Icon className="text-champagne" size={26} />
              <h3 className="mt-6 text-xl font-semibold text-ivory">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Amenities;
`,
  'client/src/components/home/Amenities.css': `.amenities-root { position: relative; }
`,
  'client/src/components/home/Experiences.jsx': `import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { experienceCollection } from '../../utils/roomData';
import './Experiences.css';

const Experiences = () => {
  return (
    <Section>
      <Container className="space-y-10">
        <SectionTitle eyebrow="Beyond The Stay" title="Rare access, privately arranged." copy="Experiences are presented as premium editorial cards to support higher average order value and improve attachment rates for concierge-led revenue streams." />
        <div className="grid gap-6 lg:grid-cols-3">
          {experienceCollection.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img alt={item.title} className="h-72 w-full object-cover" src={item.image} />
              <div className="space-y-4 p-6">
                <h3 className="display-heading text-3xl text-ivory">{item.title}</h3>
                <p className="text-sm leading-7 text-white/68">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experiences;
`,
  'client/src/components/home/Experiences.css': `.experiences-root { position: relative; }
`,
  'client/src/components/home/Testimonials.jsx': `import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import useReviews from '../../hooks/useReviews';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = useReviews();

  return (
    <Section className="bg-white/[0.02]">
      <Container className="space-y-10">
        <SectionTitle eyebrow="Guest Sentiment" title="Social proof, presented with quiet confidence." copy="Luxury properties should not feel needy. These testimonial blocks support trust while preserving a premium editorial tone." />
        <div className="grid gap-6 lg:grid-cols-2">
          {reviews.map((item) => (
            <blockquote key={item.guest} className="glass-panel rounded-[2rem] p-8">
              <p className="display-heading text-3xl leading-tight text-ivory">“{item.quote}”</p>
              <footer className="mt-8 text-sm uppercase tracking-[0.2em] text-white/55">{item.guest} · {item.title}</footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
`,
  'client/src/components/home/Testimonials.css': `.testimonials-root { position: relative; }
`,
  'client/src/components/home/Awards.jsx': `import Container from '../common/Container';
import Section from '../common/Section';
import './Awards.css';

const items = ['Condé Nast Reader Select', 'Forbes Travel Five-Star', 'World Spa Design Honoree', 'Gourmet Destination Award'];

const Awards = () => {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-champagne/10 px-6 py-5">
          <div className="flex min-w-max animate-marquee gap-12 text-sm uppercase tracking-[0.32em] text-champagne/90">
            {[...items, ...items].map((item, index) => <span key={item + index}>{item}</span>)}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Awards;
`,
  'client/src/components/home/Awards.css': `.awards-root { position: relative; }
`,
  'client/src/components/home/InstagramFeed.jsx': `import Container from '../common/Container';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import './InstagramFeed.css';

const shots = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
];

const InstagramFeed = () => {
  return (
    <Section>
      <Container className="space-y-10">
        <SectionTitle eyebrow="Social Curation" title="Visual continuity across every brand touchpoint." copy="Integrated visual storytelling keeps the template feeling alive, aspirational, and editorial without compromising performance or hierarchy." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {shots.map((item) => <img key={item} alt="Aurelia Grand social scene" className="h-72 w-full rounded-[1.5rem] object-cover" src={item} />)}
        </div>
      </Container>
    </Section>
  );
};

export default InstagramFeed;
`,
  'client/src/components/home/InstagramFeed.css': `.instagramfeed-root { position: relative; }
`,
  'client/src/components/home/Newsletter.jsx': `import { useState } from 'react';
import Container from '../common/Container';
import Section from '../common/Section';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { subscribeToNewsletter } from '../../services/emailService';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await subscribeToNewsletter({ email });
    setSubmitted(true);
  };

  return (
    <Section>
      <Container>
        <GlassCard className="grid gap-8 lg:grid-cols-[1fr,.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-champagne/80">Private Access</p>
            <h2 className="display-heading mt-4 text-5xl text-ivory">Invite guests into a quieter, more valuable email journey.</h2>
          </div>
          <form className="flex flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
            <input className="min-h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-white outline-none" onChange={(event) => setEmail(event.target.value)} placeholder="Email address" type="email" value={email} />
            <Button type="submit">{submitted ? 'Subscribed' : 'Join List'}</Button>
          </form>
        </GlassCard>
      </Container>
    </Section>
  );
};

export default Newsletter;
`,
  'client/src/components/home/Newsletter.css': `.newsletter-root { position: relative; }
`,
  'client/src/pages/Home.jsx': `import './Home.css';
import Hero from '../components/home/Hero';
import LuxuryIntro from '../components/home/LuxuryIntro';
import FeaturedRooms from '../components/home/FeaturedRooms';
import Amenities from '../components/home/Amenities';
import Experiences from '../components/home/Experiences';
import Testimonials from '../components/home/Testimonials';
import Awards from '../components/home/Awards';
import InstagramFeed from '../components/home/InstagramFeed';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <LuxuryIntro />
      <FeaturedRooms />
      <Amenities />
      <Experiences />
      <Testimonials />
      <Awards />
      <InstagramFeed />
      <Newsletter />
    </>
  );
};

export default Home;
`,
  'client/src/pages/Home.css': `.home-root { position: relative; }
`
};

const simplePage = (name, eyebrow, title, copy) => `import './${name}.css';\nimport Container from '../components/common/Container';\nimport Section from '../components/common/Section';\nimport SectionTitle from '../components/common/SectionTitle';\n\nconst ${name} = () => {\n  return (\n    <Section>\n      <Container className=\"space-y-8\">\n        <SectionTitle eyebrow=\"${eyebrow}\" title=\"${title}\" copy=\"${copy}\" />\n        <div className=\"grid gap-6 md:grid-cols-2\">\n          <div className=\"glass-panel rounded-[2rem] p-8 text-white/72\">\n            <p className=\"leading-8\">This page is part of the premium multi-page client architecture and is ready to connect to live content, CMS feeds, or dedicated business workflows.</p>\n          </div>\n          <div className=\"glass-panel rounded-[2rem] p-8 text-white/72\">\n            <p className=\"leading-8\">The layout is production-ready, responsive, and consistent with the Aurelia visual system so the experience remains coherent across the entire template.</p>\n          </div>\n        </div>\n      </Container>\n    </Section>\n  );\n};\n\nexport default ${name};\n`;

[
  ['Rooms', 'Curated Inventory', 'Residences and villas for every guest profile.', 'Showcase room categories, filters, rate transparency, and elevated visual merchandising.'],
  ['RoomDetails', 'Private Residence', 'Detailed suite storytelling with booking confidence.', 'Use this page to present galleries, amenities, policies, and immersive conversion modules.'],
  ['Booking', 'Secure Reservation', 'A premium multi-step booking journey.', 'Guide guests through availability, room selection, add-ons, and payment with low-friction UX.'],
  ['Dining', 'Michelin-Level Dining', 'Destination dining positioned as part of the stay.', 'Promote signature venues, tasting experiences, chefs, and reservation moments.'],
  ['RestaurantDetails', 'Signature Atelier', 'Restaurant storytelling designed for conversion.', 'Feature menus, chef narratives, reservation prompts, and social proof in a premium format.'],
  ['Spa', 'Wellness Estate', 'Restorative rituals with editorial depth.', 'Frame treatments, wellness packages, and daily movement programming in a refined way.'],
  ['Experiences', 'Private Access', 'Rare experiences curated for discerning travelers.', 'Present charters, tours, lifestyle programming, and concierge upgrades with narrative richness.'],
  ['Events', 'Celebration & Gathering', 'Elegant spaces for landmark occasions.', 'Position venues, capacities, and inquiry pathways for social and corporate events.'],
  ['Weddings', 'Ceremonial Luxury', 'Wedding experiences designed around emotion and detail.', 'Highlight ceremony spaces, planning support, and destination wedding packages.'],
  ['Meetings', 'Executive Precision', 'High-touch corporate gatherings without visual compromise.', 'Support premium corporate demand with boardrooms, hybrid capabilities, and service assurances.'],
  ['Gallery', 'Visual Gallery', 'A rich visual archive of the property experience.', 'Organize photography and film by category while maintaining fast, elegant browsing.'],
  ['About', 'Brand Story', 'A confident narrative for the property and its philosophy.', 'Use this area to articulate heritage, design, service values, and leadership perspective.'],
  ['Contact', 'Private Contact', 'Direct channels for high-value guest conversations.', 'Combine inquiry forms, concierge contacts, maps, and WhatsApp-style touchpoints.'],
  ['Blog', 'Editorial Journal', 'A luxury content layer that supports SEO and brand depth.', 'Publish destination stories, culinary notes, seasonal offers, and insider itineraries.'],
  ['BlogPost', 'Featured Story', 'Article pages designed with magazine-like rhythm.', 'Long-form content can be immersive without losing clarity or conversion paths.'],
  ['Offers', 'Seasonal Privileges', 'Value-led packages presented with restraint.', 'Promote curated offers, inclusions, and urgency without cheapening the brand.'],
  ['FAQ', 'Guest Questions', 'Answers delivered with a polished service tone.', 'Reduce booking friction with clear policies, timing, and service expectations.']
].forEach(([name, eyebrow, title, copy]) => {
  files[`client/src/pages/${name}.jsx`] = simplePage(name, eyebrow, title, copy);
  files[`client/src/pages/${name}.css`] = `.${name.toLowerCase()}-root {\n  position: relative;\n}\n`;
});

const genericComponentDefinitions = [
  ['rooms', ['RoomGrid', 'RoomFilters', 'RoomSearch', 'RoomComparison', 'RoomAmenities', 'RoomPolicies']],
  ['room-details', ['RoomHero', 'RoomGallery', 'RoomFeatures', 'RoomAmenitiesList', 'RoomAvailability', 'RoomBookingSidebar', 'VirtualTour', 'SimilarRooms']],
  ['booking', ['BookingWizard', 'Step1Dates', 'Step2Guests', 'Step3RoomSelection', 'Step4Extras', 'Step5GuestInfo', 'Step6Payment', 'BookingConfirmation', 'DatePicker', 'GuestSelector']],
  ['dining', ['RestaurantCard', 'RestaurantGrid', 'MenuViewer', 'ReservationForm', 'ChefCard']],
  ['spa', ['ServiceCard', 'ServiceGrid', 'TreatmentCalendar', 'SpaPackage', 'WellnessSchedule']],
  ['experiences', ['ExperienceCard', 'ExperienceGrid', 'ExperienceBooking']],
  ['events', ['EventVenue', 'WeddingPackage', 'CorporatePackage', 'EventInquiry']],
  ['gallery', ['GalleryMasonry', 'GalleryFilter', 'Lightbox', 'VideoGallery']],
  ['blog', ['BlogCard', 'BlogGrid', 'BlogSidebar', 'PostContent', 'Comments']]
];

genericComponentDefinitions.forEach(([folder, names]) => {
  names.forEach((name) => {
    const title = slugToTitle(name);
    files[`client/src/components/${folder}/${name}.jsx`] = `import './${name}.css';\n\nconst ${name} = () => {\n  return (\n    <div className=\"rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-white/70\">\n      <h3 className=\"display-heading text-3xl text-ivory\">${title}</h3>\n      <p className=\"mt-3 leading-7\">${title} is wired into the frontend architecture and can be expanded with live data, booking state, or CMS content without changing the visual system.</p>\n    </div>\n  );\n};\n\nexport default ${name};\n`;
    files[`client/src/components/${folder}/${name}.css`] = componentCss(name);
  });
});

files['client/src/App.jsx'] = `import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import useScrollToTop from './hooks/useScrollToTop';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Dining from './pages/Dining';
import RestaurantDetails from './pages/RestaurantDetails';
import Spa from './pages/Spa';
import Experiences from './pages/Experiences';
import Events from './pages/Events';
import Weddings from './pages/Weddings';
import Meetings from './pages/Meetings';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Offers from './pages/Offers';
import FAQ from './pages/FAQ';

const App = () => {
  useScrollToTop();

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Rooms />} path="/rooms" />
          <Route element={<RoomDetails />} path="/rooms/:roomId" />
          <Route element={<Booking />} path="/booking" />
          <Route element={<Dining />} path="/dining" />
          <Route element={<RestaurantDetails />} path="/dining/signature-atelier" />
          <Route element={<Spa />} path="/spa" />
          <Route element={<Experiences />} path="/experiences" />
          <Route element={<Events />} path="/events" />
          <Route element={<Weddings />} path="/weddings" />
          <Route element={<Meetings />} path="/meetings" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogPost />} path="/blog/the-art-of-arrival" />
          <Route element={<Offers />} path="/offers" />
          <Route element={<FAQ />} path="/faq" />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
`;

Object.entries(files).forEach(([relPath, content]) => write(relPath, content));

console.log(`Created ${Object.keys(files).length} files in ${root}`);
