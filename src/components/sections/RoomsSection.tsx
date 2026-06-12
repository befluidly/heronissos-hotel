"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const ROOM_IMAGES = {
  superior: "/images/rooms/superior-11.JPG",
  standard: "/images/rooms/standard-1.JPEG",
  promo: "/images/rooms/promo-2.JPEG",
};

const ROOM_GALLERY: Record<string, string[]> = {
  superior: [
    "/images/rooms/superior-1.jpg",
    "/images/rooms/superior-2.JPG",
    "/images/rooms/superior-3.JPG",
    "/images/rooms/superior-4.JPG",
    "/images/rooms/superior-5.JPG",
    "/images/rooms/superior-6.JPG",
    "/images/rooms/superior-7.JPG",
    "/images/rooms/superior-8.JPG",
    "/images/rooms/superior-14.JPG",
  ],
  standard: [
    "/images/rooms/standard-3.JPEG",
    "/images/rooms/standard-1.JPEG",
    "/images/rooms/standard-2.JPEG",

  ],
  promo: [
    "/images/rooms/promo-2.JPEG",
    "/images/rooms/promo-1.JPEG",
  ],
};

export function RoomsSection() {
  const t = useTranslations("rooms");
  const [lightbox, setLightbox] = useState<{ key: string; index: number } | null>(null);

  const rooms = [
    { key: "superior", img: ROOM_IMAGES.superior },
    { key: "standard", img: ROOM_IMAGES.standard },
    { key: "promo", img: ROOM_IMAGES.promo },
  ] as const;

  const closeLightbox = () => setLightbox(null);

  const prev = () => {
    if (!lightbox) return;
    const photos = ROOM_GALLERY[lightbox.key];
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + photos.length) % photos.length });
  };

  const next = () => {
    if (!lightbox) return;
    const photos = ROOM_GALLERY[lightbox.key];
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % photos.length });
  };

  return (
    <section id="rooms" className="bg-[#f5f2ee] px-6 md:px-10 py-16 md:py-[88px]">
      <div className="text-center mb-0">
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light">{t("title")}</h2>
        <div className="w-7 h-px bg-[#ccc] mx-auto my-11" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d8d4cc]">
        {rooms.map(({ key, img }) => (
          <div key={key} className="bg-white">
            <div
              className="relative w-full aspect-[16/10] bg-[#d0ccc4] cursor-pointer"
              onClick={() => setLightbox({ key, index: 0 })}
            >
              <Image src={img} alt={t(`${key}.name`)} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white text-[10px] tracking-[0.2em] uppercase opacity-0 hover:opacity-100 transition-opacity">
                  View photos
                </span>
              </div>
            </div>
            <div className="p-6 pb-7">
              <p className="text-[9px] tracking-[0.24em] uppercase text-[#aaa] mb-1">{t(`${key}.cat`)}</p>
              <h3 className="font-display text-[22px] md:text-[24px] font-light mb-3">{t(`${key}.name`)}</h3>
              <ul className="space-y-[5px] mb-5">
                <li className="text-[12px] text-[#666] flex items-center gap-2">
                  <span className="text-[#aaa]">↔</span> {t(`${key}.size`)}
                </li>
                <li className="text-[12px] text-[#666] flex items-center gap-2">
                  <span className="text-[#aaa]">◎</span> {t(`${key}.view`)}
                </li>
                <li className="text-[12px] text-[#666] flex items-center gap-2">
                  <span className="text-[#aaa]">⌚</span> {t("checkinout")}
                </li>
              </ul>
              <button
                onClick={() => setLightbox({ key, index: 0 })}
                className="text-[10px] tracking-[0.2em] uppercase border-b border-[#111] pb-[2px] hover:opacity-50 transition-opacity"
              >
                {t("cta")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Room lightbox */}
      {lightbox && (() => {
        const photos = ROOM_GALLERY[lightbox.key];
        const roomKey = lightbox.key as "superior" | "standard" | "promo";
        return (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-8 text-white/50 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-colors z-10"
              onClick={closeLightbox}
            >
              Close ✕
            </button>
            <div className="absolute top-6 left-8 text-white/30 text-[11px] tracking-[0.2em]">
              {t(`${roomKey}.name`)} · {lightbox.index + 1} / {photos.length}
            </div>
            <div
              className="relative w-full max-w-5xl mx-10 md:mx-16 aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox.index]}
                alt={t(`${roomKey}.name`)}
                fill
                className="object-contain"
                priority
              />
            </div>
            <button
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl px-4 py-6 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >‹</button>
            <button
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl px-4 py-6 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >›</button>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
              {photos.map((src, i) => (
                <div
                  key={i}
                  className={`relative flex-shrink-0 w-14 h-10 cursor-pointer transition-opacity ${i === lightbox.index ? "opacity-100 ring-1 ring-white" : "opacity-40 hover:opacity-70"
                    }`}
                  onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: i }); }}
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        );
      })()}
    </section>
  );
}
