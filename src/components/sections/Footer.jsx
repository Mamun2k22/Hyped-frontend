import React from "react";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const navItems = ["Expertises", "Work", "About", "Contact"];

const PillButton = ({ children, href = "#", mobile = false }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-xl bg-white font-bold tracking-tight text-[#141414] ${
      mobile
        ? "h-[34px] px-3 text-[13px]"
        : "h-[44px] px-6 text-[15px]"
    }`}
  >
    {children}
  </a>
);

const IconCircle = ({ href = "#", children, mobile = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`flex items-center justify-center rounded-full bg-white text-[#171717] shadow-sm ${
      mobile ? "h-[36px] w-[36px] text-[14px]" : "h-[44px] w-[44px]"
    }`}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#f3eee7] font-sans">
      {/* MOBILE */}
      <div className="px-6 pb-10 pt-8 md:hidden">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Get Hyped"
            className="w-[240px] object-contain"
          />

          <a
            href="#contact"
            className="mt-6 flex items-center gap-2 rounded-[14px] bg-[#ff5b22] px-4 py-2 text-[14px] font-bold text-white shadow-lg"
          >
            <span>Get Hyped! Neem contact op</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white text-[#ff5b22]">
              🔥
            </span>
          </a>

          <nav className="mt-5 flex flex-wrap justify-center gap-2">
            {navItems.map((item) => (
              <PillButton
                key={item}
                href={`#${item.toLowerCase()}`}
                mobile
              >
                {item}
              </PillButton>
            ))}
          </nav>

          <div className="mt-5 flex items-center justify-center gap-3">
            <IconCircle mobile><FaLinkedinIn /></IconCircle>
            <IconCircle mobile><FaTiktok /></IconCircle>
            <IconCircle mobile><FaInstagram /></IconCircle>
            <IconCircle mobile><FaYoutube /></IconCircle>
          </div>

          <div className="mt-6 space-y-3 text-center text-[14px] font-medium text-[#111111]/80">
            <p>
              info@gethyped.nl
              <br />
              +31 6 1533 7496
            </p>

            <p>
              Beltrumsestraat 6,
              <br />
              7141 AL Groenlo
            </p>
          </div>

          <a
            href="#"
            className="mt-4 text-[12px] font-bold text-[#111111]/35"
          >
            Privacyvoorwaarden
          </a>

          <div className="mt-4 space-y-1 text-[12px] font-medium text-[#111111]/45">
            <p>© 2025 Get Hyped</p>
            <p>© Design by Dylan</p>
          </div>
        </div>
      </div>

      {/* DESKTOP - UNCHANGED */}
      <div className="hidden md:block">
        <div className="relative mx-auto max-w-[1440px] px-6 pt-24">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-[clamp(60px,10vw,80px)] font-[900] leading-[0.85] text-[#111111]">
              Let’s Get Hyped!
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@gethyped.nl"
                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-[#efe9e0] py-1 pl-6 pr-1"
              >
                <span className="font-bold text-[#111111]">
                  Mail ons direct
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-white">
                  ✉
                </div>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-4 rounded-2xl bg-[#ff5b22] py-1 pl-6 pr-1 shadow-lg shadow-[#ff5b22]/20"
              >
                <span className="font-bold text-white">Get Results</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#ff5b22]">
                  ➔
                </div>
              </a>
            </div>
          </div>

          <div className="absolute right-[52px] top-[44%] z-20 hidden md:block">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#e8a7ea] shadow-xl">
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite]">
                <path
                  id="circlePath"
                  d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                  fill="transparent"
                />
                <text className="fill-[#111111] text-[9.5px] font-bold uppercase tracking-[0.1em]">
                  <textPath href="#circlePath">
                    Get Results • Get Hyped • Get Noticed •
                  </textPath>
                </text>
              </svg>
              <span className="text-4xl font-black italic tracking-tighter">
                GH
              </span>
            </div>
          </div>

          <div
            className="absolute bottom-0 right-0 z-0 h-[400px] w-full bg-[#ddd6cb] "
            style={{
              
              clipPath: "polygon(0 82%, 100% 0, 100% 100%, 0 100%)",
            }}
          />








          <div className="relative z-10 mt-64 grid grid-cols-1 items-end gap-12 lg:grid-cols-12 pb-4">
            <div className="lg:col-span-5">
              <img
                src={logo}
                alt="Get Hyped"
                className="w-[170px] rotate-[-2deg] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] lg:w-[270px]"
              />
            </div>

            <div className="flex flex-col gap-10 lg:col-span-4">
              <nav className="flex flex-wrap gap-3">
                {navItems.map((item) => (
                  <PillButton key={item} href={`#${item.toLowerCase()}`}>
                    {item}
                  </PillButton>
                ))}
              </nav>

              <div className="flex items-center gap-6">
                <span className="text-lg font-bold uppercase tracking-tight">
                  Follow us
                </span>
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

            <div className="space-y-8 lg:col-span-3">
              <div>
                <h4 className="mb-2 text-lg font-black">Contact</h4>
                <p className="font-medium text-[#111111]/80">
                  info@gethyped.nl <br />
                  +31 6 1533 7496
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-black">Adres</h4>
                <p className="font-medium italic text-[#111111]/80">
                  Beltrumsestraat 6,
                  <br />
                  7141 AL Groenlo
                </p>
              </div>

              <a
                href="#"
                className="text-xs font-bold uppercase opacity-40"
              >
                Privacyvoorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}