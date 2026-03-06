// src/pages/Services.tsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import {
  Zap,
  Layers3,
  Smartphone,
  Gamepad2,
  Lightbulb,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import heroBg from "../assets/services-hero.png";
import lady from "../assets/team.png";
import team from "../assets/team.jpg";

import mtn from "../assets/partners/mtn.png";
import glo from "../assets/partners/glo.png";
import airtel from "../assets/partners/airtel.png";
import nine from "../assets/partners/9mobile.png";

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
  hidden: { opacity: 0, scale: 0.96, y: 14 },
  show: { opacity: 1, scale: 1, y: 0 },
};

const services = [
  {
    Icon: Zap,
    title: "Value-Added Services (VAS)",
    text: "Premium SMS & USSD services, Mobile entertainment & gaming",
  },
  {
    Icon: Layers3,
    title: "Digital Aggregation",
    text: "Content aggregation and monetization across telecom channels.",
  },
  {
    Icon: Smartphone,
    title: "Direct Carrier Billing",
    text: "Seamless mobile billing enabling easy and secure payments.",
  },
  {
    Icon: Gamepad2,
    title: "Mobile Gaming",
    text: "Telecom-integrated game distribution creating immersive experiences and revenue.",
  },
  {
    Icon: Lightbulb,
    title: "Digital Solutions",
    text: "Tailored strategies drive digital transformation and business optimization.",
  },
  {
    Icon: Handshake,
    title: "Consulting & Support",
    text: "Expert consultancy and support for seamless integration & sustained growth.",
  },
];

const partners = [
  { name: "MTN", src: mtn },
  { name: "Airtel", src: airtel },
  { name: "Glo", src: glo },
  { name: "9mobile", src: nine },
];

export default function ServicesPage() {
  const hero = useInView<HTMLDivElement>(0.2);
  const story = useInView<HTMLDivElement>(0.18);
  const trust = useInView<HTMLDivElement>(0.18);
  const cta = useInView<HTMLDivElement>(0.2);

  const serviceGrid = useMemo(() => services, []);

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

      {/* ================= HERO (shorter) ================= */}
      <section className="relative overflow-hidden h-[300px] md:h-[330px]">
        {/* background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Services background"
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,66,0.92)_0%,rgba(20,55,110,0.65)_55%,rgba(255,255,255,0.05)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(140,180,255,0.18),transparent_55%)]" />
        </div>

        <Container>
          <div ref={hero.ref} className="relative h-[300px] md:h-[330px] flex items-center">
            <div className="grid lg:grid-cols-2 gap-6 items-center w-full">
              {/* left text */}
              <motion.div
                initial="hidden"
                animate={hero.show ? "show" : "hidden"}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-[30px] md:text-[42px] leading-[1.05] font-extrabold text-white">
                  Our Services
                </h1>

                <p className="mt-2 text-white/90 text-sm md:text-base max-w-[420px] leading-relaxed">
                  Comprehensive Digital &amp; Telecom
                  <br />
                  Solutions for Your Business
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/partner"
                    className="px-5 py-2 rounded-full bg-[#F3C84A] text-[#0B1B3A] font-extrabold text-sm
                               shadow-[0_18px_55px_-40px_rgba(2,6,23,0.65)] hover:brightness-95 transition"
                  >
                    Become a Partner
                  </a>

                  <a
                    href="/contact"
                    className="px-5 py-2 rounded-full bg-[#1D3E7A]/80 text-white text-sm font-extrabold
                               border border-white/20 shadow-[0_18px_55px_-42px_rgba(2,6,23,0.55)]
                               hover:bg-[#1D3E7A]/90 transition"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>

              {/* right hero image panel (NO BORDER on team.png) */}
              <motion.div
                initial="hidden"
                animate={hero.show ? "show" : "hidden"}
                variants={popIn}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
                className="relative flex justify-end"
              >
                <div className="relative w-[230px] md:w-[290px]">
                  {/* glass panel - keep it, but remove border so png edge looks clean */}
                  <div className="absolute inset-0 rounded-[26px] bg-white/12 backdrop-blur shadow-[0_30px_90px_-70px_rgba(2,6,23,0.8)]" />
                  <div className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_55%)]" />

                  <img
                    src={lady}
                    alt="I-Cell"
                    draggable={false}
                    className="relative w-full h-[200px] md:h-[240px] object-contain
                               drop-shadow-[0_22px_45px_rgba(2,6,23,0.28)]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* waves (smaller) */}
        <div className="absolute -bottom-1 left-0 right-0">
          <HeroWaves className="h-[95px] md:h-[105px]" />
        </div>
      </section>

      {/* ================= STORY + SERVICE CARDS (MOVE UP) ================= */}
      {/* ✅ negative margin pulls section upward into hero waves */}
      <section className="relative -mt-12 md:-mt-16 pt-6 md:pt-8 pb-10">
        {/* soft wave tint behind cards */}
        <div className="pointer-events-none absolute inset-x-0 -top-14 opacity-60">
          <svg viewBox="0 0 1440 360" className="w-full h-[220px] md:h-[240px]">
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
          <div ref={story.ref}>
          <motion.h2
  initial="hidden"
  animate={story.show ? "show" : "hidden"}
  variants={fadeUp}
  transition={{ duration: 0.6 }}
  className="text-2xl md:text-3xl font-extrabold text-brand-navy text-center"
>
 <br></br> Our Story
</motion.h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {serviceGrid.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial="hidden"
                  animate={story.show ? "show" : "hidden"}
                  variants={popIn}
                  transition={{ duration: 0.55, delay: 0.06 + i * 0.08 }}
                  className="relative overflow-hidden rounded-[22px]
                             border border-white/70 bg-white/40 backdrop-blur-xl
                             shadow-[0_26px_85px_-62px_rgba(2,6,23,0.55)]
                             px-6 py-6"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.38),transparent_60%),radial-gradient(circle_at_86%_72%,rgba(130,170,255,0.18),transparent_60%)]" />

                  <div className="relative flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/55 border border-white/70 shadow-[0_14px_40px_-30px_rgba(2,6,23,0.35)] flex items-center justify-center text-brand-blue">
                      <s.Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[15px] font-extrabold text-brand-navy">
                        {s.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-700/90 leading-relaxed">
                        {s.text}
                      </div>

                      <a
                        href="/contact"
                        className="mt-4 inline-flex items-center justify-center gap-2
                                   rounded-full bg-[#0B1B3A] text-white
                                   px-5 py-2 text-xs font-extrabold
                                   shadow-[0_18px_55px_-45px_rgba(2,6,23,0.6)]
                                   hover:brightness-110 transition"
                      >
                        Learn More <span aria-hidden>›</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= TRUSTED PARTNERS ================= */}
      <section className="relative pt-8 pb-12">
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
              className="mt-7 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/70
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
                      animate={trust.show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.98 }}
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

            <div className="mt-8 flex justify-center">
              <motion.a
                href="/partner"
                initial={{ opacity: 0, y: 10 }}
                animate={trust.show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-extrabold
                           bg-[#F3C84A] text-[#0B1B3A]
                           shadow-[0_18px_55px_-40px_rgba(2,6,23,0.50)]
                           hover:brightness-95 transition"
              >
                Become a Partner <span aria-hidden className="ml-2">›</span>
              </motion.a>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative pt-6 pb-16">
        <Container>
          <div
            ref={cta.ref}
            className="relative rounded-[30px] overflow-hidden border border-white/70
                       shadow-[0_30px_90px_-70px_rgba(2,6,23,0.55)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(245,249,255,0.62),rgba(235,244,255,0.72))]" />
            <div className="absolute inset-0 opacity-85 bg-[radial-gradient(circle_at_16%_18%,rgba(120,160,240,0.18),transparent_55%),radial-gradient(circle_at_92%_80%,rgba(11,27,58,0.08),transparent_60%)]" />

            <div className="relative p-7 md:p-9 grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial="hidden"
                animate={cta.show ? "show" : "hidden"}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                  Unlock Your Business <br />
                  Potential <span className="text-brand-blue">Today</span>
                </h2>

                <p className="mt-3 text-slate-700 max-w-[520px] leading-relaxed">
                  Partner with I-Cell for innovative Telecom &amp; Digital Solutions.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href="/get-started"
                    className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-extrabold
                               bg-[#F3C84A] text-[#0B1B3A]
                               shadow-[0_18px_55px_-40px_rgba(2,6,23,0.50)]
                               hover:brightness-95 transition"
                  >
                    Get Started <span aria-hidden className="ml-2">›</span>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-extrabold
                               bg-[#0B1B3A] text-white
                               shadow-[0_18px_55px_-40px_rgba(2,6,23,0.55)]
                               hover:brightness-110 transition"
                  >
                    Contact Us <span aria-hidden className="ml-2">›</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={cta.show ? "show" : "hidden"}
                variants={popIn}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex justify-center lg:justify-end"
              >
                <img
                  src={team}
                  alt="I-Cell team"
                  draggable={false}
                  // className="w-full max-w-[540px] rounded-[26px] object-cover shadow-[0_30px_90px_-70px_rgba(2,6,23,0.55)]"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </main>
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