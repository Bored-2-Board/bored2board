/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/server/*.ts",
    ".next/types/**/*.ts"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      backgroundImage: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "dark", 
    base: true, 
    styled: true,
    utils: true, 
    rtl: false,
    prefix: "", 
    logs: true, 
  },

}
