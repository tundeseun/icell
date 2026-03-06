import lady from "../assets/team.jpg";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="section-shell section-waves p-5 md:p-7">
          {/* soft wave accents */}
          <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_15%_30%,rgba(28,150,191,0.18),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(11,27,58,0.10),transparent_55%)]" />

          <div className="relative section-shell-inner p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left content */}
              <div className="pr-0 lg:pr-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
              About I-Cell Multimedia
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              We are Africa&apos;s premier <b>Value-Added Services (VAS)</b> and <b>Digital Aggregator</b>,
              providing innovative telecom and digital solutions to businesses across the continent and beyond.
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-4">
              <Mini title="VISION" text="To be Africa’s most trusted VAS & digital aggregation partner." />
              <Mini title="MISSION" text="Empowering businesses through telecom partnerships & digital innovation." />
              <Mini title="VALUES" text="Integrity • Innovation • Reliability • Partnership" />
            </div>

            <a href="/about" className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-blue text-white font-extrabold shadow-soft hover:brightness-95 transition">
              Learn More <span aria-hidden>›</span>
            </a>

              </div>

              {/* Right image card */}
              <div className="section-shell-inner overflow-hidden">
                <img
                  src={lady}
                  alt="I-Cell team"
                  className="w-full h-[320px] md:h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/65 border border-white/70 p-4">
      <div className="text-xs font-black tracking-wide text-brand-blue">{title}</div>
      <div className="mt-2 text-sm font-semibold text-slate-700">{text}</div>
    </div>
  );
}