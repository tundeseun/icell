import React, { useEffect, useRef, useState } from "react";
import Container from "../components/Container";

import heroBg from "../assets/contact-hero.png";
import contactIllustration from "../assets/contact-illustration.png";

// Use your existing images (ensure these paths match your project)
import lady from "../assets/team.png";
import team from "../assets/team.png"; // change to team.jpg if that's what you have

import { Phone, Mail, MapPin, Send, ShieldCheck } from "lucide-react";

/* ---------------- helpers: in-view + reveal ---------------- */
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

function Reveal({
  show,
  delay = 0,
  className = "",
  children,
}: {
  show: boolean;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "transition-all duration-700 will-change-transform",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- small UI bits ---------------- */
function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={[
          "w-full rounded-xl border border-white/55 bg-white/70 backdrop-blur",
          "px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-400",
          "outline-none transition",
          "focus:border-white focus:ring-2 focus:ring-[rgba(210,242,80,0.55)]",
        ].join(" ")}
      />
    </label>
  );
}

function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <textarea
        placeholder={placeholder}
        rows={4}
        className={[
          "w-full rounded-xl border border-white/55 bg-white/70 backdrop-blur",
          "px-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-400",
          "outline-none transition resize-none",
          "focus:border-white focus:ring-2 focus:ring-[rgba(210,242,80,0.55)]",
        ].join(" ")}
      />
    </label>
  );
}

function PrimaryBtn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-xl px-5 py-3 font-semibold",
        "bg-gradient-to-b from-[#FFD85A] to-[#F7C52A] text-[#0B1B3A]",
        "shadow-[0_14px_40px_-26px_rgba(11,27,58,0.65)]",
        "hover:brightness-[1.02] active:translate-y-[1px] transition",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function GhostBtn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-xl px-5 py-3 font-semibold",
        "bg-white/10 text-white border border-white/20",
        "shadow-[0_14px_40px_-30px_rgba(2,6,23,0.60)]",
        "hover:bg-white/14 active:translate-y-[1px] transition",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

/* ---------------- page ---------------- */
export default function Contact() {
  const hero = useInView<HTMLDivElement>(0.2);
  const touch = useInView<HTMLDivElement>(0.12);
  const mission = useInView<HTMLDivElement>(0.12);
  const cta = useInView<HTMLDivElement>(0.12);

  return (
    <main className="relative bg-[#EEF3FF] overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* ===== HERO (SHORTER) ===== */}
      <section className="relative overflow-hidden">
        {/* Make hero shorter on desktop */}
        <div className="relative h-[320px] md:h-[360px]">
          <img
            src={heroBg}
            alt="Contact hero background"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,27,58,0.86)_0%,rgba(11,27,58,0.52)_48%,rgba(11,27,58,0.18)_100%)]" />
          <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_20%_20%,rgba(28,150,191,0.35),transparent_55%)]" />

          <Container>
            <div
              ref={hero.ref}
              className="relative pt-14 md:pt-16 h-full flex items-center"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-center w-full">
                {/* left text */}
                <div className="text-white max-w-2xl">
                  <Reveal show={hero.show}>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                      Contact Us
                    </h1>
                  </Reveal>

                  <Reveal show={hero.show} delay={90}>
                    <p className="mt-2 text-lg md:text-xl text-white/90">
                      We’re Here to Help You
                      <br className="hidden md:block" />
                      Accelerate Your Digital Growth
                    </p>
                  </Reveal>

                  <Reveal show={hero.show} delay={160}>
                    <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/80 max-w-xl">
                      Unlock new revenue streams and business growth by partnering
                      with I-Cell. Let’s innovate, integrate and scale your services
                      together across Africa.
                    </p>
                  </Reveal>

                  <Reveal show={hero.show} delay={220}>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <PrimaryBtn>Get Started</PrimaryBtn>
                      <GhostBtn>
                        <Phone size={18} />
                        Call Us
                      </GhostBtn>
                    </div>
                  </Reveal>
                </div>

                {/* right image card */}
                <div className="hidden lg:block">
                  <Reveal show={hero.show} delay={160}>
                    {/* <div className="relative ml-auto w-full max-w-[560px] rounded-[26px] border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden shadow-[0_28px_80px_-55px_rgba(2,6,23,0.75)]"> */}
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                      <img
                        src={lady}
                        alt="I-Cell representative"
                        className="relative w-full h-[250px] object-contain object-bottom"
                        draggable={false}
                      />
                    {/* </div> */}
                  </Reveal>
                </div>
              </div>
            </div>
          </Container>

          {/* wave divider (reduced height) */}
          <div className="absolute -bottom-[1px] left-0 right-0">
            <svg viewBox="0 0 1440 200" className="w-full h-[110px] md:h-[120px]">
              <path
                d="M0,120 C240,180 420,70 640,102 C860,135 1020,195 1440,128 L1440,200 L0,200 Z"
                fill="rgba(255,255,255,0.55)"
              />
              <path
                d="M0,142 C260,206 460,102 680,130 C900,155 1100,216 1440,150 L1440,200 L0,200 Z"
                fill="rgba(255,255,255,0.88)"
              />
              <path
                d="M0,134 C260,196 460,96 680,124 C900,150 1100,204 1440,145"
                fill="none"
                stroke="rgba(28,150,191,0.20)"
                strokeWidth="10"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== GET IN TOUCH (PULLED UP + LESS PADDING) ===== */}
      <section className="-mt-10 md:-mt-14 pb-10">
        <Container>
          <div ref={touch.ref} className="relative">
           <Reveal show={touch.show}>
  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1B3A] text-center">
  <br></br>  Get in Touch <span className="font-semibold text-slate-600">with Us</span>
  </h2>
</Reveal>

            <div className="mt-4 grid lg:grid-cols-2 gap-5 items-start">
              {/* left card */}
              <Reveal show={touch.show} delay={120}>
                <div className="relative rounded-[26px] border border-white/80 bg-white/55 backdrop-blur-xl overflow-hidden shadow-[0_28px_80px_-62px_rgba(2,6,23,0.55)]">
                  <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_18%_18%,rgba(28,150,191,0.14),transparent_60%),radial-gradient(circle_at_92%_80%,rgba(11,27,58,0.09),transparent_60%)]" />

                  <div className="relative p-5 md:p-6">
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="h-10 w-10 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-center">
                        <Mail size={18} className="text-[#1C96BF]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#0B1B3A]">Reach out anytime</p>
                        <p className="text-sm text-slate-600">
                          Email, phone, or visit us in person.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-white/65 border border-white/70 p-3">
                        <div className="flex items-center gap-2 text-[#0B1B3A] font-semibold">
                          <Phone size={16} className="text-[#1C96BF]" />
                          Phone
                        </div>
                        <p className="mt-1 text-slate-600">+234 XXX XXX XXXX</p>
                      </div>

                      <div className="rounded-xl bg-white/65 border border-white/70 p-3">
                        <div className="flex items-center gap-2 text-[#0B1B3A] font-semibold">
                          <Mail size={16} className="text-[#1C96BF]" />
                          Email
                        </div>
                        <p className="mt-1 text-slate-600">info@icellmultimedia.com</p>
                      </div>

                      <div className="sm:col-span-2 rounded-xl bg-white/65 border border-white/70 p-3">
                        <div className="flex items-center gap-2 text-[#0B1B3A] font-semibold">
                          <MapPin size={16} className="text-[#1C96BF]" />
                          Address
                        </div>
                        <p className="mt-1 text-slate-600">
                          Lagos, Nigeria (update with your official address)
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <img
                        src={contactIllustration}
                        alt="Contact illustration"
                        className="w-full h-[220px] md:h-[250px] object-contain"
                        draggable={false}
                      />
                    </div>

                    {/* socials row (simple) */}
                    <div className="mt-2 flex gap-2">
                      {["in", "x", "f"].map((x) => (
                        <button
                          key={x}
                          className="h-10 w-10 rounded-xl border border-white/70 bg-white/60 backdrop-blur hover:bg-white/75 transition text-slate-600 font-bold"
                          aria-label="social"
                        >
                          {x}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* right form card */}
              <Reveal show={touch.show} delay={160}>
                <div className="relative rounded-[26px] border border-white/80 bg-white/55 backdrop-blur-xl overflow-hidden shadow-[0_28px_80px_-62px_rgba(2,6,23,0.55)]">
                  <div className="absolute inset-0 opacity-75 bg-[radial-gradient(circle_at_18%_18%,rgba(28,150,191,0.12),transparent_60%),radial-gradient(circle_at_92%_80%,rgba(11,27,58,0.08),transparent_60%)]" />

                  <div className="relative p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#0B1B3A]">
                      Send Us a Message
                    </h3>

                    <div className="mt-4 space-y-3">
                      <Input label="Full Name" placeholder="Full Name" />
                      <Input
                        label="Business Email"
                        placeholder="Business Email"
                        type="email"
                      />
                      <Input label="Phone Number" placeholder="Phone Number" />
                      <Textarea
                        label="Message"
                        placeholder="How can we assist you?"
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        className={[
                          "w-full rounded-xl px-5 py-3 font-semibold",
                          "bg-gradient-to-b from-[#FFD85A] to-[#F7C52A] text-[#0B1B3A]",
                          "shadow-[0_16px_44px_-30px_rgba(11,27,58,0.60)]",
                          "hover:brightness-[1.02] active:translate-y-[1px] transition",
                          "inline-flex items-center justify-center gap-2",
                        ].join(" ")}
                      >
                        Send Message <Send size={18} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-3 py-2 text-xs text-slate-600">
                      <ShieldCheck size={16} className="text-[#1C96BF]" />
                      We value your privacy. Your information is kept confidential and secure.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== MISSION SECTION (TIGHTER) ===== */}
      <section className="pb-10">
        <Container>
          <div ref={mission.ref} className="grid lg:grid-cols-2 gap-5 items-center">
            <Reveal show={mission.show}>
              <div className="relative rounded-[26px] border border-white/80 bg-white/55 backdrop-blur-xl overflow-hidden shadow-[0_28px_80px_-62px_rgba(2,6,23,0.55)]">
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_18%,rgba(28,150,191,0.12),transparent_60%),radial-gradient(circle_at_92%_80%,rgba(11,27,58,0.08),transparent_60%)]" />
                <div className="relative p-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B1B3A]">
                    Your Success is Our Mission
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed text-sm md:text-base">
                    Partner with us to explore telecom and digital solutions tailored to
                    drive engagement and revenue growth.
                  </p>

                  <div className="mt-4">
                    <PrimaryBtn className="px-6">Let’s Talk</PrimaryBtn>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal show={mission.show} delay={140}>
              <div className="relative rounded-[26px] border border-white/80 bg-white/55 backdrop-blur-xl overflow-hidden shadow-[0_28px_80px_-62px_rgba(2,6,23,0.55)]">
                <div className="absolute inset-0 opacity-65 bg-[radial-gradient(circle_at_18%_18%,rgba(28,150,191,0.12),transparent_60%),radial-gradient(circle_at_92%_80%,rgba(11,27,58,0.08),transparent_60%)]" />
                <div className="relative p-4">
                  <img
                    src={team}
                    alt="I-Cell team"
                    className="w-full h-[220px] md:h-[260px] object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA (TIGHT) ===== */}
      <section className="pb-12">
        <Container>
          <div ref={cta.ref}>
            <Reveal show={cta.show}>
              <div className="relative rounded-[26px] border border-white/80 bg-white/55 backdrop-blur-xl overflow-hidden shadow-[0_28px_80px_-62px_rgba(2,6,23,0.55)] text-center">
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_18%,rgba(28,150,191,0.12),transparent_60%),radial-gradient(circle_at_92%_80%,rgba(11,27,58,0.08),transparent_60%)]" />
                <div className="relative px-6 py-7 md:py-8">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B1B3A]">
                    Your Success is Our <span className="text-[#1C96BF]">Mission</span>
                  </h3>
                  <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                    Partner with us to explore telecom and digital solutions tailored to
                    drive engagement and revenue growth.
                  </p>

                  <div className="mt-4 flex justify-center">
                    <button className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold bg-[#0B1B3A] text-white shadow-[0_18px_50px_-35px_rgba(11,27,58,0.85)] hover:brightness-[1.05] active:translate-y-[1px] transition">
                      Let’s Talk <span className="ml-2">›</span>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}