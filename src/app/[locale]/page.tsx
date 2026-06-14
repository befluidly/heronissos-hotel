import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { IntroSection } from "@/components/sections/IntroSection";
import { CreteSection } from "@/components/sections/CreteSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AllInclusiveSection } from "@/components/sections/AllInclusiveSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DiningSection } from "@/components/sections/DiningSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/Footer";
import { getHeroSlides, getGalleryPhotos, getRooms, getHotelInfo } from "@/lib/queries";

export default async function HomePage() {
  // Fetch Sanity data with fallback on error
  let heroSlides = [], galleryPhotos = [], rooms = [], hotelInfo = null;

  try {
    [heroSlides, galleryPhotos, rooms, hotelInfo] = await Promise.all([
      getHeroSlides(),
      getGalleryPhotos(),
      getRooms(),
      getHotelInfo(),
    ]);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    // All fallbacks are handled in the components themselves
  }

  return (
    <main>
      <Navbar />
      <HeroSection slides={heroSlides} />
      <TrustBar hotelInfo={hotelInfo} />
      <IntroSection hotelInfo={hotelInfo} />
      <CreteSection />
      <ExperienceSection />
      <RoomsSection rooms={rooms} />
      <AllInclusiveSection />
      <AmenitiesSection />
      <GallerySection photos={galleryPhotos} />
      <DiningSection />
      <CtaSection />
      <ContactSection hotelInfo={hotelInfo} />
      <Footer />
    </main>
  );
}
