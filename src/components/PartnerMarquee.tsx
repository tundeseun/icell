import { partnerLogos } from "../data/content";

export default function PartnerMarquee() {
  // Duplicate list for seamless loop
  const items = [...partnerLogos, ...partnerLogos];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-soft">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="py-5">
        <div className="flex gap-4 items-center whitespace-nowrap animate-[marquee_18s_linear_infinite]">
          {items.map((p, idx) => (
            <div
              key={`${p.name}-${idx}`}
              className="mx-2 px-5 py-3 rounded-2xl bg-brand-ice/60 text-brand-navy font-extrabold border border-slate-100 min-w-[140px] text-center"
              title={p.name}
            >
              {p.text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}