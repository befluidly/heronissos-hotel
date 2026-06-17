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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/booking-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", checkin: "", checkout: "", roomType: "", adults: "2", children: "0", remarks: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-white border border-[#ddd] px-4 py-3 text-[13px] text-[#111] placeholder-[#aaa] focus:outline-none focus:border-[#111] transition-colors";
  const labelClass = "block text-[10px] tracking-[0.16em] uppercase text-[#999] mb-1.5";

  return (
    <section id="booking" className="bg-[#f5f2ee] px-6 md:px-10 py-16 md:py-[88px]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] tracking-[0.26em] uppercase text-[#999] mb-3">{t("bookYourStay")}</p>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light mb-12">
          {t("bookYourStay")}
        </h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ddd]">

          {/* Booking.com */}
          <div className="bg-white p-8 md:p-10 flex flex-col">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-3">Option 1</p>
            <h3 className="font-display text-[26px] font-light mb-3">{t("bookingCom")}</h3>
            <p className="text-[13px] leading-[1.8] text-[#666] mb-8 flex-1">{t("bookingComDesc")}</p>
            <Link
              href="https://www.booking.com/hotel/gr/hersonissos.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-[#1b1b1b] text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-black transition-colors"
            >
              Booking.com →
            </Link>
          </div>

          {/* Direct request form */}
          <div className="bg-white p-8 md:p-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-3">Option 2</p>
            <h3 className="font-display text-[26px] font-light mb-3">{t("directTitle")}</h3>
            <p className="text-[13px] leading-[1.8] text-[#666] mb-6">{t("directDesc")}</p>

            {status === "success" ? (
              <div className="border border-[#b5a47c] p-6 text-center">
                <p className="text-[13px] text-[#666]">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>First name</label>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t("name")}</label>
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      className={inputClass}
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t("email")}</label>
                  <input
                    type="email"
                    required
                    className={inputClass}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t("checkin")}</label>
                    <input
                      type="date"
                      required
                      className={inputClass}
                      value={form.checkin}
                      onChange={e => setForm({ ...form, checkin: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t("checkout")}</label>
                    <input
                      type="date"
                      required
                      className={inputClass}
                      value={form.checkout}
                      onChange={e => setForm({ ...form, checkout: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t("roomtype")}</label>
                  <select
                    className={inputClass}
                    value={form.roomType}
                    onChange={e => setForm({ ...form, roomType: e.target.value })}
                  >
                    <option value="">—</option>
                    <option value="Superior Room">{t("superior")}</option>
                    <option value="Standard Room">{t("standard")}</option>
                    <option value="Promo Room">{t("promo")}</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t("adults")}</label>
                    <select
                      className={inputClass}
                      value={form.adults}
                      onChange={e => setForm({ ...form, adults: e.target.value })}
                    >
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t("children")}</label>
                    <select
                      className={inputClass}
                      value={form.children}
                      onChange={e => setForm({ ...form, children: e.target.value })}
                    >
                      {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t("remarks")}</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={form.remarks}
                    onChange={e => setForm({ ...form, remarks: e.target.value })}
                  />
                </div>

                {status === "error" && (
                  <p className="text-[12px] text-red-500">{t("error")}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#1b1b1b] text-white text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-black transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? t("sending") : t("send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
