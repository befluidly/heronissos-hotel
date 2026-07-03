"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-[#0d0d0d] border-t border-white/[0.07] px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="text-[12px] text-white/45 leading-[1.7] max-w-xl">
        {t("message")}{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-white/70 transition-colors">
          {t("policy")}
        </a>.
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={decline}
          className="text-[11px] tracking-[0.16em] uppercase text-white/30 hover:text-white/60 transition-colors px-4 py-2"
        >
          {t("decline")}
        </button>
        <button
          onClick={accept}
          className="text-[11px] tracking-[0.16em] uppercase bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all px-5 py-2"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
