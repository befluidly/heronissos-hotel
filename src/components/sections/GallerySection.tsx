"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";

const GALLERY_PREVIEW = [
  { src: "/images/pool/POOL-VIEW-001.JPEG", alt: "Pool" },
  { src: "/images/rooms/superior-3.jpg", alt: "Room" },
  { src: "/images/dining/RESTAURANT-VIEW-001.JPEG", alt: "Restaurant" },
  { src: "/images/dining/RESTAURANT-VIEW-004.JPEG", alt: "Dining" },
];

const ALL_PHOTOS = [
  { src: "/images/pool/POOL-VIEW-001.JPEG", alt: "Pool" },
  { src: "/images/pool/dji_fly_20220825_214128_156_1661453034744_photo_optimized(1).jpeg", alt: "Pool aerial" },
  { src: "/images/rooms/superior-3.jpg", alt: "Room" },
  { src: "/images/rooms/promo-2.JPEG", alt: "Promo Room" },
  { src: "/images/dining/9-IMG_2838.jpg", alt: "Dining" },
  { src: "/images/dining/RESTAURANT-VIEW-001.JPEG", alt: "Restaurant" },
  { src: "/images/dining/RESTAURANT-VIEW-004.JPEG", alt: "Restaurant view" },
  { src: "/images/dining/HeronissosHotel.jpg", alt: "Hotel dining" },
  { src: "/images/reception-lounge/lounge-3.jpg", alt: "Lounge" },
  { src: "/images/reception-lounge/reception-2.png", alt: "Reception" },
];

export function GallerySection() {
  const t = useTranslations("footer");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = () => setActiveIndex((i) => (i - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length);
  const next = () => setActiveIndex((i) => (i + 1) % ALL_PHOTOS.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <>
      {/* Gallery grid */}
      <div
        id="gallery"
        className="grid gap-[2px] bg-[#111]"
        style={{ gridTemplateColumns: "1.6fr 1fr 1fr", gridTemplateRows: "240px 240px" }}
      >
        {GALLERY_PREVIEW.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden group bg-[#222] cursor-pointer ${i === 0 ? "row-span-2" : ""}`}
            onClick={() => openLightbox(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover opacity-[0.88] group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
            />
          </div>
        ))}

        {/* View all button */}
        <div
          className="bg-[#1a1a1a] flex items-center justify-center cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 border-b border-white/20 pb-[2px] group-hover:text-white/70 transition-colors">
            {t("gallery")} ({ALL_PHOTOS.length}) →
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-8 text-white/50 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-colors z-10"
            onClick={closeLightbox}
          >
            Close ✕
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-8 text-white/30 text-[11px] tracking-[0.2em]">
            {activeIndex + 1} / {ALL_PHOTOS.length}
          </div>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-16 aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={ALL_PHOTOS[activeIndex].src}
              alt={ALL_PHOTOS[activeIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl px-4 py-6 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl px-4 py-6 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-8 overflow-x-auto">
            {ALL_PHOTOS.map((img, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 w-14 h-10 cursor-pointer transition-opacity ${
                  i === activeIndex ? "opacity-100 ring-1 ring-white" : "opacity-40 hover:opacity-70"
                }`}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
