import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";

const navItems = ["Expertises", "Work", "About", "Contact"];

// Reusable Components
const PillButton = ({ children, href = "#" }) => (
  <a
    href={href}
    className="inline-flex h-[44px] items-center justify-center rounded-xl bg-white px-6 text-[15px] font-bold tracking-tight text-[#141414] transition-all duration-300 hover:bg-[#141414] hover:text-white hover:-translate-y-1"
  >
    {children}
  </a>
);

const IconCircle = ({ href = "#", children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[#171717] transition-all duration-300 hover:bg-[#141414] hover:text-white hover:-translate-y-1 shadow-sm"
  >
    {children}
  </a>
);

export default function Footer() {
  const footerRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  // Custom Cursor Logic for the "Floating Sticker"
  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
    };
    const handleLeave = () => setCursor((prev) => ({ ...prev, visible: false }));

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden bg-[#f3eee7] font-sans selection:bg-[#ff5b22] selection:text-white">
      <div className="relative mx-auto min-h-[850px] max-w-[1440px] px-6 pt-24 pb-12">
        
        {/* --- TOP SECTION: HERO TEXT --- */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-[clamp(60px,10vw,120px)] font-[900] leading-[0.85] tracking-[-0.06em] text-[#111111]">
            Let’s Get Hyped!
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:info@gethyped.nl" className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-[#efe9e0] py-1 pl-6 pr-1 transition-transform hover:-translate-y-1">
              <span className="font-bold text-[#111111]">Mail ons direct</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-white">
                <span className="text-xl">✉</span>
              </div>
            </a>

            <a href="#contact" className="group flex items-center gap-4 rounded-2xl bg-[#ff5b22] py-1 pl-6 pr-1 transition-transform hover:-translate-y-1 shadow-lg shadow-[#ff5b22]/20">
              <span className="font-bold text-white">Get Results</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#ff5b22]">
                <span className="text-xl font-bold">➔</span>
              </div>
            </a>
          </div>
        </div>

        {/* --- MIDDLE SECTION: FLOATING PINK BADGE --- */}
        <div className="absolute right-12 top-[35%] z-20 hidden md:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#e8a7ea] shadow-xl">
            <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite]">
              <path id="circlePath" d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="transparent" />
              <text className="text-[9.5px] font-bold uppercase tracking-[0.1em] fill-[#111111]">
                <textPath href="#circlePath">Get Results • Get Hyped • Get Noticed • </textPath>
              </text>
            </svg>
            <span className="text-4xl font-black italic tracking-tighter">GH</span>
          </div>
        </div>

        {/* --- BOTTOM SECTION: THE SLANT --- */}
        <div 
          className="absolute bottom-0 right-0 h-[400px] w-full bg-[#ddd6cb] z-0" 
          style={{ clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 100%)" }}
        />

        {/* --- FOOTER NAV & CONTENT --- */}
        <div className="relative z-10 mt-64 grid grid-cols-1 gap-12 lg:grid-cols-12 items-end">
          
          {/* Logo Sticker Area */}
          <div className="lg:col-span-5">
            <div className="inline-block transform -rotate-2 bg-black p-4 rounded-[20px] shadow-2xl border-4 border-white">
               <h1 className="text-white text-6xl md:text-8xl font-[1000] italic tracking-tighter leading-none skew-x-[-10deg]">
                 GETHYPED
               </h1>
            </div>
          </div>

          {/* Navigation & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <nav className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <PillButton key={item} href={`#${item.toLowerCase()}`}>{item}</PillButton>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <span className="font-bold text-lg uppercase tracking-tight">Follow us</span>
              <div className="flex gap-3">
                <IconCircle><FaLinkedinIn /></IconCircle>
                <IconCircle><FaTiktok /></IconCircle>
                <IconCircle><FaInstagram /></IconCircle>
                <IconCircle><FaYoutube /></IconCircle>
              </div>
            </div>

            <div className="flex gap-8 text-sm font-medium opacity-50">
              <span>© 2026 Get Hyped</span>
              <span>Design by Dylan</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h4 className="font-black text-lg mb-2">Contact</h4>
              <p className="font-medium text-[#111111]/80">info@gethyped.nl<br/>+31 6 1533 7496</p>
            </div>
            <div>
              <h4 className="font-black text-lg mb-2">Adres</h4>
              <p className="font-medium text-[#111111]/80 italic">Beltrumsestraat 6,<br/>7141 AL Groenlo</p>
            </div>
            <a href="#" className="text-xs font-bold uppercase opacity-40 hover:opacity-100 transition-opacity">Privacyvoorwaarden</a>
          </div>
        </div>

        {/* --- MOUSE FOLLOW STICKER (Optional) --- */}
        {cursor.visible && (
          <div 
            className="pointer-events-none absolute z-50 transition-transform duration-75 ease-out mix-blend-difference"
            style={{ left: cursor.x, top: cursor.y, transform: 'translate(-50%, -50%) rotate(-5deg)' }}
          >
            <div className="bg-white px-4 py-1 border-2 border-black rounded-lg">
               <span className="font-black text-black">HYPED!</span>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}