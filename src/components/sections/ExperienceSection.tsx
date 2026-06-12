import { useTranslations } from "next-intl";
import Image from "next/image";

export function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <div id="experience" className="bg-[#faf9f7]">

      {/* Row 1: tekst links, foto rechts */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_480px] items-center px-6 md:px-16 py-14 md:py-20 gap-10 md:gap-20">
        <div>
          <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-4">{t("dayTag")}</p>
          <h3 className="font-display text-[clamp(26px,3.5vw,40px)] font-light leading-[1.15] mb-5">
            {t("dayTitle")}
          </h3>
          <p className="text-[13px] leading-[1.85] text-[#666]">{t("dayDesc")}</p>
        </div>
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#e0dcd5]">
          <Image
            src="/images/exterior/achterkant-computer-mockup.jpeg"
            alt="Pool"
            fill
            className="object-cover hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-16 h-px bg-black/[0.06]" />

      {/* Row 2: foto links, tekst rechts */}
      <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] items-center px-6 md:px-16 py-14 md:py-20 gap-10 md:gap-20">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#e0dcd5] order-2 md:order-1">
          <Image
            src="/images/pool/POOL-VIEW-003.JPEG"
            alt="Bar & Terrace"
            fill
            className="object-cover hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-4">{t("nightTag")}</p>
          <h3 className="font-display text-[clamp(26px,3.5vw,40px)] font-light leading-[1.15] mb-5">
            {t("nightTitle")}
          </h3>
          <p className="text-[13px] leading-[1.85] text-[#666]">{t("nightDesc")}</p>
        </div>
      </div>

    </div>
  );
}
