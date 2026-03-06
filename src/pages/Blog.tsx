import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function Blog() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          kicker="Blog"
          title="Insights & Updates"
          subtitle="We’ll publish updates on telecom aggregation, billing, VAS and digital transformation here."
        />
        <div className="mt-10 rounded-[28px] bg-brand-ice/50 border border-slate-100 p-7 text-slate-700">
          Coming soon.
        </div>
      </Container>
    </section>
  );
}