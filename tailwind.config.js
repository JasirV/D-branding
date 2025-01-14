module.exports = {
  content: ["./src/**/*.{html,js}"], // Specify the paths to all your template files
  theme: {
    extend: {
      colors: {
        primary: "#687074",
        secondary: "#b73437", // Fixed typo: "secoundary" -> "secondary"
        shade1: "#892021",
        shade2: "#d34144",
      },
    },
  },
  variants: {}, // Define any variants you want to use
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
