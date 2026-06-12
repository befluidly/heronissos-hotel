"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function BookingBar() {
  const t = useTranslations("booking");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const today = new Date();

  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const calcNights = () => {
    if (!checkIn || !checkOut) return 1;
    const diff = Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const handleBook = () => {
    if (!checkIn) {
      alert("Please select a check-in date.");
      return;
    }
    const nights = calcNights();
    const url = `https://hersonissosbeach.reserve-online.net/accommodation/room?checkin=${formatDate(checkIn)}&nights=${nights}&rooms=1&adults=${adults}&children=${children}`;
    window.open(url, "_blank");
  };

  const displayDate = (date: Date | null, placeholder: string) => {
    if (!date) return <span className="text-white/35">{placeholder}</span>;
    return <span className="text-white/90">{date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>;
  };

  return (
    <>
      {/* Datepicker styling overrides */}
      <style>{`
        .booking-datepicker .react-datepicker {
          background: #1a1a1a;
          border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 0;
          font-family: inherit;
          color: #fff;
        }
        .booking-datepicker .react-datepicker__header {
          background: #111;
          border-bottom: 0.5px solid rgba(255,255,255,0.08);
          padding: 12px;
        }
        .booking-datepicker .react-datepicker__current-month {
          color: #fff;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
        }
        .booking-datepicker .react-datepicker__day-name {
          color: rgba(255,255,255,0.3);
          font-size: 11px;
        }
        .booking-datepicker .react-datepicker__day {
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          border-radius: 0;
        }
        .booking-datepicker .react-datepicker__day:hover {
          background: rgba(255,255,255,0.1);
          border-radius: 0;
        }
        .booking-datepicker .react-datepicker__day--selected,
        .booking-datepicker .react-datepicker__day--in-range {
          background: #b5a47c !important;
          color: #111 !important;
          border-radius: 0 !important;
        }
        .booking-datepicker .react-datepicker__day--in-selecting-range {
          background: rgba(181,164,124,0.3) !important;
          border-radius: 0 !important;
        }
        .booking-datepicker .react-datepicker__day--disabled {
          color: rgba(255,255,255,0.15);
        }
        .booking-datepicker .react-datepicker__navigation-icon::before {
          border-color: rgba(255,255,255,0.4);
        }
        .booking-datepicker .react-datepicker__triangle {
          display: none;
        }
      `}</style>

      <div className="booking-datepicker bg-[#111] flex items-stretch border-t border-white/[0.08]">

        {/* Check-in */}
        <div className="flex-1 border-r border-white/[0.08] relative">
          <DatePicker
            selected={checkIn}
            onChange={(date) => {
              setCheckIn(date);
              if (checkOut && date && checkOut <= date) setCheckOut(null);
            }}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={today}
            customInput={
              <button className="w-full px-6 py-[18px] text-left hover:bg-white/[0.04] transition-colors">
                <div className="text-[9px] tracking-[0.22em] uppercase text-white/35 mb-1">{t("checkin")}</div>
                <div className="text-[13px] font-light">{displayDate(checkIn, t("selectdate"))}</div>
              </button>
            }
            popperPlacement="bottom-start"
          />
        </div>

        {/* Check-out */}
        <div className="flex-1 border-r border-white/[0.08] relative">
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn ? new Date(checkIn.getTime() + 86400000) : new Date(today.getTime() + 86400000)}
            customInput={
              <button className="w-full px-6 py-[18px] text-left hover:bg-white/[0.04] transition-colors">
                <div className="text-[9px] tracking-[0.22em] uppercase text-white/35 mb-1">{t("checkout")}</div>
                <div className="text-[13px] font-light">{displayDate(checkOut, t("selectdate"))}</div>
              </button>
            }
            popperPlacement="bottom-start"
          />
        </div>

        {/* Adults */}
        <div className="flex-1 border-r border-white/[0.08] px-6 py-[18px] flex flex-col justify-center">
          <div className="text-[9px] tracking-[0.22em] uppercase text-white/35 mb-1">{t("guests")}</div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="text-white/40 hover:text-white text-lg leading-none transition-colors"
            >−</button>
            <span className="text-[13px] text-white/80 font-light min-w-[60px] text-center">
              {adults} {adults === 1 ? "adult" : "adults"}
            </span>
            <button
              onClick={() => setAdults(Math.min(6, adults + 1))}
              className="text-white/40 hover:text-white text-lg leading-none transition-colors"
            >+</button>
          </div>
        </div>

        {/* Children */}
        <div className="flex-1 border-r border-white/[0.08] px-6 py-[18px] flex flex-col justify-center">
          <div className="text-[9px] tracking-[0.22em] uppercase text-white/35 mb-1">Children</div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setChildren(Math.max(0, children - 1))}
              className="text-white/40 hover:text-white text-lg leading-none transition-colors"
            >−</button>
            <span className="text-[13px] text-white/80 font-light min-w-[60px] text-center">
              {children === 0 ? "None" : `${children} ${children === 1 ? "child" : "children"}`}
            </span>
            <button
              onClick={() => setChildren(Math.min(4, children + 1))}
              className="text-white/40 hover:text-white text-lg leading-none transition-colors"
            >+</button>
          </div>
        </div>

        {/* Nights indicator */}
        {checkIn && checkOut && (
          <div className="border-r border-white/[0.08] px-6 py-[18px] flex flex-col justify-center">
            <div className="text-[9px] tracking-[0.22em] uppercase text-white/35 mb-1">Nights</div>
            <div className="text-[13px] text-[#b5a47c] font-light">{calcNights()}</div>
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleBook}
          className="bg-white text-[#111] text-[11px] tracking-[0.2em] uppercase font-medium px-9 flex items-center whitespace-nowrap hover:bg-[#f5f2ee] transition-colors"
        >
          {t("check")}
        </button>
      </div>
    </>
  );
}
