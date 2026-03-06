// src/components/ContactCTA.tsx
import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function ContactCTA() {
  // ✅ no `any` — typed correctly
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-16 bg-[#F4F7FF]"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft grid */}
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.07)_1px,transparent_1px)] bg-[size:36px_36px]" />
        {/* glows */}
        <div className="absolute -top-28 -left-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(28,150,191,0.33),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 -right-28 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(210,242,80,0.20),transparent_60%)] blur-2xl" />

        {/* floating accents */}
        <div
          className={[
            "absolute left-[9%] top-[26%] h-9 w-9 rounded-full bg-brand-blue/15",
            "transition-all duration-700",
            inView ? "animate-floaty opacity-100" : "opacity-0 translate-y-6",
          ].join(" ")}
        />
        <div
          className={[
            "absolute right-[10%] top-[20%] h-12 w-12 rounded-full bg-lime-300/20",
            "transition-all duration-700 delay-150",
            inView ? "animate-floaty2 opacity-100" : "opacity-0 translate-y-6",
          ].join(" ")}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        {/* header */}
        <div className="text-center">
          <div
            className={[
              "inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-soft2",
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <Sparkles className="h-4 w-4 text-brand-blue" />
            <span className="text-sm font-extrabold text-brand-navy">
              Let’s build something impactful
            </span>
          </div>

          <h3
            className={[
              "mt-5 text-3xl md:text-5xl font-extrabold text-brand-navy",
              "transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Contact Us
          </h3>

          <p
            className={[
              "mt-3 text-slate-700 max-w-2xl mx-auto text-base md:text-lg",
              "transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            Let’s work together to drive your{" "}
            <span className="font-extrabold text-brand-navy">
              Digital Success
            </span>
            .
          </p>
        </div>

        {/* cards (smaller + cleaner) */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <InfoCard
            inView={inView}
            delay={0}
            icon={<Mail className="h-4 w-4" />}
            title="Email"
            value="hello@icellmultimedia.com"
            hint="Send us a message and we’ll respond quickly."
            actionLabel="Send Email"
            actionHref="mailto:hello@icellmultimedia.com"
          />

          <InfoCard
            inView={inView}
            delay={90}
            icon={<Phone className="h-4 w-4" />}
            title="Phone"
            value="+234 XXX XXX XXXX"
            hint="Prefer a call? We’re available during business hours."
            actionLabel="Call Now"
            actionHref="tel:+2340000000000"
          />

          <InfoCard
            inView={inView}
            delay={180}
            icon={<MapPin className="h-4 w-4" />}
            title="Office"
            value="Block C, Floor 12, Eko Court Building, Kofo Abayomi VI, Lagos State"
            hint="Visit us for partnership discussions and demos."
            actionLabel="Directions"
            actionHref="https://maps.google.com/?q=Eko%20Court%20Building%20Kofo%20Abayomi%20VI%20Lagos"
            external
          />
        </div>

        {/* CTA button */}
        <div
          className={[
            "mt-8 flex items-center justify-center",
            "transition-all duration-700 delay-250",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <a
            href="/contact"
            className={[
              "group inline-flex items-center gap-2 rounded-full px-6 py-3",
              "bg-brand-blue text-white font-extrabold shadow-soft2",
              "hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 transition",
              "focus:outline-none focus:ring-4 focus:ring-brand-blue/25",
            ].join(" ")}
          >
            Talk to Us
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* local keyframes (no config needed) */}
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-9px) translateX(5px); }
        }
        @keyframes floaty2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(10px) translateX(-5px); }
        }
        .animate-floaty { animation: floaty 6.5s ease-in-out infinite; }
        .animate-floaty2 { animation: floaty2 7.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
  hint,
  actionLabel,
  actionHref,
  inView,
  delay,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  hint: string;
  actionLabel: string;
  actionHref: string;
  inView: boolean;
  delay: number;
  external?: boolean;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/70 bg-white/75 backdrop-blur",
        "shadow-soft2 p-5 md:p-5 text-left",
        "hover:-translate-y-1 hover:shadow-xl transition duration-300",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* shimmer highlight */}
      <div className="pointer-events-none absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/50 blur-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-[520%] transition-all duration-700" />

      <div className="flex items-start gap-3">
        {/* smaller icon chip */}
        <div className="h-10 w-10 rounded-2xl bg-brand-navy text-white flex items-center justify-center shadow-soft2">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-extrabold tracking-wider text-brand-blue uppercase">
            {title}
          </div>

          <div className="mt-1.5 text-[15px] md:text-base font-extrabold text-brand-navy leading-snug break-words">
            {value}
          </div>

          <div className="mt-2.5 text-sm text-slate-700">{hint}</div>

          <div className="mt-4">
            <a
              href={actionHref}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-navy hover:text-brand-blue transition"
            >
              {actionLabel}
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-[2px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* subtle corner glow */}
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(210,242,80,0.16),transparent_60%)] blur-2xl" />
    </div>
  );
}