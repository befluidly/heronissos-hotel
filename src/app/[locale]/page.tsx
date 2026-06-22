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
  getReviewScores,
  getHotelIntro,
  getRooms,
  getGalleryPhotos,
  getDining,
  getContactDetails,
} from "@/lib/queries";

export default async function HomePage() {
  let heroSlides = [], galleryPhotos = [], rooms = null, hotelIntro = null, reviewScores = null, dining = null, contactDetails = null;

  try {
    [heroSlides, reviewScores, hotelIntro, rooms, galleryPhotos, dining, contactDetails] = await Promise.all([
      getHeroSlides().catch(() => []),
      getReviewScores().catch(() => null),
      getHotelIntro().catch(() => null),
      getRooms().catch(() => null),
      getGalleryPhotos().catch(() => []),
      getDining().catch(() => null),
      getContactDetails().catch(() => null),
    ]);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  return (
    <main>
      <HeroSection slides={heroSlides} />
      <TrustBar hotelInfo={reviewScores} />
      <IntroSection hotelInfo={hotelIntro} />
      <ExperienceSection />
      <RoomsSection rooms={rooms} />
      <AllInclusiveSection />
      <DiningSection dining={dining} />
      <AmenitiesSection />
      <GallerySection photos={galleryPhotos} />
      <BookingSection />
      <ContactSection hotelInfo={contactDetails} />
    </main>
  );
}
