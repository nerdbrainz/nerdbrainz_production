module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // off white
        "custom-color-one": "#f8f9fa",

        //light light grey
        "custom-color-two": "#ebeef0",

        "custom-color-three": "#dee2e6",

        //  Cerise
        "custom-color-four": "#F61067",

        //  Purple
        "custom-color-five": "#5E239D",

        // Sea Green
        "custom-color-six": "#00F0B5",

        // Sandy Brown
        "custom-color-seven": "#F79D5C",

        // Pumpkin
        "custom-color-eight": "#F3752B",

        //Darker off white
        "custom-color-nine": "#f0e9e9",

        // NB grey
        "custom-color-ten": "#888888",

        // Red/pink
        "custom-color-eleven": "#ec4067",
      },

      animation: {
        blob: "blob 7s infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
