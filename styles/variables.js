import { EB_Garamond, Montserrat } from 'next/font/google'
const ebGaramond = EB_Garamond({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const variables = `
  // Fonts
  --font-text: ${ebGaramond.style.fontFamily}, serif;
  --font-title: ${montserrat.style.fontFamily}, Helvetica, Arial, sans-serif;

  // Colors
  --color-primary: #333;
  --color-secondary: #000;
  --color-tertiary: #FBDB5C;
  --color-background: #fff;
  --color-text: #333;
  --color-gray: #666;
  --color-gray-ccc: #ccc;

  // Spacing
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  // layout
  --layout-wrapper-padding-sm: 16px;
  --layout-wrapper-padding-md: 24px;
  --layout-wrapper-padding-lg: 16px;

  // Font sizes
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-xxl: 2rem;
`
