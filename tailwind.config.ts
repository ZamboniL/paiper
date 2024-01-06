import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 20px 40px 0px rgba(50, 50, 93, 0.20)'
      },
      colors: {
        primary: {
          50: '#F8F8FA',
          100: '#E2E2E2',
          200: '#7A8089',
          300: '#EBF6FF',
          400: '#2351FF',
          500: '#132053'
        }
      }
    }
  },
  plugins: []
};
export default config;
