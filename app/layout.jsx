import Navbar from "@/components/Navbar";

import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Rental",
  description: "Find The Perfect Rental",
  keywords: "rental, property rental, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
