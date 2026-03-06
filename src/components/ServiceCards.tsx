import { motion } from "framer-motion";
import { services } from "../data/content";
import { ShieldCheck, Smartphone, MessageSquareText, Layers3, Gamepad2, Sparkles, Headset } from "lucide-react";

const icons = [
  MessageSquareText,
  Layers3,
  ShieldCheck,
  Smartphone,
  Gamepad2,
  Sparkles,
  Headset,
];

export default function ServiceCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, idx) => {
        const Icon = icons[idx % icons.length];
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            whileHover={{ y: -6 }}
            className="group rounded-[28px] bg-white border border-slate-100 shadow-soft p-6"
          >
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-2xl bg-brand-ice grid place-items-center text-brand-navy group-hover:bg-brand-lime transition">
                <Icon />
              </div>
              <div>
                <div className="font-extrabold text-brand-navy text-lg">{s.title}</div>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-3 rounded-2xl bg-brand-navy text-white font-bold hover:opacity-95 transition"
              >
                Talk to Us
              </a>
            </div>
            
          </motion.div>
        );
      })}
    </div>
  );
}