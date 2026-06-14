"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";
import { urlFor } from "@/lib/sanity";

const FALLBACK_PREVIEW = [
  { src: "/images/pool/POOL-VIEW-001.JPEG", alt: "Pool" },
  { src: "/images/rooms/superior-3.jpg", alt: "Room" },
  { src: "/images/dining/RESTAURANT-VIEW-001.JPEG", alt: "Restaurant" },
  { src: "/images/dining/RESTAURANT-VIEW-004.JPEG", alt: "Dining" },
];

const FALLBACK_ALL = [
  { src: "/images/pool/POOL-VIEW-001.JPEG", alt: "Pool" },
  { src: "/images/pool/dji_fly_20220825_214128_156_1661453034744_photo_optimized(1).jpeg", alt: "Pool aerial" },
  { src: "/images/rooms/superior-3.jpg", alt: "Room" },
  { src: "/images/rooms/superior-17.jpg", alt: "Room" },
  { src: "/images/rooms/superior-18.jpg", alt: "Room" },
  { src: "/images/rooms/superior-21.jpg", alt: "Room" },
  { src: "/images/rooms/superior-22.jpg", alt: "Room" },
  { src: "/images/rooms/superior-9.jpg", alt: "Room" },
  { src: "/images/rooms/promo-2.JPEG", alt: "Promo Room" },
  { src: "/images/dining/9-IMG_2838.jpg", alt: "Dining" },
  { src: "/images/dining/RESTAURANT-VIEW-001.JPEG", alt: "Restaurant" },
  { src: "/images/dining/RESTAURANT-VIEW-004.JPEG", alt: "Restaurant view" },
  { src: "/images/dining/HeronissosHotel.jpg", alt: "Hotel dining" },
  { src: "/images/reception-lounge/lounge-3.jpg", alt: "Lounge" },
  { src: "/images/reception-lounge/reception-2.png", alt: "Reception" },
];

interface SanityPhoto {
  _id: string;
  image: { asset: { _ref: string } };
  alt?: string;
}

interface Props {
  photos?: SanityPhoto[];
}

export function GallerySection({ photos }: Props) {
  const t = useTranslations("footer");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Build photo list from Sanity or fallback
  const allPhotos = photos && photos.length > 0
    ? photos.map(p => ({
        src: urlFor(p.image).width(1600).quality(85).url(),
        alt: p.alt || "Heronissos Hotel",
      }))
    : FALLBACK_ALL;

  const previewPhotos = allPhotos.slice(0, 4).length > 0
    ? allPhotos.slice(0, 4)
    : FALLBACK_PREVIEW;

  const openLightbox = (index: number) => { setActiveIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prev = () => setActiveIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length);
  const next = () => setActiveIndex((i) => (i + 1) % allPhotos.length);

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

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <>
      <div
        id="gallery"
        className="grid gap-[2px] bg-[#111]"
        style={{ gridTemplateColumns: "1.6fr 1fr 1fr", gridTemplateRows: "240px 240px" }}
      >
        {previewPhotos.map((img, i) => (
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
        <div
          className="bg-[#1a1a1a] flex items-center justify-center cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 border-b border-white/20 pb-[2px] group-hover:text-white/70 transition-colors">
            {t("gallery")} ({allPhotos.length}) →
          </span>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-6 right-8 text-white/50 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-colors z-10" onClick={closeLightbox}>
            Close ✕
          </button>
          <div className="absolute top-6 left-8 text-white/30 text-[11px] tracking-[0.2em]">
            {activeIndex + 1} / {allPhotos.length}
          </div>
          <div className="relative w-full max-w-5xl mx-16 aspect-[3/2]" onClick={(e) => e.stopPropagation()}>
            <Image src={allPhotos[activeIndex].src} alt={allPhotos[activeIndex].alt} fill className="object-contain" priority />
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl px-4 py-6 transition-colors z-10" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl px-4 py-6 transition-colors z-10" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-8 overflow-x-auto">
            {allPhotos.map((img, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 w-14 h-10 cursor-pointer transition-opacity ${i === activeIndex ? "opacity-100 ring-1 ring-white" : "opacity-40 hover:opacity-70"}`}
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
