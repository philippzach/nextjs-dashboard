import { Inter, Padauk, Dai_Banna_SIL, Lusitana } from 'next/font/google';

// Use the fontSubset variable to specify the subset
// when importing the Inter font
export const inter = Inter({ subsets: ['latin'] });
export const padauk = Padauk({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});
export const dai_banna = Dai_Banna_SIL({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
// Now you can use the interFont object to access the font properties
// and apply it to your UI elements
