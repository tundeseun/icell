import logo from "../assets/logo-dark.png";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Logo + short text */}
        <div className="flex items-center gap-3 max-w-sm">
          <img src={logo} alt="I-Cell Multimedia" className="h-6" />
          <p className="text-xs text-slate-500 hidden md:block">
            Africa’s premier VAS & digital aggregator.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs">
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/partner" className="hover:text-white">Partner</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4 text-xs flex-wrap">
          <span className="flex items-center gap-1">
            <Mail size={14}/> info@icell.com
          </span>

          <span className="flex items-center gap-1">
            <Phone size={14}/> +234 809 047 2355
          </span>

          <span className="flex items-center gap-1 hidden lg:flex">
            <MapPin size={14}/> Lagos, Nigeria
          </span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white"><Linkedin size={16}/></a>
          <a href="#" className="hover:text-white"><Twitter size={16}/></a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} I-Cell Multimedia</span>

          <div className="flex gap-3">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>

    </footer>
  );
}