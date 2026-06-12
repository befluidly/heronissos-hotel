import { useTranslations } from "next-intl";
import Image from "next/image";

export function DiningSection() {
  const t = useTranslations("dining");

  return (
    <section id="dining" className="grid grid-cols-2 gap-[72px] items-start px-10 py-[88px]">
      <div>
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light leading-[1.15] mb-10">
          {t("title")} <br /><em>{t("titleEm")}</em>
        </h2>

        {/* Labyrinth */}
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-1">{t("labyrinthType")}</p>
          <h3 className="font-display text-[22px] font-light mb-3">Labyrinth</h3>
          <p className="text-[13px] leading-[1.85] text-[#666] mb-4">{t("labyrinthDesc")}</p>
          <div className="space-y-1">
            {[["07:30 – 10:00", t("breakfast")], ["12:30 – 14:00", t("lunch")], ["18:30 – 21:00", t("dinner")]].map(([time, label]) => (
              <div key={time} className="flex gap-3 text-[12px]">
                <strong className="font-medium min-w-[110px]">{time}</strong>
                <span className="text-[#666]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nissos */}
        <div className="pt-8 border-t border-black/10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-1">{t("nissosType")}</p>
          <h3 className="font-display text-[22px] font-light mb-3">Nissos</h3>
          <p className="text-[13px] leading-[1.85] text-[#666] mb-4">{t("nissosDesc")}</p>
          <div className="flex gap-3 text-[12px]">
            <strong className="font-medium min-w-[110px]">10:00 – 24:00</strong>
            <span className="text-[#666]">{t("poolbar")}</span>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] bg-[#e8e4dd]">
        <Image
          src="/images/dining/RESTAURANT-VIEW-005.JPEG"
          alt="Nissos Pool Bar"
          fill
          className="object-cover"
          // TODO: replace with /images/dining/poolbar-evening.jpg
        />
      </div>
    </section>
  );
}
