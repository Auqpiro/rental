import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/db";

const HomePage = async () => {
  await connectDB();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties/>
    </>
  );
};

export default HomePage;
