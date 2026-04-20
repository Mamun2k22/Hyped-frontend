import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Expertises", href: "#expertises" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 20) {
      setShowNav(true);
    } else if (currentScrollY > lastScrollY) {
      // scrolling down
      setShowNav(false);
    } else {
      // scrolling up
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);
  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-transform duration-300 ${
    showNav ? "translate-y-0" : "-translate-y-full"
  }`}>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="shrink-0">
          <img
            src={logo}
            alt="Get Hyped"
            className="h-auto w-[120px] object-contain"
          />
        </a>

        <div className="hidden md:flex">
          <div className="flex items-center gap-5 rounded-[10px] bg-white px-4 py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold text-black transition-opacity duration-200 hover:opacity-60"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex">
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-[10px] bg-[#f3b4f4] px-2 py-1.5 text-[14px] font-semibold text-black"
          >
            <span>Get Results</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[14px]">
              🔥
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="relative flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>

        <MobileMenu open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
};

export default Navbar;