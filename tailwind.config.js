module.exports = {
    content: [
        './public/**/*.html', './src/**/*.vue',
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "hero-pattern": "url('pattern-bg.png')",
            }),
        },
    },
    plugins: [],
}