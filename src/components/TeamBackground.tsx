import team from "../assets/team.png";
import bg from "../assets/contact-hero.png";

export default function TeamBackground() {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] rounded-[28px] overflow-hidden">

      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0B1B3A]/40" />

      {/* Team Image */}
      <img
        src={team}
        alt="team"
        className="absolute bottom-0 left-1/2 -translate-x-1/2
        w-[80%] md:w-[70%] object-contain"
      />

    </div>
  );
}