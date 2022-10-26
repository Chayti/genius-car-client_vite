module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                geniusCartheme: {
                    primary: "rgb(234 88 12)",
                    secondary: "#19D3AE",
                    accent: "#3A4256",
                    // neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            // "dark",
            // "cupcake",
        ],
    },
    plugins: [require("daisyui")],
}