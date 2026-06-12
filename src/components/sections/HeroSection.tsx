"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const SLIDES = [
  "/images/rooms/superior-13.JPG",
  "/images/rooms/superior-8.JPG",
  "/images/pool/POOL-VIEW-001.JPEG",
];

export function HeroSection() {
  const t = useTranslations("hero");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // top-10 = lang bar (40px), h-16 = mobile nav, md:h-22 = desktop nav
    <section id="hero" className="relative h-screen min-h-[600px] bg-[#111] overflow-hidden pt-[calc(40px+64px)] md:pt-[calc(40px+88px)]">
      {SLIDES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms]"
          style={{ backgroundImage: `url(${src})`, opacity: i === activeSlide ? 1 : 0 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/60" />

      <div className="absolute bottom-20 md:bottom-28 left-0 right-0 text-center text-white px-5">
        <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-white/60 mb-4">{t("eyebrow")}</p>
        <h1 className="font-display text-[clamp(36px,7vw,72px)] font-light leading-[1.05] mb-6">
          {t("title")}<br /><em>{t("titleEm")}</em>
        </h1>
        <p className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-white/55 mb-10">{t("sub")}</p>
        <a
          href="#rooms"
          className="inline-block border border-white/60 text-white text-[11px] tracking-[0.22em] uppercase px-8 md:px-11 py-4 hover:bg-white hover:text-[#111] transition-all"
        >
          {t("cta")}
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <div className="w-px h-8 bg-white/20 animate-pulse" />
        <span className="text-[9px] tracking-[0.22em] uppercase">{t("scroll")}</span>
      </div>

      <div className="absolute bottom-8 right-6 md:right-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-[5px] h-[5px] rounded-full transition-colors ${i === activeSlide ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
