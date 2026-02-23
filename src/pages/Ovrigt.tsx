import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const Ovrigt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Övriga tjänster | Grau Brothers"
        description="Behöver du hjälp med något annat? Kontakta Grau Brothers för övriga tjänster."
      />
      <Navbar />

      <section className="pt-36 pb-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-8">
              <Wrench className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-semibold">Övriga tjänster</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Övriga tjänster</h1>
            <p className="text-lg text-muted-foreground mb-10">Behöver du hjälp med något annat? Kontakta oss så löser vi det.</p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full" asChild>
              <Link to="/kontakt">
                Kontakta oss
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ovrigt;
