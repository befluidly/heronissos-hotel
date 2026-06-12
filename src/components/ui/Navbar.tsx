"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
  { code: "pl", label: "PL" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "it", label: "IT" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] || "en";

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <>
      {/* Language bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center md:justify-end items-center px-4 md:px-8 h-10 bg-white border-b border-black/[0.08]">
        {LOCALES.map((l, i) => (
          <span key={l.code} className="flex items-center">
            {i > 0 && <span className="text-black/20 text-xs mx-1">·</span>}
            <button
              onClick={() => switchLocale(l.code)}
              className={`text-[12px] md:text-[14px] tracking-widest uppercase px-2 py-1 transition-colors ${
                currentLocale === l.code
                  ? "text-black border-b border-black/50"
                  : "text-black/40 hover:text-black"
              }`}
            >
              {l.label}
            </button>
          </span>
        ))}
      </div>

      {/* Main nav */}
      <nav className="fixed top-10 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 h-16 md:h-22 bg-[#1b1b1b] transition-all duration-300">
        <Link href="#hero">
          <Image
            src="/images/logo/Heronissos_Logo_White-01.png"
            alt="Heronissos Hotel"
            width={200}
            height={60}
            className="h-9 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 list-none">
          {(["rooms", "allinclusive", "dining", "contact"] as const).map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="text-[13px] tracking-[0.14em] uppercase text-white/75 hover:text-white transition-colors"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[calc(40px+64px)] left-0 right-0 z-30 bg-[#1b1b1b] flex flex-col md:hidden border-t border-white/10">
          {(["rooms", "allinclusive", "dining", "contact"] as const).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="text-[13px] tracking-[0.14em] uppercase text-white/75 hover:text-white px-6 py-4 border-b border-white/[0.06] transition-colors"
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
