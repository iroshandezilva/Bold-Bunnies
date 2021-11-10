const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: "15px"
        },
        extend: {
            fontFamily: {
                roboto: " 'Roboto Mono', monospace",
                poppins: "'Poppins', sans-serif",
            },
            colors: {
                'cloud-burst': '#212957',
                'cream-can': '#F4C44F',
                'daisy-bush': '#53199C',
                'sea-blue': '#0A102E',
                cyan: colors.cyan,
                teal: colors.teal,
                emerald: colors.emerald,
                violet: colors.violet,
                fuchsia: colors.fuchsia,
                amber: colors.amber,
                pink: colors.pink,
                rose: colors.rose,

            },

            boxShadow: {
                'dark': '-7px 7px 0px rgba(0, 0, 0, 0.66)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
