"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/sanity";

const FALLBACK_IMAGES = {
  superior: "/images/rooms/superior-11.JPG",
  standard: "/images/rooms/standard-1.JPEG",
  economy: "/images/rooms/promo-2.JPEG",
};

const FALLBACK_GALLERY: Record<string, string[]> = {
  superior: [
    "/images/rooms/superior-1.jpg","/images/rooms/superior-2.JPG","/images/rooms/superior-3.JPG",
    "/images/rooms/superior-4.JPG","/images/rooms/superior-5.JPG","/images/rooms/superior-6.JPG",
    "/images/rooms/superior-7.JPG","/images/rooms/superior-8.JPG","/images/rooms/superior-9.JPG",
    "/images/rooms/superior-16.JPG","/images/rooms/superior-17.JPG","/images/rooms/superior-18.JPG",
    "/images/rooms/superior-19.JPG",
  ],
  standard: [
    "/images/rooms/standard-3.JPEG","/images/rooms/standard-1.JPEG","/images/rooms/standard-2.JPEG",
  ],
  economy: [
    "/images/rooms/promo-2.JPEG","/images/rooms/promo-1.JPEG",
  ],
};

interface RoomData {
  mainPhoto?: { asset: { _ref: string } };
  gallery?: { asset: { _ref: string }; alt?: string }[];
}

interface RoomsData {
  superior?: RoomData;
  standard?: RoomData;
  economy?: RoomData;
}

interface Props {
  rooms?: RoomsData | null;
}

function IconBed() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5"/><path d="M2 11h20"/><path d="M6 11V9h12v2"/></svg>;
}
function IconSize() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>;
}
function IconView() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
}
function IconLocation() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function IconCheck() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
}
function IconClock() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

export function RoomsSection({ rooms }: Props) {
  const t = useTranslations("rooms");
  const [lightbox, setLightbox] = useState<{ key: string; index: number } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const roomKeys = ["superior", "standard", "economy"] as const;

  const getMainImage = (key: string) => {
    const sanityRoom = rooms?.[key as keyof typeof rooms];
    if (sanityRoom?.mainPhoto) return urlFor(sanityRoom.mainPhoto).width(800).quality(85).url();
    return FALLBACK_IMAGES[key as keyof typeof FALLBACK_IMAGES];
  };

  const getGallery = (key: string): string[] => {
    const sanityRoom = rooms?.[key as keyof typeof rooms];
    if (sanityRoom?.gallery && sanityRoom.gallery.length > 0) {
      return sanityRoom.gallery.map((img: { asset: { _ref: string } }) => urlFor(img).width(1600).quality(85).url());
    }
    return FALLBACK_GALLERY[key] || [];
  };

  const closeLightbox = () => setLightbox(null);
  const prev = () => {
    if (!lightbox) return;
    const photos = getGallery(lightbox.key);
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + photos.length) % photos.length });
  };
  const next = () => {
    if (!lightbox) return;
    const photos = getGallery(lightbox.key);
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % photos.length });
  };

  return (
    <>
      {/* Room cards — beige */}
      <section id="rooms" className="bg-[#f5f2ee] px-6 md:px-10 py-16 md:py-[88px]">
        <div className="text-center mb-11">
          <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("tag")}</p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light">{t("title")}</h2>
          <div className="w-7 h-px bg-[#ccc] mx-auto mt-11" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d8d4cc]">
          {roomKeys.map((key) => {
            const img = getMainImage(key);
            const room = t.raw(`${key}`) as Record<string, string | string[]>;
            const facilities = room.facilities as string[];
            const isExpanded = expanded === key;

            return (
              <div key={key} className="bg-white flex flex-col">
                <div
                  className="relative w-full aspect-[16/10] bg-[#d0ccc4] cursor-pointer flex-shrink-0"
                  onClick={() => setLightbox({ key, index: 0 })}
                >
                  <Image src={img} alt={room.name as string} fill className="object-cover hover:scale-[1.02] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/15 transition-colors" />
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] tracking-[0.16em] uppercase px-3 py-1.5">
                    {t("cta")}
                  </div>
                </div>

                <div className="p-6 pb-7 flex flex-col flex-1">
                  <p className="text-[9px] tracking-[0.24em] uppercase text-[#b5a47c] mb-1">{room.cat as string}</p>
                  <h3 className="font-display text-[22px] md:text-[24px] font-light mb-3">{room.name as string}</h3>
                  <p className="text-[13px] leading-[1.75] text-[#666] mb-5">{room.desc as string}</p>

                  <ul className="space-y-2.5 mb-5">
                    <li className="text-[13px] text-[#555] flex items-start gap-2.5">
                      <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconSize /></span>
                      <span>{room.size as string}</span>
                    </li>
                    <li className="text-[13px] text-[#555] flex items-start gap-2.5">
                      <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconLocation /></span>
                      <span>{room.location as string}</span>
                    </li>
                    <li className="text-[13px] text-[#555] flex items-start gap-2.5">
                      <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconView /></span>
                      <span>{room.views as string}</span>
                    </li>
                    <li className="text-[13px] text-[#555] flex items-start gap-2.5">
                      <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconBed /></span>
                      <span>{room.bed as string}</span>
                    </li>
                    <li className="text-[13px] text-[#555] flex items-start gap-2.5">
                      <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconClock /></span>
                      <span>{t("checkinout")}</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => setExpanded(isExpanded ? null : key)}
                    className="text-[10px] tracking-[0.18em] uppercase text-[#999] hover:text-[#111] transition-colors mb-3 text-left flex items-center gap-2"
                  >
                    <span>{isExpanded ? "−" : "+"}</span>
                    <span>Room facilities</span>
                  </button>

                  {isExpanded && (
                    <div className="mb-5">
                      <ul className="space-y-1.5">
                        {facilities.map((f, i) => (
                          <li key={i} className="text-[13px] text-[#666] flex items-start gap-2">
                            <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconCheck /></span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      {key === "superior" && room.frenchBalcony && (
                        <p className="text-[11px] text-[#aaa] mt-3 leading-[1.6]">{room.frenchBalcony as string}</p>
                      )}
                      <p className="text-[11px] text-[#aaa] mt-2">{t("extraCostNote")}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Room Facilities & Amenities — wit */}
      <section className="bg-white px-6 md:px-10 py-16 md:py-[72px]">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-1">{t("roomFacilitiesTag")}</p>
        <h3 className="font-display text-[clamp(24px,3vw,36px)] font-light mb-10">{t("roomFacilitiesTitle")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
          {(t.raw("roomFacilities") as string[]).map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 py-2">
              <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconCheck /></span>
              <span className="text-[13px] text-[#555]">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[#aaa] mt-6">{t("extraCostNote2")}</p>
      </section>

      {/* Hotel Facilities + Guest Services + Wellness — donkerder beige */}
      <section className="bg-[#edeae5] px-6 md:px-10 py-16 md:py-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-1">{t("hotelFacilitiesTag")}</p>
            <h3 className="font-display text-[24px] font-light mb-6">{t("hotelFacilitiesTitle")}</h3>
            <ul className="space-y-3">
              {(t.raw("hotelFacilities") as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconCheck /></span>
                  <span className="text-[13px] text-[#555]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-1">{t("guestServicesTag")}</p>
            <h3 className="font-display text-[24px] font-light mb-6">{t("guestServicesTitle")}</h3>
            <ul className="space-y-3">
              {(t.raw("guestServices") as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconCheck /></span>
                  <span className="text-[13px] text-[#555]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-[#aaa] mt-5">{t("extraCostNote2")}</p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-1">{t("wellnessTag")}</p>
            <h3 className="font-display text-[24px] font-light mb-6">{t("wellnessTitle")}</h3>
            <p className="text-[13px] leading-[1.8] text-[#666] italic">{t("wellnessDesc")}</p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (() => {
        const photos = getGallery(lightbox.key);
        const roomKey = lightbox.key as "superior" | "standard" | "economy";
        const roomName = t(`${roomKey}.name`);
        return (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
            <button className="absolute top-6 right-8 text-white/50 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-colors z-10" onClick={closeLightbox}>Close ✕</button>
            <div className="absolute top-6 left-8 text-white/30 text-[11px] tracking-[0.2em]">{roomName} · {lightbox.index + 1} / {photos.length}</div>
            <div className="relative w-full max-w-5xl mx-10 md:mx-16 aspect-[3/2]" onClick={(e) => e.stopPropagation()}>
              <Image src={photos[lightbox.index]} alt={roomName} fill className="object-contain" priority />
            </div>
            <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl px-4 py-6 transition-colors z-10" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
            <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl px-4 py-6 transition-colors z-10" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
              {photos.map((src, i) => (
                <div key={i} className={`relative flex-shrink-0 w-14 h-10 cursor-pointer transition-opacity ${i === lightbox.index ? "opacity-100 ring-1 ring-white" : "opacity-40 hover:opacity-70"}`} onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: i }); }}>
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        );
      })()}
    </>
  );
}
