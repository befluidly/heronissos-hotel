import Link from "next/link";

export function TrustBar() {
  return (
    <div className="bg-[#1b1b1b] border-t border-white/[0.06] px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Scores */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10">

        {/* Stars */}
        <div className="flex items-center gap-2">
          <span className="text-[#b5a47c] text-sm tracking-widest">★★★★</span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-white/40">4-star hotel</span>
        </div>

        <div className="w-px h-4 bg-white/10 hidden md:block" />

        {/* Booking.com */}
        <div className="flex items-center gap-3">
          <div className="text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-[22px] font-light text-white">9.4</span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-white/40">/ 10</span>
            </div>
            <div className="text-[10px] tracking-[0.16em] uppercase text-white/30 mt-0.5">Booking.com</div>
          </div>
        </div>

        <div className="w-px h-4 bg-white/10 hidden md:block" />

        {/* TripAdvisor */}
        <div className="flex items-center gap-3">
          <div className="text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-[22px] font-light text-white">4.1</span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-white/40">/ 5</span>
            </div>
            <div className="text-[10px] tracking-[0.16em] uppercase text-white/30 mt-0.5">TripAdvisor · #8 in Hersonissos</div>
          </div>
        </div>

        <div className="w-px h-4 bg-white/10 hidden md:block" />

        {/* Travelers choice */}
        <div className="flex items-center gap-2">
          <span className="text-[#b5a47c] text-xs">◈</span>
          <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">Travelers&apos; Choice 2024</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="https://www.booking.com/hotel/gr/hersonissos.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] tracking-[0.2em] uppercase text-white border border-white/30 px-6 py-2.5 hover:bg-white hover:text-[#111] transition-all whitespace-nowrap"
      >
        Check on Booking.com →
      </Link>
    </div>
  );
}
