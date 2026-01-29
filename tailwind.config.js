/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#ec131e",
                "background-light": "#f8f6f6",
                "background-dark": "#221011", // Deep brownish/charcoal
                "card-dark": "#2d1617", // Slightly lighter for cards
                "input-dark": "#3a1c1e",
                "surface-dark": "#2f1b1c", // Derived from background-dark for panel contrast
                "surface-darker": "#1a0d0e", // Deeper background
            },
            fontFamily: {
                "display": ["Be Vietnam Pro", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
        },
    },
    plugins: [],
}
