import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { BookingBar } from "@/components/sections/BookingBar";
import { IntroSection } from "@/components/sections/IntroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AllInclusiveSection } from "@/components/sections/AllInclusiveSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DiningSection } from "@/components/sections/DiningSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BookingBar />
      <IntroSection />
      <ExperienceSection />
      <RoomsSection />
      <AllInclusiveSection />
      <AmenitiesSection />
      <GallerySection />
      <DiningSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
