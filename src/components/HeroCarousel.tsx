import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import team from "../assets/lady.png";
import guy from "../assets/guy.png";

type Slide = {
  tag: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  image: string;
  objectPosition?: string;
};

export default function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        tag: "Africa’s Premier VAS & Digital Aggregator",
        title: "Africa’s Premier\nTelecom & Digital\nSolutions Provider",
        subtitle: "Driving Digital Innovation Across the Continent",
        cta1: "Get Started",
        cta2: "Learn More",
        image: team,
        objectPosition: "center 20%",
      },
      {
        tag: "Telecom Partnerships & Aggregation",
        title: "Connect.\nAggregate.\nMonetize at Scale",
        subtitle:
          "Strategic telecom partnerships, content aggregation and carrier billing—built for growth across Africa.",
        cta1: "Become a Partner",
        cta2: "Explore Services",
        image: guy,
        objectPosition: "center 15%",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[active];

  function prev() {
    setActive((p) => (p - 1 + slides.length) % slides.length);
  }

  function next() {
    setActive((p) => (p + 1) % slides.length);
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy2 to-[#06102A]" />
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_20%_20%,rgba(28,150,191,0.40),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(210,242,80,0.14),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-14 md:pt-36 md:pb-16">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/90">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-lime" />
              <span className="text-sm font-semibold">{s.tag}</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-[1.05] whitespace-pre-line">
              {s.title}
            </h1>

            <p className="mt-5 text-lg text-white/80 max-w-xl">{s.subtitle}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/partner" className="btn-primary">
                {s.cta1}
              </a>

              <div className="inline-flex items-center rounded-2xl bg-[#0B1B3A]/55 border border-white/15 p-1 shadow-soft2 backdrop-blur">
                <button
                  onClick={prev}
                  className="h-11 w-11 rounded-xl text-white hover:bg-white/10 transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="mx-auto" />
                </button>

                <div className="px-2 flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={
                        "h-2.5 rounded-full transition-all " +
                        (i === active
                          ? "w-9 bg-brand-lime"
                          : "w-2.5 bg-white/35 hover:bg-white/60")
                      }
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="h-11 w-11 rounded-xl text-white hover:bg-white/10 transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="mx-auto" />
                </button>
              </div>
            </div>
          </div>

          {/* Right image (NO BOX - blends into background) */}
          <div className="relative lg:pl-6">
            {/* Curvy blobs behind (depth) */}
            <div className="absolute -inset-10 -z-10">
              <div className="absolute right-0 top-8 h-72 w-72 rounded-[48%_52%_55%_45%/55%_40%_60%_45%] bg-brand-lime/12 blur-3xl animate-[floaty_7s_ease-in-out_infinite]" />
              <div className="absolute right-16 bottom-0 h-80 w-80 rounded-[60%_40%_50%_50%/45%_55%_45%_55%] bg-cyan-400/12 blur-3xl animate-[floaty_9s_ease-in-out_infinite]" />
              <div className="absolute right-10 top-24 h-56 w-56 rounded-[55%_45%_45%_55%/50%_60%_40%_50%] bg-white/8 blur-3xl" />
            </div>

            {/* Image (free-floating) */}
            <div className="relative">
              <img
                src={s.image}
                alt="I-Cell"
                className="w-full h-[320px] md:h-[380px] lg:h-[460px] object-cover select-none
                           [filter:drop-shadow(0_26px_55px_rgba(0,0,0,0.60))]"
                style={{
                  objectPosition: s.objectPosition ?? "center 20%",
                  WebkitMaskImage:
                    "radial-gradient(125% 115% at 70% 40%, black 58%, transparent 80%)",
                  maskImage:
                    "radial-gradient(125% 115% at 70% 40%, black 58%, transparent 80%)",
                }}
              />

              {/* Navy shading so it blends perfectly */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(125% 115% at 70% 40%, black 58%, transparent 80%)",
                  maskImage:
                    "radial-gradient(125% 115% at 70% 40%, black 58%, transparent 80%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#071633]/55 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.12),transparent_45%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 220" className="w-full h-20 md:h-28 -mb-1">
          <path
            fill="#F4F7FF"
            d="M0,160L80,154.7C160,149,320,139,480,128C640,117,800,107,960,122.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-14px) translateX(8px) scale(1.02); }
        }
      `}</style>
    </section>
  );
}