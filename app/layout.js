import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Rental",
  description: "Find The Perfect Rental",
  keywords: "rental, property rental, find properties"
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default MainLayout