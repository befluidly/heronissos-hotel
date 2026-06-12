import { useTranslations } from "next-intl";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section id="cta" className="bg-[#111] text-white text-center px-10 py-24">
      <p className="text-[10px] tracking-[0.26em] uppercase text-white/30 mb-5">{t("tag")}</p>
      <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-2">
        {t("title")} <br /><em>{t("titleEm")}</em>
      </h2>
      <p className="text-[13px] text-white/40 mb-10">{t("sub")}</p>
      <a
        href="https://hersonissosbeach.reserve-online.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-white/50 text-white text-[11px] tracking-[0.22em] uppercase px-12 py-4 hover:bg-white hover:text-[#111] transition-all"
      >
        {t("btn")}
      </a>
    </section>
  );
}
