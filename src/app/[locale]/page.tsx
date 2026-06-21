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
import { getHeroSlides, getGalleryPhotos, getRooms, getHotelInfo } from "@/lib/queries";

export default async function HomePage() {
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
  }

  return (
    <main>
      <HeroSection slides={heroSlides} />
      <TrustBar hotelInfo={hotelInfo} />
      <IntroSection hotelInfo={hotelInfo} />
      <ExperienceSection />
      <RoomsSection rooms={rooms} />
      <AllInclusiveSection />
      <DiningSection />
      <AmenitiesSection />
      <GallerySection photos={galleryPhotos} />
      <BookingSection />
      <ContactSection hotelInfo={hotelInfo} />
    </main>
  );
}
