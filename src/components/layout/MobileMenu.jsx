const navLinks = [
  { name: "Expertises", href: "#expertises" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];


const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute left-0 top-full w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
        open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-3 pb-4 pt-2">
        <div className="rounded-[24px] bg-[#e8afe6] px-4 pt-5 pb-6 shadow-lg min-h-[78vh] flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-[14px] bg-white px-6 py-3 text-[20px] font-semibold text-black shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-[14px] bg-black px-4 py-2 text-[15px] font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span>Get Results</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white text-black">
                🔥
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;