import "@styles/globals.css";
import Footer from "@components/Footer";
import { ReactNode } from "react";
import Header from "@components/Header";

export const metadata = {
  title: "Your Photos",
  description: "Discover new independent photographers",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="sm:m-10">
        <header className="sticky top-0 z-20">
          <Header />
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
