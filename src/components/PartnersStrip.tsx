// src/components/PartnersStrip.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef } from "react";

import mtn from "../assets/partners/mtn.png";
import airtel from "../assets/partners/airtel.png";
import glo from "../assets/partners/glo.png";
import nineMobile from "../assets/partners/9mobile.png";

type Partner = {
  name: string;
  logo: string;
};

export default function PartnersStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  const partners = useMemo<Partner[]>(
    () => [
      { name: "MTN", logo: mtn },
      { name: "Airtel", logo: airtel },
      { name: "Glo", logo: glo },
      { name: "9mobile", logo: nineMobile },
    ],
    []
  );

  // duplicate for seamless animation
  const loop = [...partners, ...partners];

  function scrollLeft() {
    trackRef.current?.classList.remove("animate-marquee");
    void trackRef.current?.offsetWidth;
    trackRef.current?.classList.add("animate-marquee-reverse");
  }

  function scrollRight() {
    trackRef.current?.classList.remove("animate-marquee-reverse");
    void trackRef.current?.offsetWidth;
    trackRef.current?.classList.add("animate-marquee");
  }

  return (
    <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy2 to-[#05102A] overflow-hidden">
      {/* top wave */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 180" className="w-full h-16 md:h-24 -mb-1">
          <path
            fill="#F4F7FF"
            d="M0,80L80,64C160,48,320,16,480,21.3C640,27,800,69,960,85.3C1120,101,1280,91,1360,85.3L1440,80L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative py-16">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(28,150,191,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(210,242,80,0.10),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-5 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Partners
          </h3>

          <p className="mt-3 text-white/80">
            Trusted by Top Telecom and Tech Companies
          </p>

          <div className="mt-10 mx-auto max-w-5xl rounded-full bg-white/90 border border-white/50 shadow-soft2 px-4 py-3 flex items-center gap-3">

            <button
              onClick={scrollLeft}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 text-brand-navy hover:bg-slate-50 transition"
            >
              <ChevronLeft className="mx-auto" />
            </button>

            {/* continuous marquee */}
            <div className="flex-1 overflow-hidden">
              <div
                ref={trackRef}
                className="flex items-center gap-3 w-max animate-marquee hover:[animation-play-state:paused]"
              >
                {loop.map((p, i) => (
                  <div
                    key={`${p.name}-${i}`}
                    className="w-[170px] md:w-[200px] h-[64px] md:h-[72px] rounded-2xl bg-white border border-slate-100 flex items-center justify-center px-6 hover:shadow-md transition"
                  >
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-[40px] w-auto object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollRight}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 text-brand-navy hover:bg-slate-50 transition"
            >
              <ChevronRight className="mx-auto" />
            </button>
          </div>

          <a
            href="/partner"
            className="mt-6 inline-flex text-white/85 font-semibold hover:text-white transition"
          >
            Become a Partner <span className="ml-2">›</span>
          </a>
        </div>
      </div>

      {/* bottom wave */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 220" className="w-full h-20 md:h-28 -mb-1">
          <path
            fill="#F4F7FF"
            d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,220L0,220Z"
          />
        </svg>
      </div>

      {/* animation */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marqueeReverse 28s linear infinite;
        }
      `}</style>
    </section>
  );
}