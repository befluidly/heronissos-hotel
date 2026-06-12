import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0d0d0d] text-white/50 px-10 pt-14 pb-7">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
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
            {[
              { href: "https://www.facebook.com/heronissos.hotel/", label: "f" },
              { href: "https://www.instagram.com/heronissoshotel/", label: "ig" },
              { href: "https://www.tripadvisor.com/Hotel_Review-g503710-d491492-Reviews-Heronissos_Hotel-Hersonissos_Crete.html", label: "ta" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 text-[11px] uppercase hover:border-white/50 hover:text-white transition-all"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[9px] tracking-[0.24em] uppercase text-white/22 mb-4 font-normal">{t("hotel")}</h4>
          <ul className="space-y-[10px]">
            {[["#intro", t("aboutLink")], ["#rooms", "Rooms"], ["#allinclusive", "All-Inclusive"], ["#gallery", t("gallery")]].map(([href, label]) => (
              <li key={href}><a href={href} className="text-[12px] text-white/45 hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[9px] tracking-[0.24em] uppercase text-white/22 mb-4 font-normal">{t("explore")}</h4>
          <ul className="space-y-[10px]">
            {[["#dining", "Dining"], ["#amenities", t("facilities")], ["#contact", t("gettingHere")]].map(([href, label]) => (
              <li key={href}><a href={href} className="text-[12px] text-white/45 hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[9px] tracking-[0.24em] uppercase text-white/22 mb-4 font-normal">{t("book")}</h4>
          <ul className="space-y-[10px]">
            {[
              ["https://hersonissosbeach.reserve-online.net/", "Book direct"],
              ["https://www.booking.com/hotel/gr/hersonissos.html", "Booking.com"],
              ["https://www.tripadvisor.com/Hotel_Review-g503710-d491492-Reviews-Heronissos_Hotel-Hersonissos_Crete.html", "TripAdvisor"],
            ].map(([href, label]) => (
              <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-[12px] text-white/45 hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07] pt-5 flex justify-between">
        <span className="text-[11px] text-white/18">© 2025 Heronissos Hotel · MH.T.E: 1039Κ014Α0045800</span>
        <span className="text-[11px] text-white/18">{t("rights")}</span>
      </div>
    </footer>
  );
}
