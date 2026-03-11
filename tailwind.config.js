/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A0F1C',    // Deep Midnight
                'deep-midnight': '#0A0F1C',
                secondary: '#B8860B',  // Antique Gold
                accent: '#D4AF37',     // Soft Gold
                surface: '#FFFFFF',
                background: '#F8FAFC', // Bone White
                brand: '#B8860B',      // Gold
                'brand-light': '#D4AF37',
                border: '#E2E8F0',
                text: {
                    main: '#0F172A',
                    muted: '#64748B',
                    light: '#94A3B8'
                }
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Playfair Display"', 'serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'edge': '0 20px 80px -20px rgba(0, 0, 0, 0.25)',
                'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                'premium-btn': '0 10px 30px rgba(184, 134, 11, 0.2)',
                'premium-hover': '0 30px 60px -15px rgba(0, 0, 0, 0.1)',
                'card': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.04)',
            },
        },
    },
    plugins: [],
}
