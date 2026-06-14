import { useTranslations } from "next-intl";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface HotelInfo {
  introText1?: string;
  introText2?: string;
  introImage?: { asset: { _ref: string } };
}

interface Props {
  hotelInfo?: HotelInfo;
}

export function IntroSection({ hotelInfo }: Props) {
  const t = useTranslations("intro");

  const p1 = hotelInfo?.introText1 || t("p1");
  const p2 = hotelInfo?.introText2 || t("p2");
  const imageSrc = hotelInfo?.introImage
    ? urlFor(hotelInfo.introImage).width(800).quality(85).url()
    : "/images/rooms/superior-10.JPG";

  return (
    <section id="intro" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center px-6 md:px-10 py-16 md:py-[88px]">
      <div>
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-4">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-6">
          {t("title")}<br /><em>{t("titleEm")}</em>
        </h2>
        <p className="text-[13px] leading-[1.85] text-[#666] mb-3">{p1}</p>
        <p className="text-[13px] leading-[1.85] text-[#666]">{p2}</p>
        <a href="#rooms" className="inline-block mt-5 text-[11px] tracking-[0.18em] uppercase border-b border-[#111] pb-[2px] hover:opacity-50 transition-opacity">
          {t("cta")}
        </a>
      </div>
      <div className="relative w-full aspect-[16/9] bg-[#e0dcd5]">
        <Image
          src={imageSrc}
          alt="Heronissos Hotel Room"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
