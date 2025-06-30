/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx}'],
    safelist: [
        'group/services',
        'group-hover/services:translate-x-1',
        'group/portfolio',
        'group-hover/portfolio:translate-x-1'
    ],
    theme: { extend: {} },
    darkMode: 'class',
    plugins: []
};
