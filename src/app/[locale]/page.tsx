import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { IntroSection } from "@/components/sections/IntroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AllInclusiveSection } from "@/components/sections/AllInclusiveSection";
import { DiningSection } from "@/components/sections/DiningSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  getHeroSlides,
  getHotelIntro,
  getRooms,
  getGalleryPhotos,
  getScoresContact,
} from "@/lib/queries";

export default async function HomePage() {
  let heroSlides = [], galleryPhotos = [], rooms = null, hotelIntro = null, scoresContact = null;

  try {
    [heroSlides, galleryPhotos, rooms, hotelIntro, scoresContact] = await Promise.all([
      getHeroSlides().catch(() => []),
      getGalleryPhotos().catch(() => []),
      getRooms().catch(() => null),
      getHotelIntro().catch(() => null),
      getScoresContact().catch(() => null),
    ]);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  return (
    <main>
      <HeroSection slides={heroSlides} />
      <TrustBar hotelInfo={scoresContact} />
      <IntroSection hotelInfo={hotelIntro} />
      <ExperienceSection />
      <RoomsSection rooms={rooms} />
      <AllInclusiveSection />
      <DiningSection />
      <AmenitiesSection />
      <GallerySection photos={galleryPhotos} />
      <BookingSection />
      <ContactSection hotelInfo={scoresContact} />
    </main>
  );
}
