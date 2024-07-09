import type { Metadata } from "next";
import { montserat, noto } from "@/utils/font";
import Footer from "@/components/Footer";
import Transition from "@/components/Transition";
import "./globals.css";

export const metadata: Metadata = {
  title: "INTRANET @SSD",
  description: "Next level of communication for better living at siam sindhorn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserat.variable} ${noto.variable}`}>
      <Transition>
        {children}
        <Footer />
      </Transition>
    </html>
  );
}
