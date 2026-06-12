import { useTranslations } from "next-intl";

const ICONS = ["◈", "⬡", "⊡", "◎", "✈", "☎", "⊞", "✚"];

export function AmenitiesSection() {
  const t = useTranslations("amenities");
  const items = t.raw("items") as { name: string; desc: string }[];

  return (
    <section id="amenities" className="px-6 md:px-10 py-16 md:py-[72px] border-t border-black/10">
      <div className="text-center mb-0">
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light">{t("title")}</h2>
        <div className="w-7 h-px bg-[#ccc] mx-auto my-11" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, i) => (
          <div key={i} className="pt-6 md:pt-7 border-t border-black/10">
            <span className="block text-xl text-[#aaa] mb-3 md:mb-4">{ICONS[i]}</span>
            <p className="text-[12px] tracking-[0.12em] uppercase mb-2">{item.name}</p>
            <p className="text-[12px] leading-[1.65] text-[#666]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
