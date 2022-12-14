const { fontFamily, fontSize } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './slices/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['var(--font-boska-light)', ...fontFamily.serif],
                body: ['var(--font-switzer-light)', ...fontFamily.sans],
            },
            fontSize: {
                ...fontSize,
                '2xl': '10.58vw',
                xl: '6.61vw',
                lg: '2.65vw',
            },
            colors: {
                ...colors,
                blue: {
                    200: '#D5E7F2',
                    900: '#103E5B',
                },
                yellow: {
                    50: '#FCF8E7',
                },
                green: {
                    100: '#C1E5D6',
                },
                red: {
                    100: '#FCA99C',
                },
                black: '#1D1D1D',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
