import { useTranslations } from "next-intl";
import Image from "next/image";

const TRIPADVISOR = "https://www.tripadvisor.nl/Hotel_Review-g17467356-d2388597-Reviews-Heronissos_Hotel-Limenas_Chersonisou_Hersonissos_Crete.html";
const BOOKING = "https://www.booking.com/hotel/gr/hersonissos.html";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0d0d0d] text-white/50 px-6 md:px-10 pt-14 pb-7">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">

        {/* Brand */}
        <div>
          <Image
            src="/images/logo/Heronissos_Logo_White-01.png"
            alt="Heronissos Hotel"
            width={140}
            height={42}
            className="h-9 w-auto object-contain mb-4"
          />
          <p className="text-[12px] leading-[1.8] text-white/35 max-w-[220px] mb-6">{t("about")}</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/p/HeronissosHotel-100083031472211/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 text-[11px] uppercase hover:border-white/50 hover:text-white transition-all"
            >f</a>
            <a
              href="https://www.instagram.com/heronissos.hotel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 text-[11px] uppercase hover:border-white/50 hover:text-white transition-all"
            >ig</a>
            <a
              href={TRIPADVISOR}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 text-[11px] uppercase hover:border-white/50 hover:text-white transition-all"
            >ta</a>
          </div>
        </div>

        {/* Hotel */}
        <div>
          <h4 className="text-[9px] tracking-[0.24em] uppercase text-white/22 mb-4 font-normal">{t("hotel")}</h4>
          <ul className="space-y-[10px]">
            {[
              ["#intro", t("aboutLink")],
              ["#rooms", "Rooms"],
              ["#allinclusive", "All-Inclusive"],
              ["#gallery", t("gallery")],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-[12px] text-white/45 hover:text-white transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[9px] tracking-[0.24em] uppercase text-white/22 mb-4 font-normal">{t("explore")}</h4>
          <ul className="space-y-[10px]">
            {[
              ["#dining", "Dining"],
              ["#amenities", t("facilities")],
              ["#contact", t("gettingHere")],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-[12px] text-white/45 hover:text-white transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Book */}
        <div>
          <h4 className="text-[9px] tracking-[0.24em] uppercase text-white/22 mb-4 font-normal">Contact & Book</h4>
          <ul className="space-y-[10px]">
            <li>
              <a href="mailto:hero@nissos.to" className="text-[12px] text-white/45 hover:text-white transition-colors">
                hero@nissos.to
              </a>
            </li>
            <li>
              <a href="tel:+302897022501" className="text-[12px] text-white/45 hover:text-white transition-colors">
                (+30) 28970-22501
              </a>
            </li>
            <li className="pt-2">
              <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="text-[12px] text-white/45 hover:text-white transition-colors">
                Booking.com
              </a>
            </li>
            <li>
              <a href={TRIPADVISOR} target="_blank" rel="noopener noreferrer" className="text-[12px] text-white/45 hover:text-white transition-colors">
                TripAdvisor
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/[0.07] pt-5 flex flex-col md:flex-row justify-between gap-2">
        <span className="text-[11px] text-white/18">© 2025 Heronissos Hotel · MH.T.E: 1039Κ014Α0045800</span>
        <span className="text-[11px] text-white/18">{t("rights")}</span>
      </div>
    </footer>
  );
}
