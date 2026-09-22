import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteDescription =
  "O Método Semente Bilíngue te ensina, passo a passo, a criar um ambiente de inglês em casa.";

export const metadata: Metadata = {
  title: "Semente Bilíngue",
  description: siteDescription,
  openGraph: {
    title: "Semente Bilíngue",
    description: siteDescription,
    images: [{ url: "/images/social-icon.png", width: 200, height: 200 }],
  },
  twitter: {
    card: "summary",
    title: "Semente Bilíngue",
    description: siteDescription,
    images: ["/images/social-icon.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script id="clarity-analytics" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yjvkafae27");`}
        </Script>
      </body>
    </html>
  );
}
