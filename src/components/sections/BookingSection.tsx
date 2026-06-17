"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function BookingSection() {
  const t = useTranslations("booking");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkin: "",
    checkout: "",
    roomType: "",
    adults: "2",
    children: "0",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking request — ${form.lastName}`);
    const body = encodeURIComponent(
`Booking request — ${form.lastName}

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Check-in: ${form.checkin}
Check-out: ${form.checkout}
Room type: ${form.roomType || "No preference"}
Adults: ${form.adults}
Children: ${form.children}${form.remarks ? `\nRemarks: ${form.remarks}` : ""}

Sent via heronissoshotel.gr`
    );
    window.location.href = `mailto:hero@nissos.to?subject=${subject}&body=${body}`;
  };

  const inputClass = "w-full bg-[#f5f2ee] border border-[#e0dcd5] px-4 py-3 text-[13px] text-[#111] placeholder-[#aaa] focus:outline-none focus:border-[#111] transition-colors";
  const labelClass = "block text-[10px] tracking-[0.16em] uppercase text-[#999] mb-1.5";

  return (
    <section id="booking" className="bg-white">

      {/* Option 1 — Direct request */}
      <div className="px-6 md:px-10 py-16 md:py-[88px] border-b border-[#e0dcd5]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <div>
            <p className="text-[10px] tracking-[0.26em] uppercase text-[#b5a47c] mb-3">Recommended</p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-4">{t("directTitle")}</h2>
            <p className="text-[13px] leading-[1.8] text-[#666]">{t("directDesc")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className={labelClass}>First name</label>
                <input type="text" required className={inputClass} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Last name</label>
                <input type="text" required className={inputClass} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
              </div>
              <div className="col-span-2">
                <label className={labelClass}>{t("email")}</label>
                <input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className={labelClass}>{t("checkin")}</label>
                <input type="date" required className={inputClass} value={form.checkin} onChange={e => setForm({ ...form, checkin: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>{t("checkout")}</label>
                <input type="date" required className={inputClass} value={form.checkout} onChange={e => setForm({ ...form, checkout: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>{t("adults")}</label>
                <select required className={inputClass} value={form.adults} onChange={e => setForm({ ...form, adults: e.target.value })}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>{t("children")}</label>
                <select required className={inputClass} value={form.children} onChange={e => setForm({ ...form, children: e.target.value })}>
                  {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-3">
              <div>
                <label className={labelClass}>{t("roomtype")}</label>
                <select required className={inputClass} value={form.roomType} onChange={e => setForm({ ...form, roomType: e.target.value })}>
                  <option value="">—</option>
                  <option value="Superior Room">{t("superior")}</option>
                  <option value="Standard Room">{t("standard")}</option>
                  <option value="Promo Room">{t("promo")}</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>{t("remarks")}</label>
                <input type="text" className={inputClass} value={form.remarks} onChange={e => setForm({ ...form, remarks: e.target.value })} />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#1b1b1b] text-white text-[11px] tracking-[0.2em] uppercase px-12 py-4 hover:bg-black transition-colors"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </div>

      {/* Option 2 — Booking.com */}
      <div className="px-6 md:px-10 py-16 md:py-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-center">
          <div>
            <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">Or book via</p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-4">{t("bookingCom")}</h2>
            <p className="text-[13px] leading-[1.8] text-[#666]">{t("bookingComDesc")}</p>
          </div>
          <div>
            <Link
              href="https://www.booking.com/hotel/gr/hersonissos.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#1b1b1b] text-[#1b1b1b] text-[11px] tracking-[0.2em] uppercase px-12 py-4 hover:bg-[#1b1b1b] hover:text-white transition-all"
            >
              Booking.com →
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
