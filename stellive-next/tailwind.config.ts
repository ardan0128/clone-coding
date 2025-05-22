import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        hd: '1366px', // HD 해상도 (1366x768)
        fhd: '1920px', // Full HD (1920x1080)
        qhd: '2560px', // QHD (2560x1440)
        uhd: '3840px', // 4K UHD (3840x2160)
      },
    },
  },
  plugins: [],
};
export default config;
