/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    // extend: {
      // colors: {
      //   gray: {
      //     50: '#fdf8f6',
      //     100: '#f2e8e5',
      //     200: '#eaddd7',
      //     300: '#e0cec7',
      //     400: '#d2bab0',
      //     500: '#bfa094',
      //     600: '#a18072',
      //     700: '#977669',
      //     800: '#846358',
      //     900: '#43302b',
      //   },
      // },

      textColor: {
        cris: {
          inverted: withOpacity('--fill-color'),

          dark: withOpacity('--dark-primary-color'),
          primary: withOpacity('--primary-text'),
          secondary: withOpacity('--secondary-text'),
          accent: withOpacity('--accent-color'),

          base: withOpacity('--primary-text'),
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        
      },
      backgroundColor: {
        cris: {
          dark: withOpacity('--dark-primary-color'),
          light: withOpacity('--light-primary-color'),
          fill: withOpacity('--fill-color'),

          accent: withOpacity('--accent-color'),
          inverted: withOpacity('--primary-text'),
          card: withOpacity('--card-color'),
          'card-muted': withOpacity('--card-muted-color'),

          
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        transparent: 'transparent',

        
      },
      outlineColor: {
        cris: {
          fill: withOpacity('--accent-color'),
        },
        transparent: 'transparent',

        
      },
      borderColor: {
        cris: {
          dark: withOpacity('--dark-primary-color'),
          line: withOpacity('--light-primary-color'),
          fill: withOpacity('--primary-text'),
          accent: withOpacity('--accent-color'),
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        transparent: 'transparent',
        
      },
      fill: {
        cris: {
          base: withOpacity('--primary-text'),
          accent: withOpacity('--accent-color'),
        },
        
        transparent: 'transparent',
      },
      ringColor: {
        cris: {
          dark: withOpacity('--dark-primary-color'),
          light: withOpacity('--light-primary-color'),
          accent: withOpacity('--accent-color'),
        },
        transparent: 'transparent',

      },
    // },
  },
	plugins: [],
}
