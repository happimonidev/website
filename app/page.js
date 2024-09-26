import BecomeMember from "@/components/BecomeMember";
import Cancellation from "@/components/Cancellation";
import CollectionProcess from "@/components/CollectionProcess";
import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FraudAlert from "@/components/FraudAlert";
import GlobalReach from "@/components/GlobalReach";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Safety from "@/components/Safety";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="hero__border"></div>
      <Hero />
      <BecomeMember />

      <Trusted />

      <CollectionProcess />
      <ContactUs />
      <FraudAlert />
      <FaqSection />
      <Footer />
    </main>
  );
}
