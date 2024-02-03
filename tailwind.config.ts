import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 20px 40px 0px rgba(50, 50, 93, 0.20)',
        card: 'rgba(255, 255, 255, 0.25) 0px 24px 24px 0px inset, rgba(255, 255, 255, 0.25) 0px -16px 18px 0px inset, #2351FF 0px 24px 104px 0px'
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
      },
      backgroundPosition: {
        'top-2': 'center top 6rem',
        'top-4': 'center top 12rem'
      }
    }
  },
  plugins: []
};
export default config;
