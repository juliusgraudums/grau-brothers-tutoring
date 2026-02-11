import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Har du frågor?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Tveka inte att höra av dig. Jag svarar så snart jag kan!
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
              <a href="tel:+46763102236" className="text-muted-foreground hover:text-secondary transition-colors">
                +46 76 310 22 36
              </a>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">E-post</h3>
              <a href="mailto:kontakt@graubrothers.se" className="text-muted-foreground hover:text-secondary transition-colors text-sm break-all">
                kontakt@graubrothers.se
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sociala medier</h3>
              <a href="https://instagram.com/jullegrau" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                @jullegrau
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Plats</h3>
              <p className="text-muted-foreground">
                Online & Motala
              </p>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
            asChild
          >
            <a href="mailto:kontakt@graubrothers.se">
              <Mail className="w-5 h-5 mr-2" />
              Skicka e-post
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
