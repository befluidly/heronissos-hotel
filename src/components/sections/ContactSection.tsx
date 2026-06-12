import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-[#f5f2ee] grid grid-cols-2 gap-[72px] items-start px-10 py-[88px]">
      <div>
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-10">{t("title")}</h2>

        <div className="space-y-5">
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">◈</span>
            <a href="https://goo.gl/maps/5rEv3b1kaby54ysE7" target="_blank" className="text-[13px] text-[#666] hover:text-[#111] transition-colors whitespace-pre-line">
              {t("address")}
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">☎</span>
            <div className="text-[13px] text-[#666]">
              <a href="tel:+302897022501" className="block hover:text-[#111] transition-colors">(+30) 28970-22501</a>
              <a href="tel:+302897022588" className="block hover:text-[#111] transition-colors">(+30) 28970-22588</a>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">✉</span>
            <a href="mailto:hero@nissos.to" className="text-[13px] text-[#666] hover:text-[#111] transition-colors">hero@nissos.to</a>
          </div>
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">⌚</span>
            <span className="text-[13px] text-[#666]">{t("reception")}</span>
          </div>
        </div>
      </div>

      <div className="w-full aspect-[4/3] bg-[#e0dcd5] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.5!2d25.4052!3d35.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5972b74c9a9f%3A0x505d67ae1f7a1e17!2sHeronissos%20Hotel!5e0!3m2!1sen!2sgr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          title="Heronissos Hotel location"
        />
      </div>
    </section>
  );
}
