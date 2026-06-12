import { useTranslations } from "next-intl";
import Image from "next/image";

export function IntroSection() {
  const t = useTranslations("intro");

  return (
    <section id="intro" className="grid grid-cols-2 gap-[72px] items-center px-10 py-[88px]">
      <div>
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-4">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-6">
          {t("title")}
          <br />
          <em>{t("titleEm")}</em>
        </h2>
        <p className="text-[13px] leading-[1.85] text-[#666] mb-3">{t("p1")}</p>
        <p className="text-[13px] leading-[1.85] text-[#666]">{t("p2")}</p>
        <a href="#rooms" className="inline-block mt-5 text-[11px] tracking-[0.18em] uppercase border-b border-[#111] pb-[2px] hover:opacity-50 transition-opacity">
          {t("cta")}
        </a>
      </div>
      <div className="relative w-full aspect-[4/5] bg-[#e0dcd5]">
        <Image
          src="/images/rooms/HeronissosHotel-4.JPG"
          alt="Heronissos Hotel Room"
          fill
          className="object-cover"
          // TODO: replace with /images/rooms/room-detail.jpg
        />
      </div>
    </section>
  );
}
