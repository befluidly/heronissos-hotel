import { useTranslations } from "next-intl";

interface HotelInfo {
  phone1?: string;
  phone2?: string;
  email?: string;
}

interface Props {
  hotelInfo?: HotelInfo;
}

export function ContactSection({ hotelInfo }: Props) {
  const t = useTranslations("contact");

  const phone1 = hotelInfo?.phone1 || "(+30) 28970-22501";
  const phone2 = hotelInfo?.phone2 || "(+30) 28970-22588";
  const email = hotelInfo?.email || "hero@nissos.to";

  return (
    <section id="contact" className="bg-[#f5f2ee] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-start px-6 md:px-10 py-16 md:py-[88px]">
      <div>
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-10">{t("title")}</h2>
        <div className="space-y-5">
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">◈</span>
            <a
              href="https://maps.app.goo.gl/NzXaxff9gwbW8R656"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#666] hover:text-[#111] transition-colors whitespace-pre-line"
            >
              {t("address")}
            </a>
          </div>
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">☎</span>
            <div className="text-[13px] text-[#666]">
              <a href={`tel:${phone1.replace(/[^+\d]/g, "")}`} className="block hover:text-[#111] transition-colors">{phone1}</a>
              {phone2 && <a href={`tel:${phone2.replace(/[^+\d]/g, "")}`} className="block hover:text-[#111] transition-colors">{phone2}</a>}
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">✉</span>
            <a href={`mailto:${email}`} className="text-[13px] text-[#666] hover:text-[#111] transition-colors">{email}</a>
          </div>
          <div className="flex gap-3">
            <span className="text-[#aaa] mt-1">⌚</span>
            <span className="text-[13px] text-[#666]">{t("reception")}</span>
          </div>
          <div className="pt-2">
            <a
              href="https://maps.app.goo.gl/NzXaxff9gwbW8R656"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.18em] uppercase border-b border-[#111] pb-[2px] hover:opacity-50 transition-opacity"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
      <div className="w-full aspect-[4/3] bg-[#e0dcd5] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d25.3907742!3d35.3213257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a65cd8b83cd01%3A0x7fa35289969bf99f!2sHeronissos%20Hotel!5e0!3m2!1sen!2sgr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Heronissos Hotel location"
        />
      </div>
    </section>
  );
}
