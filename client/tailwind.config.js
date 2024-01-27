/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css,html}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [
        require('tailwindcss'),
        flowbitePlugin,
    ]
}