import Navbar from "@/components/Navbar";
import SailingHero from "@/components/SailingHero";
import Mission from "@/components/Mission";
import SailingAbout from "@/components/SailingAbout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Grau Brothers | Julius Graudums & Marius Graudums"
        description="Grau Brothers drivs av Julius Graudums och Marius Graudums. Vi erbjuder läxhjälp, seglingscoaching och övriga tjänster från Ingarö."
      />
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
