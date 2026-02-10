import Navbar from "@/components/Navbar";
import SailingHero from "@/components/SailingHero";
import Mission from "@/components/Mission";
import SailingAbout from "@/components/SailingAbout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SailingHero />
      <Mission />
      <SailingAbout />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
