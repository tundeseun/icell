import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "../components/Container";
import {
  Handshake,
  Smartphone,
  Layers3,
  Zap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import TeamBackground from "../components/TeamBackground";
import story from "../assets/lady.png";

/* partner logos */
import mtn from "../assets/partners/mtn.png";
import glo from "../assets/partners/glo.png";
import airtel from "../assets/partners/airtel.png";
import nine from "../assets/partners/9mobile.png";

/* ---------------- Intersection Observer ---------------- */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => setShow(entry.isIntersecting), {
      threshold,
    });

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, show };
}

function Reveal({
  show,
  delay = 0,
  children,
}: {
  show: boolean;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Partners ---------------- */

type Partner = { name: string; src: string };

function PartnersGrid({
  partners,
  show,
}: {
  partners: Partner[];
  show: boolean;
}) {
  const [ordered, setOrdered] = useState<Partner[]>(partners);

  useEffect(() => {
    const arr = [...partners];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    setOrdered(arr);
  }, [partners]);

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-8">
      {ordered.map((p, i) => (
        <div
          key={p.name}
          className={`rounded-2xl border border-white/70 bg-white/70 backdrop-blur shadow-lg p-4 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <img
            src={p.src}
            alt={p.name}
            className="h-10 w-[110px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}

/* ---------------- UI Components ---------------- */

function SafeImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white shadow-lg bg-white/60 p-4">
      <img
        src={src}
        alt={alt}
        className="w-full h-[300px] object-contain"
        draggable={false}
      />
    </div>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/80 backdrop-blur p-5 shadow-md hover:-translate-y-1 transition">
      <div className="flex items-center gap-3 text-brand-blue">
        {icon}
        <h4 className="font-bold text-brand-navy">{title}</h4>
      </div>

      <p className="text-sm text-slate-600 mt-2">{text}</p>
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function About() {
  const hero = useInView<HTMLDivElement>(0.15);
  const about = useInView<HTMLDivElement>(0.15);
  const partners = useInView<HTMLDivElement>(0.15);

  const partnerList: Partner[] = useMemo(
    () => [
      { name: "MTN", src: mtn },
      { name: "Airtel", src: airtel },
      { name: "Glo", src: glo },
      { name: "9mobile", src: nine },
    ],
    []
  );

  return (
    <main className="relative bg-[#EEF3FF] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[340px] md:h-[360px] overflow-hidden">
        {/* background + team image */}
        <div className="absolute inset-0">
          <TeamBackground />
        </div>

        {/* left overlay for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,27,58,0.86)_0%,rgba(11,27,58,0.48)_48%,rgba(11,27,58,0.10)_100%)]" />

        <Container>
          <div ref={hero.ref} className="relative pt-16 max-w-xl text-white z-10">
            <Reveal show={hero.show}>
              <h1 className="text-5xl font-extrabold">About Us</h1>
            </Reveal>

            <Reveal show={hero.show} delay={120}>
              <p className="mt-4 text-lg text-white/90 leading-relaxed">
                Connecting businesses across Africa through telecom
                innovation, digital aggregation, and carrier billing.
              </p>
            </Reveal>
          </div>
        </Container>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 260" className="w-full h-[140px]">
            <path
              d="M0,160 C240,230 420,80 640,120 C860,165 1020,250 1440,170 L1440,260 L0,260 Z"
              fill="rgba(255,255,255,0.9)"
            />
          </svg>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="-mt-28 pb-10">
        <Container>
          <div ref={about.ref}>
            <Reveal show={about.show}>
              <div className="rounded-[28px] bg-white/80 backdrop-blur border border-white shadow-xl p-8">
                <h2 className="text-3xl font-extrabold text-brand-navy">
                  About I-Cell Multimedia
                </h2>

                <p className="mt-3 text-slate-700 max-w-3xl">
                  We are Africa’s premier Value-Added Services (VAS) and
                  Digital Aggregator delivering innovative telecom
                  partnerships, mobile solutions, and content
                  distribution across the continent.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <Reveal show={about.show} delay={120}>
                    <SafeImage src={story} alt="Our Story" />
                  </Reveal>

                  <Reveal show={about.show} delay={220}>
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy">
                        Our Mission
                      </h3>

                      <p className="mt-3 text-slate-700">
                        Our mission is to empower businesses with
                        innovative digital services by leveraging strong
                        telecom partnerships and scalable technology
                        platforms.
                      </p>

                      <div className="mt-6 space-y-3 text-slate-700">
                        <p>
                          <b>Telecom Partnerships</b>
                          <br />
                          Collaboration with Africa&apos;s leading mobile
                          operators.
                        </p>

                        <p>
                          <b>Digital Innovation</b>
                          <br />
                          Building scalable digital ecosystems for
                          businesses.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-brand-navy">
                    Core Expertise
                  </h3>

                  <div className="grid md:grid-cols-3 gap-5 mt-5">
                    <Card
                      icon={<Layers3 size={22} />}
                      title="Digital Aggregation"
                      text="Distribution of digital content across telecom channels."
                    />

                    <Card
                      icon={<TrendingUp size={22} />}
                      title="Growth Strategy"
                      text="Helping businesses scale through telecom innovation."
                    />

                    <Card
                      icon={<ShieldCheck size={22} />}
                      title="Secure Platforms"
                      text="Reliable telecom-grade infrastructure."
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-brand-navy">
                    Our Services
                  </h3>

                  <div className="grid md:grid-cols-3 gap-5 mt-5">
                    <Card
                      icon={<Zap size={22} />}
                      title="VAS"
                      text="Premium SMS, USSD, IVR and mobile entertainment services."
                    />

                    <Card
                      icon={<Smartphone size={22} />}
                      title="Direct Carrier Billing"
                      text="Seamless billing through telecom operators."
                    />

                    <Card
                      icon={<Handshake size={22} />}
                      title="Consulting"
                      text="Expert telecom integration and digital strategy."
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="py-10">
        <Container>
          <div ref={partners.ref}>
            <Reveal show={partners.show}>
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-brand-navy">
                  Trusted Partners
                </h2>

                <p className="text-slate-600 mt-2">
                  Telecom leaders across Africa trust I-Cell
                </p>
              </div>
            </Reveal>

            <PartnersGrid partners={partnerList} show={partners.show} />

            <Reveal show={partners.show} delay={420}>
              <p className="text-center text-slate-600 mt-6 max-w-3xl mx-auto">
                We collaborate with leading telecom operators and
                digital providers to deliver scalable services across
                Africa.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}