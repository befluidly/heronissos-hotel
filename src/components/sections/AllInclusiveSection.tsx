import { useTranslations } from "next-intl";

export function AllInclusiveSection() {
  const t = useTranslations("allinclusive");
  const meals = ["breakfast", "lunch", "snacks", "dinner"] as const;
  const drinks = t.raw("drinks") as string[];

  return (
    <section id="allinclusive" className="bg-[#1b1b1b] text-white px-10 py-[88px]">
      <div className="text-center mb-0">
        <p className="text-[10px] tracking-[0.26em] uppercase text-white/30 mb-3">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light">
          {t("title")} <em>{t("titleEm")}</em>
        </h2>
        <div className="w-7 h-px bg-white/15 mx-auto my-11" />
      </div>

      <div className="grid grid-cols-4 gap-px bg-white/[0.08]">
        {meals.map((meal) => (
          <div key={meal} className="bg-[#1b1b1b] p-8">
            <div className="font-display text-[28px] font-light text-[#b5a47c] mb-2">{t(`${meal}.time`)}</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">{t(`${meal}.label`)}</div>
            <p className="text-[12px] leading-[1.7] text-white/50">{t(`${meal}.desc`)}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t border-white/[0.08] grid grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h3 className="font-display text-[28px] font-light leading-[1.2]">
            {t("drinksTitle").split("–")[0]}
            <br />
            <em>{"10:00–" + t("drinksTitle").split("–")[1]}</em>
          </h3>
        </div>
        <ul className="grid grid-cols-3 gap-2">
          {drinks.map((drink, i) => (
            <li key={i} className="text-[12px] text-white/45 py-2 border-b border-white/[0.06]">
              {drink}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
