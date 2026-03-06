import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

type Props = { variant?: "overlay" | "solid" };

export default function Navbar({ variant = "overlay" }: Props) {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Close mobile menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Detect scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Our Services" },
      { to: "/partner", label: "Become a Partner" },
      // { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact Us" },
    ],
    []
  );

  const overlayMode = variant === "overlay";
  const onDarkBg = overlayMode && !scrolled; // hero/navy area

  const barClass = onDarkBg
    ? "absolute top-0 left-0 right-0 z-50"
    : "sticky top-0 z-50";

  const shellClass = onDarkBg
    ? "bg-transparent"
    : "bg-white/80 backdrop-blur-xl border-b border-slate-200";

  /* ✅ Logo switch:
     - Navy/hero (dark bg) -> logoDark (your white logo)
     - Grey/white bar -> logoLight
  */
  const logo = onDarkBg ? logoDark : logoLight;

  return (
    <header className={barClass}>
      <div className={shellClass}>
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="I-Cell Multimedia"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div
              className={
                "rounded-full px-2 py-2 flex items-center gap-2 backdrop-blur-xl shadow-soft2 " +
                (onDarkBg
                  ? "bg-white/10 border border-white/20"
                  : "bg-slate-100")
              }
            >
              {items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    "px-5 py-2 rounded-full font-semibold text-sm transition " +
                    (isActive
                      ? "bg-white text-slate-900"
                      : onDarkBg
                      ? "text-white/90 hover:text-white"
                      : "text-slate-700 hover:text-slate-900")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* CTA */}
            <NavLink
              to="/partner"
              className="bg-yellow-400 text-slate-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Get Started
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={
              "lg:hidden h-11 w-11 rounded-xl border flex items-center justify-center " +
              (onDarkBg
                ? "border-white/20 bg-white/10 text-white"
                : "border-slate-200 bg-white text-slate-700")
            }
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200">
          <div className="mx-auto w-full max-w-7xl px-5 py-5 flex flex-col gap-3">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  "px-4 py-3 rounded-xl font-semibold transition " +
                  (isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:bg-slate-50")
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/partner"
              className="mt-2 bg-yellow-400 text-slate-900 text-center font-semibold py-3 rounded-xl"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}