import { Noto_Sans_Thai, Montserrat } from "next/font/google";

export const noto = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserat",
  display: "swap",
});
