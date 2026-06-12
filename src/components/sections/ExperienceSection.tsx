import { useTranslations } from "next-intl";

export function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <div id="experience" className="grid grid-cols-2 min-h-[480px]">
      {/* Day */}
      <div
        className="relative flex flex-col justify-end p-12 overflow-hidden group"
        style={{ background: "#b8d4cc" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ backgroundImage: "url(/images/exterior/achterkant-computer-mockup.jpeg)" }}
          // TODO: replace with /images/pool/pool-day.jpg
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
        <div className="relative z-10 text-white">
          <p className="text-[10px] tracking-[0.26em] uppercase text-white/50 mb-2">{t("dayTag")}</p>
          <h3 className="font-display text-[32px] font-light leading-[1.15] mb-3">{t("dayTitle")}</h3>
          <p className="text-[13px] leading-[1.75] text-white/65 max-w-sm">{t("dayDesc")}</p>
        </div>
      </div>

      {/* Night */}
      <div
        className="relative flex flex-col justify-end p-12 overflow-hidden group"
        style={{ background: "#1a1410" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ backgroundImage: "url(/images/pool/POOL-VIEW-003.JPEG)" }}
          // TODO: replace with /images/pool/pool-evening.jpg
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20" />
        <div className="relative z-10 text-white">
          <p className="text-[10px] tracking-[0.26em] uppercase text-white/40 mb-2">{t("nightTag")}</p>
          <h3 className="font-display text-[32px] font-light leading-[1.15] mb-3">
            {t("nightTitle").split(". ").map((part, i) => (
              <span key={i}>{i > 0 ? <><br /><em>{part}</em></> : part + "."}</span>
            ))}
          </h3>
          <p className="text-[13px] leading-[1.75] text-white/60 max-w-sm">{t("nightDesc")}</p>
        </div>
      </div>
    </div>
  );
}
