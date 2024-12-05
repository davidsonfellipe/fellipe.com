import { EB_Garamond } from 'next/font/google'
const ebGaramond = EB_Garamond({ subsets: ['latin'] })

export const variables = `
  --font-family: ${ebGaramond.style.fontFamily};

  // Colors
  --color-primary: #333;
  --color-secondary: #000;
  --color-tertiary: #FBDB5C;
  --color-background: #fff;
  --color-text: #333;
  --color-gray: #666;

  // Spacing
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
`
