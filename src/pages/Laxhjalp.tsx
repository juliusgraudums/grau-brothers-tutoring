import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BookingSystem from "@/components/BookingSystem";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Laxhjalp = () => {
  useEffect(() => {
    if (window.location.hash !== "#booking") return;

    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Läxhjälp | Grau Brothers"
        description="Läxhjälp med Julius Graudums på Grau Brothers – personlig studiecoachning i matematik, fysik och naturvetenskap."
      />
      <Navbar />
      <Hero />
      <About />
      <BookingSystem />
      <Footer />
    </div>
  );
};

export default Laxhjalp;
