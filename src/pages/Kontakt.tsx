import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Kontakt | Grau Brothers"
        description="Kontakta Julius Graudums och Marius Graudums på Grau Brothers för läxhjälp, coaching och övriga tjänster."
      />
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Kontakt;
