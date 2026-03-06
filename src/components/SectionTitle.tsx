export default function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {kicker && <div className="text-brand-blue font-semibold tracking-wide">{kicker}</div>}
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-navy">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}