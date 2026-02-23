import Navbar from "@/components/Navbar";
import SailingHero from "@/components/SailingHero";
import LandingSections from "@/components/landing/LandingSections";
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
      <LandingSections />
      <Footer />
    </div>
  );
};

export default Index;
