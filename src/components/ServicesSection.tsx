import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const row1 = [
  { title: "Value-Added Services (VAS)", points: ["Premium SMS & USSD", "IVR & engagement"] },
  { title: "Digital Aggregation", points: ["Content monetization", "Multi-platform delivery"] },
  { title: "Direct Carrier Billing", points: ["Mobile payments", "Fraud protection"] },
];

const row2 = [
  { title: "Mobile Gaming", points: ["Operator distribution", "Localized experiences"] },
  { title: "Digital Solutions", points: ["Mobile-first products", "Growth analytics"] },
  { title: "Consulting & Support", points: ["Strategy & rollout", "Ops & reporting"] },
];

// repeat animation every time you scroll in/out
function useInViewRepeat<T extends HTMLElement>(threshold = 0.28) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function ServicesSection() {
  const { ref, inView } = useInViewRepeat<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="py-5 md:py-7">
      <div className="max-w-7xl mx-auto px-5">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
          {/* premium glow + subtle grid */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_20%_35%,rgba(11,27,58,0.10),transparent_55%),radial-gradient(circle_at_85%_60%,rgba(28,150,191,0.13),transparent_55%)]" />
            <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
          </div>

          <div className="relative p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div>
                <div
                  className={cx(
                    "text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight",
                    "transition-all duration-700",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}
                >
                  Our Services
                </div>

                <div
                  className={cx(
                    "mt-1 text-sm md:text-base font-extrabold text-brand-navy",
                    "transition-all duration-700",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}
                  style={{ transitionDelay: "90ms" }}
                >
                  <span className="text-brand-blue">Telecom & Digital</span> solutions that scale.
                </div>
              </div>

              <a
                href="/services"
                className={cx(
                  "inline-flex items-center gap-2 rounded-full bg-brand-blue text-white font-extrabold",
                  "px-4 py-2 text-sm shadow-soft hover:brightness-95 transition",
                  "transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}
                style={{ transitionDelay: "160ms" }}
              >
                View Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Cards grid: 1 column, 2 rows */}
            <div className="mt-4 grid gap-3">
              <div className="grid md:grid-cols-3 gap-3">
                {row1.map((s, i) => (
                  <ServiceCard key={s.title} s={s} inView={inView} delay={240 + i * 110} accent="blue" />
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-3">
                {row2.map((s, i) => (
                  <ServiceCard key={s.title} s={s} inView={inView} delay={580 + i * 110} accent="navy" />
                ))}
              </div>
            </div>

            {/* Footer line */}
            <div
              className={cx(
                "mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2",
                "transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              )}
              style={{ transitionDelay: "980ms" }}
            >
              <div className="text-[11px] text-slate-500">
                Short overview — explore the full Services page for details.
              </div>

              <a
                href="/contact"
                className="text-[11px] font-extrabold text-brand-navy hover:text-brand-blue transition inline-flex items-center gap-1"
              >
                Request a proposal <span aria-hidden>›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  s,
  inView,
  delay,
  accent,
}: {
  s: { title: string; points: string[] };
  inView: boolean;
  delay: number;
  accent: "blue" | "navy";
}) {
  return (
    <div
      className={cx(
        "group relative overflow-hidden rounded-2xl border border-white/70 bg-white/70 backdrop-blur shadow-soft",
        // slightly taller so text can “fill” nicely
        "min-h-[140px] md:min-h-[150px]",
        // better spacing
        "p-4 md:p-5",
        // smoother premium motion
        "transition-all duration-700",
        "hover:-translate-y-1 hover:shadow-lg hover:bg-white/85",
        // subtle glow on hover
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300",
        accent === "blue"
          ? "before:bg-[radial-gradient(circle_at_25%_25%,rgba(28,150,191,0.22),transparent_55%)]"
          : "before:bg-[radial-gradient(circle_at_25%_25%,rgba(11,27,58,0.18),transparent_55%)]",
        "group-hover:before:opacity-100",
        // subtle border shimmer
        "after:pointer-events-none after:absolute after:-inset-[1px] after:rounded-2xl after:opacity-0 after:transition-opacity after:duration-300",
        "after:bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent,rgba(255,255,255,0.35))]",
        "group-hover:after:opacity-100",
        // entrance animation (repeat)
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* floating shine blob */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-white/40 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
      <div className="pointer-events-none absolute -bottom-14 -left-14 h-28 w-28 rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

      {/* content */}
      <div className="relative h-full flex flex-col">
        {/* top row */}
        <div className="flex items-start justify-between gap-3">
          {/* BIGGER title */}
          <div className="font-extrabold text-brand-navy text-[15px] md:text-[16px] leading-snug">
            {s.title}
          </div>

          <span
            className={cx(
              "shrink-0 h-10 w-10 rounded-xl border border-slate-100 bg-white flex items-center justify-center",
              "transition-all duration-300",
              "group-hover:scale-[1.06] group-hover:rotate-[2deg]"
            )}
          >
            <CheckCircle2 className={cx("h-6 w-6", accent === "blue" ? "text-brand-blue" : "text-brand-navy")} />
          </span>
        </div>

        {/* BIGGER bullets to “fill” the card */}
        <ul className="mt-3 grid gap-2 text-sm text-slate-800 flex-1">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span
                className={cx(
                  "mt-[7px] h-2 w-2 rounded-full",
                  accent === "blue" ? "bg-brand-blue" : "bg-brand-navy"
                )}
              />
              <span className="font-semibold leading-snug">{p}</span>
            </li>
          ))}
        </ul>

        {/* small “micro label” for premium feel */}
        <div className="mt-2 text-[11px] font-extrabold tracking-wide text-slate-400 uppercase">
          Learn more →
        </div>
      </div>
    </div>
  );
}