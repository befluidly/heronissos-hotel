"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/sanity";

interface ExtrasItem {
  _id: string;
  category: "excursion" | "transfer" | "occasion";
  title: string;
  shortDesc: string;
  longDesc?: string;
  image?: { asset: { _ref: string } };
  duration?: string;
  includes?: string;
  order?: number;
}

const FALLBACK_EXCURSIONS: ExtrasItem[] = [
  { _id: "1", category: "excursion", title: "Palace of Knossos", shortDesc: "Step into Europe's oldest civilization. The legendary Minoan palace is just 25km away.", duration: "Half day" },
  { _id: "2", category: "excursion", title: "Samaria Gorge", shortDesc: "Europe's longest gorge — a full-day hike through dramatic landscapes ending at the Libyan Sea.", duration: "Full day" },
  { _id: "3", category: "excursion", title: "Santorini day trip", shortDesc: "A boat trip to the iconic island — white villages, volcanic beaches and a sunset worth the journey.", duration: "Full day" },
  { _id: "4", category: "excursion", title: "Cretan wine tour", shortDesc: "Visit local wineries and taste the wines of Crete. Includes transfers and guided tastings.", duration: "Half day" },
  { _id: "5", category: "excursion", title: "Boat hire", shortDesc: "Rent a private boat and explore the coastline at your own pace. Discover hidden coves.", duration: "Flexible" },
  { _id: "6", category: "excursion", title: "Custom day trip", shortDesc: "Have something specific in mind? Our team arranges tailor-made excursions across the island.", duration: "Flexible" },
];

const FALLBACK_TRANSFER: ExtrasItem[] = [
  { _id: "7", category: "transfer", title: "Airport transfer", shortDesc: "Private transfers from Heraklion Airport — door to door, at any hour. 25km from the hotel.", duration: "~30 minutes", includes: "Private vehicle, meet & greet" },
  { _id: "12", category: "transfer", title: "Car rental", shortDesc: "Explore Crete at your own pace. We arrange a rental car delivered directly to the hotel — no queues, no hassle.", duration: "Flexible" },
];

const FALLBACK_OCCASIONS: ExtrasItem[] = [
  { _id: "8", category: "occasion", title: "Anniversary decoration", shortDesc: "Rose petals, candles, a personalised card and a bottle of Cretan wine in your room." },
  { _id: "9", category: "occasion", title: "Birthday surprise", shortDesc: "Balloons, a small cake and room decoration to celebrate in style. Let us know in advance." },
  { _id: "10", category: "occasion", title: "Honeymoon package", shortDesc: "A romantic welcome setup with flowers, Champagne and special turndown service." },
  { _id: "11", category: "occasion", title: "Custom request", shortDesc: "Something specific in mind? Our assistant manager is here to help — no request too small." },
];

interface Props {
  items: ExtrasItem[];
}

export function ExtrasPageClient({ items }: Props) {
  const t = useTranslations("extras");
  const [modal, setModal] = useState<ExtrasItem | null>(null);

  const excursions = items.filter(i => i.category === "excursion").length > 0
    ? items.filter(i => i.category === "excursion")
    : FALLBACK_EXCURSIONS;

  const transfers = items.filter(i => i.category === "transfer").length > 0
    ? items.filter(i => i.category === "transfer")
    : FALLBACK_TRANSFER;

  const occasions = items.filter(i => i.category === "occasion").length > 0
    ? items.filter(i => i.category === "occasion")
    : FALLBACK_OCCASIONS;

  const getImageSrc = (item: ExtrasItem) =>
    item.image ? urlFor(item.image).width(800).quality(85).url() : null;

  const CardComponent = ({ item }: { item: ExtrasItem }) => {
    const imgSrc = getImageSrc(item);
    return (
      <div className="bg-white cursor-pointer group" onClick={() => setModal(item)}>
        <div className="relative w-full aspect-[4/3] bg-[#e0dcd5] overflow-hidden">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[11px] tracking-[0.14em] uppercase text-[#bbb]">Photo coming soon</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-display text-[20px] font-light mb-2">{item.title}</h3>
          <p className="text-[12px] leading-[1.75] text-[#666] mb-4">{item.shortDesc}</p>
          <span className="text-[10px] tracking-[0.14em] uppercase text-[#b5a47c] border border-[#b5a47c] px-3 py-1">
            On request · Extra charge
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <main className="pt-[calc(40px+64px)] md:pt-[calc(40px+88px)]">

        {/* Hero */}
        <div
          className="relative px-6 md:px-10 py-20 md:py-28 text-center"
          style={{ backgroundImage: "url(/images/random/olijven-1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10">
            <p className="text-[10px] tracking-[0.26em] uppercase text-white/40 mb-4">{t("tag")}</p>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light text-white leading-[1.1] mb-5">
              {t("title")}<br /><em>{t("titleEm")}</em>
            </h1>
            <p className="text-[13px] text-white/45 max-w-lg mx-auto leading-[1.85]">{t("intro")}</p>
          </div>
        </div>

        {/* Intro about Crete */}
        <section className="px-6 md:px-16 py-14 md:py-20 max-w-4xl mx-auto text-center">
          <p className="font-display text-[clamp(18px,2.5vw,24px)] font-light leading-[1.7] text-[#555] italic">
            {t("introText")}
          </p>
        </section>

        {/* Excursions */}
        <section className="px-6 md:px-10 pb-16 md:pb-[88px]">
          <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("excursionsTag")}</p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-11">{t("excursionsTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ddd]">
            {excursions.map(item => <CardComponent key={item._id} item={item} />)}
          </div>
        </section>

        {/* Transfer & Car rental */}
        <section className="bg-[#f5f2ee] px-6 md:px-10 py-16 md:py-[88px]">
          <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("transferTag")}</p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-11">{t("transferTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ddd]">
            {transfers.map(item => <CardComponent key={item._id} item={item} />)}
          </div>
        </section>

        {/* Special occasions */}
        <section className="bg-[#1b1b1b] px-6 md:px-10 py-16 md:py-[88px]">
          <p className="text-[10px] tracking-[0.26em] uppercase text-white/30 mb-3">{t("occasionsTag")}</p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light text-white mb-4">{t("occasionsTitle")}</h2>
          <p className="text-[12px] text-white/35 mb-11 tracking-[0.06em]">{t("occasionsNote")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08]">
            {occasions.map(item => (
              <div
                key={item._id}
                className="bg-[#1b1b1b] p-7 cursor-pointer hover:bg-[#222] transition-colors"
                onClick={() => setModal(item)}
              >
                <h3 className="font-display text-[20px] font-light text-white mb-2">{item.title}</h3>
                <p className="text-[12px] leading-[1.75] text-white/45 mb-4">{item.shortDesc}</p>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#b5a47c] border border-[#b5a47c] px-3 py-1">
                  On request · Extra charge
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111] px-6 md:px-10 py-20 text-center">
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light text-white mb-3">
            {t("ctaTitle")}<br /><em>{t("ctaTitleEm")}</em>
          </h2>
          <p className="text-[13px] text-white/40 mb-10">{t("ctaSub")}</p>
          <a
            href="mailto:hero@nissos.to"
            className="inline-block border border-white/50 text-white text-[11px] tracking-[0.22em] uppercase px-12 py-4 hover:bg-white hover:text-[#111] transition-all"
          >
            hero@nissos.to →
          </a>
        </section>

      </main>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 md:p-10"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {getImageSrc(modal) && (
              <div className="relative w-full aspect-[16/9]">
                <Image src={getImageSrc(modal)!} alt={modal.title} fill className="object-cover" />
              </div>
            )}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-[28px] font-light">{modal.title}</h3>
                <button
                  onClick={() => setModal(null)}
                  className="text-[11px] tracking-[0.2em] uppercase text-[#999] hover:text-[#111] transition-colors ml-4 mt-1"
                >
                  Close ✕
                </button>
              </div>
              <p className="text-[13px] leading-[1.85] text-[#666] mb-6">
                {modal.longDesc || modal.shortDesc}
              </p>
              {(modal.duration || modal.includes) && (
                <div className="border-t border-black/10 pt-5 mb-6 space-y-2">
                  {modal.duration && (
                    <p className="text-[12px] text-[#888]">
                      <span className="uppercase tracking-[0.12em] text-[#111] font-medium">Duration</span> — {modal.duration}
                    </p>
                  )}
                  {modal.includes && (
                    <p className="text-[12px] text-[#888]">
                      <span className="uppercase tracking-[0.12em] text-[#111] font-medium">Includes</span> — {modal.includes}
                    </p>
                  )}
                </div>
              )}
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#b5a47c] border border-[#b5a47c] px-3 py-1">
                  On request · Extra charge
                </span>
                <a
                  href={`mailto:hero@nissos.to?subject=Request: ${modal.title}`}
                  className="text-[11px] tracking-[0.18em] uppercase border-b border-[#111] pb-[2px] hover:opacity-50 transition-opacity"
                >
                  Request via email →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
