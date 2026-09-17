import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semente Bilíngue",
  description: "O Método Semente Bilíngue te ensina, passo a passo, a criar um ambiente de inglês em casa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
