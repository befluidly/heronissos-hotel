import { useTranslations } from "next-intl";

interface HotelInfo {
  phone1?: string;
  phone2?: string;
  email?: string;
}

interface Props {
  hotelInfo?: HotelInfo;
}

function IconLocation() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function IconPhone() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>;
}
function IconMail() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}
function IconClock() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
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
            <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconLocation /></span>
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
            <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconPhone /></span>
            <div className="text-[13px] text-[#666]">
              <a href={`tel:${phone1.replace(/[^+\d]/g, "")}`} className="block hover:text-[#111] transition-colors">{phone1}</a>
              {phone2 && <a href={`tel:${phone2.replace(/[^+\d]/g, "")}`} className="block hover:text-[#111] transition-colors">{phone2}</a>}
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconMail /></span>
            <a href={`mailto:${email}`} className="text-[13px] text-[#666] hover:text-[#111] transition-colors">{email}</a>
          </div>
          <div className="flex gap-3">
            <span className="text-[#b5a47c] mt-0.5 flex-shrink-0"><IconClock /></span>
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
