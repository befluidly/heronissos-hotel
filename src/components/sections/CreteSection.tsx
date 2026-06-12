import { useTranslations } from "next-intl";

export function CreteSection() {
  const t = useTranslations("crete");

  return (
    <section
      className="relative w-full h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url(/images/random/olijven-1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-5">{t("tag")}</p>
        <h2 className="font-display text-[clamp(32px,5vw,58px)] font-light leading-[1.1] mb-6">
          {t("title")}<br /><em>{t("titleEm")}</em>
        </h2>
        <p className="text-[13px] leading-[1.85] text-white/65 mb-8 max-w-lg mx-auto">{t("desc")}</p>
        <div className="flex items-center justify-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/35">
          <span>{t("tag1")}</span>
          <span className="text-white/20">·</span>
          <span>{t("tag2")}</span>
          <span className="text-white/20">·</span>
          <span>{t("tag3")}</span>
        </div>
      </div>
    </section>
  );
}
