// src/pages/Partner.tsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import {
  TrendingUp,
  Lightbulb,
  Globe2,
  Headset,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * =========================
 * ✅ IMAGES YOU NEED (download/create)
 * Put these in: src/assets/
 * 1) partner-hero.jpg   (city/sky background like your design)
 * 2) partner-team.png   (team cutout on the hero right)
 * 3) partner-man.png    (smiling man on the "Why Partner..." right)
 * 4) partner-illust.png (phone/megaphone/coins illustration on "Who We Partner With")
 *
 * Partner logos in: src/assets/partners/
 * e.g. access.png, mtn.png, glo.png, airtel.png, 9mobile.png, intel.png, etc.
 * =========================
 */

// HERO background
import heroBg from "../assets/partner-hero.png";
// Hero team cutout
import heroTeam from "../assets/team.png";
// Why-partner image (right)
import whyMan from "../assets/lady.png";
// Illustration
import illust from "../assets/partner-illust.png";

// partner logos (add more if you have)
// import access from "../assets/partners/access.png";
import mtn from "../assets/partners/mtn.png";
import glo from "../assets/partners/glo.png";
import airtel from "../assets/partners/airtel.png";
import nine from "../assets/partners/9mobile.png";
// import intel from "../assets/partners/intel.png";

/* ---------------- in-view hook ---------------- */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setShow(e.isIntersecting), {
      threshold,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, show };
}

/* ---------------- animation variants ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.97, y: 14 },
  show: { opacity: 1, scale: 1, y: 0 },
};

const whyCards = [
  {
    Icon: TrendingUp,
    title: "Profitability",
    text: "Unlock new revenue with Africa’s leading VAS and digital aggregation expertise.",
    cta: "Learn More",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    text: "Access cutting-edge services and solutions tailored for the African market.",
    cta: "Learn More",
  },
  {
    Icon: Globe2,
    title: "Reach",
    text: "Engage millions of users across established and emerging markets in Africa.",
    cta: "Learn More",
  },
  {
    Icon: Headset,
    title: "Support",
    text: "Benefit from partner onboarding, operational support, and analytics.",
    cta: "Learn More",
  },
];

const partners = [
  // { name: "Access", src: access },
  { name: "MTN", src: mtn },
  { name: "Glo", src: glo },
  { name: "Airtel", src: airtel },
  { name: "9mobile", src: nine },
  // { name: "Intel", src: intel },
];

export default function PartnerPage() {
  const hero = useInView<HTMLDivElement>(0.2);
  const why = useInView<HTMLDivElement>(0.18);
  const who = useInView<HTMLDivElement>(0.18);
  const trust = useInView<HTMLDivElement>(0.18);

  // partner slider (no Math.random in render ✅)
  const [index, setIndex] = useState(0);
  const pageSize = 6;
  const total = partners.length;

  const next = useCallback(() => {
    if (total <= 1) return;
    setIndex((p) => (p + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    if (total <= 1) return;
    setIndex((p) => (p - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const t = setInterval(() => next(), 3200);
    return () => clearInterval(t);
  }, [next]);

  const visiblePartners = useMemo(() => {
    if (total === 0) return [];
    const out: typeof partners = [];
    for (let i = 0; i < Math.min(pageSize, total); i++) {
      out.push(partners[(index + i) % total]);
    }
    return out;
  }, [index, total]);

  return (
    <main className="relative overflow-hidden bg-[#EAF0FF]">
      {/* subtle page grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:54px_54px]" />

    
<section className="relative overflow-hidden h-[320px] md:h-[360px]">
  <div className="absolute inset-0">
    <img
      src={heroBg}
      alt="Partner background"
      className="h-full w-full object-cover object-center"
      draggable={false}
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,66,0.90)_0%,rgba(20,55,110,0.58)_55%,rgba(255,255,255,0.06)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(140,180,255,0.22),transparent_55%)]" />
  </div>

  <Container>
    <div ref={hero.ref} className="relative h-[320px] md:h-[360px] flex items-center">
      <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
        {/* left */}
        <motion.div
          initial="hidden"
          animate={hero.show ? "show" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h1 className="text-[34px] md:text-[48px] leading-[1.06] font-extrabold text-white drop-shadow">
            Become a Partner
          </h1>

          <p className="mt-2 text-white/90 text-sm md:text-lg max-w-[560px] leading-relaxed">
            Partner with Africa&apos;s Leading VAS <br className="hidden md:block" />
            and Digital Services Provider.
          </p>

          <p className="mt-3 text-white/80 text-xs md:text-sm max-w-[560px] leading-relaxed">
            Unlock new revenue streams and business growth by partnering with I-Cell.
            Let’s innovate, integrate, and scale your services together across Africa.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {/* buttons unchanged */}
          </div>
        </motion.div>

        {/* right image on glass */}
        <motion.div
          initial="hidden"
          animate={hero.show ? "show" : "hidden"}
          variants={popIn}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] md:w-[380px] lg:w-[420px]">
            {/* <div className="absolute inset-0 rounded-[34px] bg-white/12 backdrop-blur shadow-[0_30px_90px_-70px_rgba(2,6,23,0.8)]" />
            <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_55%)]" /> */}
            <img
              src={heroTeam}
              alt="I-Cell team"
              className="relative w-full h-[220px] md:h-[280px] object-contain
                         drop-shadow-[0_24px_55px_rgba(2,6,23,0.35)]"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </Container>

  {/* stacked waves (smaller) */}
  <div className="absolute -bottom-1 left-0 right-0">
    <HeroWaves className="h-[110px] md:h-[130px]" />
  </div>
</section>

      {/* ================= WHY PARTNER ================= */}
      {/* pull up into hero to match your design */}
      <section className="relative -mt-16 md:-mt-20 pt-6 pb-10">
        {/* soft wave tint */}
        <div className="pointer-events-none absolute inset-x-0 -top-14 opacity-60">
          <svg viewBox="0 0 1440 360" className="w-full h-[220px] md:h-[250px]">
            <path
              d="M0,220 C260,320 460,120 690,180 C920,240 1120,330 1440,230 L1440,360 L0,360 Z"
              fill="rgba(120,160,240,0.18)"
            />
            <path
              d="M0,255 C260,350 460,160 690,210 C920,260 1120,350 1440,255 L1440,360 L0,360 Z"
              fill="rgba(255,255,255,0.55)"
            />
          </svg>
        </div>

        <Container>
          <div ref={why.ref} className="relative">
            <motion.h2
              initial="hidden"
              animate={why.show ? "show" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-brand-navy text-center"
            >
            <br></br>  Why Partner <span className="font-semibold">with I-Cell?</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={why.show ? "show" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-2 text-slate-700 max-w-[720px] leading-relaxed text-center"
            >
              Gain a Competitive Edge in Africa’s Telecom and Digital Industry
            </motion.p>

            <div className="mt-7 grid lg:grid-cols-2 gap-7 items-center">
              {/* left: cards grid (2x2) */}
              <div className="grid sm:grid-cols-2 gap-5">
                {whyCards.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial="hidden"
                    animate={why.show ? "show" : "hidden"}
                    variants={popIn}
                    transition={{ duration: 0.55, delay: 0.08 + i * 0.08 }}
                    className="relative overflow-hidden rounded-[22px]
                               border border-white/70 bg-white/40 backdrop-blur-xl
                               shadow-[0_26px_85px_-62px_rgba(2,6,23,0.55)]
                               px-6 py-5"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.38),transparent_60%),radial-gradient(circle_at_86%_72%,rgba(130,170,255,0.18),transparent_60%)]" />

                    <div className="relative flex items-start gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-white/55 border border-white/70 shadow-[0_14px_40px_-30px_rgba(2,6,23,0.35)] flex items-center justify-center text-brand-blue">
                        <c.Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[15px] font-extrabold text-brand-navy">
                          {c.title}
                        </div>
                        <div className="mt-1 text-sm text-slate-700/90 leading-relaxed">
                          {c.text}
                        </div>

                        <a
                          href="/contact"
                          className="mt-4 inline-flex items-center justify-center gap-2
                                     rounded-full bg-[#0B1B3A] text-white
                                     px-5 py-2 text-xs font-extrabold
                                     shadow-[0_18px_55px_-45px_rgba(2,6,23,0.6)]
                                     hover:brightness-110 transition"
                        >
                          {c.cta} <span aria-hidden>›</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* right: image */}
              <motion.div
                initial="hidden"
                animate={why.show ? "show" : "hidden"}
                variants={popIn}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[520px]">
                  <div className="absolute inset-0 rounded-[30px] bg-white/12 backdrop-blur shadow-[0_30px_90px_-70px_rgba(2,6,23,0.8)]" />
                  <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_55%)]" />
                  <img
                    src={whyMan}
                    alt="Partner"
                    draggable={false}
                    className="relative w-full h-[300px] md:h-[360px] object-contain drop-shadow-[0_24px_55px_rgba(2,6,23,0.25)]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* lower wave strip */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 opacity-55">
          <svg viewBox="0 0 1440 320" className="w-full h-[210px] md:h-[240px]">
            <path
              d="M0,210 C240,290 430,120 650,160 C870,200 1040,300 1440,220 L1440,320 L0,320 Z"
              fill="rgba(255,255,255,0.62)"
            />
            <path
              d="M0,235 C260,315 470,150 690,190 C910,230 1110,320 1440,245 L1440,320 L0,320 Z"
              fill="rgba(120,160,240,0.15)"
            />
          </svg>
        </div>
      </section>

      {/* ================= WHO WE PARTNER WITH + FORM ================= */}
      <section className="relative pt-10 md:pt-14 pb-14">
        <Container>
          <div ref={who.ref} className="grid lg:grid-cols-2 gap-10 items-center">
            {/* left */}
            <motion.div
              initial="hidden"
              animate={who.show ? "show" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
                Who We Partner With
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed max-w-[560px]">
                Empowering a wide range of partners to succeed in the African Telecom
                ecosystem.
              </p>

              <motion.div
                initial="hidden"
                animate={who.show ? "show" : "hidden"}
                variants={popIn}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="mt-7"
              >
                <img
                  src={illust}
                  alt="Partners illustration"
                  draggable={false}
                  className="w-full max-w-[560px] object-contain drop-shadow-[0_26px_60px_rgba(2,6,23,0.18)]"
                />
              </motion.div>
            </motion.div>

            {/* right form card */}
            <motion.div
              initial="hidden"
              animate={who.show ? "show" : "hidden"}
              variants={popIn}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <div className="relative rounded-[28px] overflow-hidden border border-white/70 bg-white/40 backdrop-blur-xl
                              shadow-[0_26px_85px_-62px_rgba(2,6,23,0.55)]">
                <div className="pointer-events-none absolute inset-0 opacity-85 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.40),transparent_60%),radial-gradient(circle_at_86%_72%,rgba(130,170,255,0.18),transparent_60%)]" />

                <div className="relative p-7 md:p-8">
                  <h4 className="text-xl md:text-2xl font-extrabold text-brand-navy">
                    Become a Partner with I-Cell
                  </h4>

                  <form
                    className="mt-5 space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // hook up your API here
                    }}
                  >
                    <Field placeholder="Full Name" />
                    <Field placeholder="Business Email" type="email" />
                    <Field placeholder="Company Name" />
                    <Field placeholder="Phone Number" />
                    <textarea
                      placeholder="Tell us about your businesses and how you'd like to partner with us..."
                      className="w-full rounded-xl bg-white/65 border border-white/70 px-4 py-3 text-sm outline-none
                                 focus:ring-2 focus:ring-brand-blue/40"
                      rows={4}
                    />

                    <button
                      type="submit"
                      className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-full
                                 bg-[#F3C84A] text-[#0B1B3A] font-extrabold
                                 px-6 py-3 shadow-[0_18px_55px_-40px_rgba(2,6,23,0.35)]
                                 hover:brightness-95 transition"
                    >
                      Become a Partner <span aria-hidden>›</span>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ================= TRUSTED PARTNERS STRIP ================= */}
      <section className="relative pt-3 pb-14">
        <Container>
          <div ref={trust.ref}>
            <motion.h3
              initial="hidden"
              animate={trust.show ? "show" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center text-xl md:text-2xl font-extrabold text-brand-navy"
            >
              Trusted by <span className="text-brand-blue">Leading</span> Telecom &amp; Tech Partners
            </motion.h3>

            <motion.div
              initial="hidden"
              animate={trust.show ? "show" : "hidden"}
              variants={popIn}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-8 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/70
                         shadow-[0_26px_85px_-62px_rgba(2,6,23,0.55)]
                         px-5 md:px-7 py-4"
            >
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={prev}
                  className="hidden md:flex h-10 w-10 items-center justify-center rounded-full
                             bg-white/55 border border-white/70 text-brand-navy
                             shadow-[0_14px_40px_-30px_rgba(2,6,23,0.35)]
                             hover:brightness-95 transition"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex flex-wrap justify-center gap-8 flex-1">
                  {visiblePartners.map((p, i) => (
                    <motion.img
                      key={`${p.name}-${index}-${i}`}
                      src={p.src}
                      alt={p.name}
                      draggable={false}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={
                        trust.show
                          ? { opacity: 1, y: 0, scale: 1 }
                          : { opacity: 0, y: 8, scale: 0.98 }
                      }
                      transition={{ duration: 0.45, delay: 0.12 + i * 0.08 }}
                      className="h-9 md:h-10 w-[110px] object-contain opacity-90"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  className="hidden md:flex h-10 w-10 items-center justify-center rounded-full
                             bg-white/55 border border-white/70 text-brand-navy
                             shadow-[0_14px_40px_-30px_rgba(2,6,23,0.35)]
                             hover:brightness-95 transition"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}

/* ---------------- small input ---------------- */
function Field({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-xl bg-white/65 border border-white/70 px-4 py-3 text-sm outline-none
                 focus:ring-2 focus:ring-brand-blue/40"
    />
  );
}

/* ---------------- Hero waves ---------------- */
function HeroWaves({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 360" className={`w-full ${className}`}>
      <path
        d="M0,230 C240,315 430,140 650,180 C870,220 1040,330 1440,235 L1440,360 L0,360 Z"
        fill="rgba(255,255,255,0.42)"
      />
      <path
        d="M0,255 C260,340 470,165 690,205 C910,245 1110,350 1440,260 L1440,360 L0,360 Z"
        fill="rgba(255,255,255,0.80)"
      />
      <path
        d="M0,270 C260,350 470,185 690,220 C910,255 1110,360 1440,275 L1440,360 L0,360 Z"
        fill="rgba(255,255,255,0.92)"
      />
      <path
        d="M0,262 C260,342 470,175 690,212 C910,249 1110,350 1440,266"
        fill="none"
        stroke="rgba(120,160,240,0.22)"
        strokeWidth="16"
      />
    </svg>
  );
}