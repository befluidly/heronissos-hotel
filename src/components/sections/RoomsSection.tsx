import { useTranslations } from "next-intl";
import Image from "next/image";

const ROOM_IMAGES = {
  superior: "/images/rooms/2-HeronissosHotel.jpg",
  standard: "/images/rooms/standard-room-3.JPEG",
  promo: "/images/rooms/promo-room-2.JPEG",
  // TODO: replace with local images
};

export function RoomsSection() {
  const t = useTranslations("rooms");

  const rooms = [
    { key: "superior", img: ROOM_IMAGES.superior },
    { key: "standard", img: ROOM_IMAGES.standard },
    { key: "promo", img: ROOM_IMAGES.promo },
  ] as const;

  return (
    <section id="rooms" className="bg-[#f5f2ee] px-10 py-[88px]">
      <div className="text-center mb-0">
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("tag")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light">{t("title")}</h2>
        <div className="w-7 h-px bg-[#ccc] mx-auto my-11" />
      </div>

      <div className="grid grid-cols-3 gap-px bg-[#d8d4cc]">
        {rooms.map(({ key, img }) => (
          <div key={key} className="bg-white">
            <div className="relative w-full aspect-[16/10] bg-[#d0ccc4]">
              <Image src={img} alt={t(`${key}.name`)} fill className="object-cover" />
            </div>
            <div className="p-6 pb-7">
              <p className="text-[9px] tracking-[0.24em] uppercase text-[#aaa] mb-1">{t(`${key}.cat`)}</p>
              <h3 className="font-display text-[24px] font-light mb-3">{t(`${key}.name`)}</h3>
              <ul className="space-y-[5px] mb-5">
                <li className="text-[12px] text-[#666] flex items-center gap-2">
                  <span className="text-[#aaa]">↔</span> {t(`${key}.size`)}
                </li>
                <li className="text-[12px] text-[#666] flex items-center gap-2">
                  <span className="text-[#aaa]">◎</span> {t(`${key}.view`)}
                </li>
                <li className="text-[12px] text-[#666] flex items-center gap-2">
                  <span className="text-[#aaa]">⌚</span> {t("checkinout")}
                </li>
              </ul>
              <a
                href="https://hersonissosbeach.reserve-online.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase border-b border-[#111] pb-[2px] hover:opacity-50 transition-opacity"
              >
                {t("cta")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
