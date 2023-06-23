import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Your Photos",
  description: "Discover new independent photographers",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Image
            src="/assets/images/yourphotos-logo-black.svg"
            width={200}
            height={50}
            alt="Logo"
          />
          <Nav />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
