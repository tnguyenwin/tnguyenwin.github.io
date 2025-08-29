/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx}'],
    safelist: [
        'peer/portfolio',
        'lg:peer-hover/portfolio:block',
        'peer-hover/portfolio:opacity-100',
        'group/portfolio',
        'group-hover/portfolio:translate-x-1',
        'lg:grid-cols-2'
    ],
    darkMode: 'class'
};
