import "@styles/globals.css";
import Home from "./page";

export const metadata = {
  title: "Your Photos",
  description: "Discover new independent photographers",
};

function RootLayout() {
  return (
    <html lang="en">
      <body>
        <header></header>

        <main>
          <Home />
        </main>

        <footer></footer>
      </body>
    </html>
  );
}

export default RootLayout;
