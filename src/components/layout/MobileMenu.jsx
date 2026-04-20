const navLinks = [
  { name: "Expertises", href: "#expertises" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute left-0 top-full w-full overflow-hidden bg-white transition-all duration-300 ease-in-out md:hidden ${
        open ? "max-h-[400px] border-t border-black/10" : "max-h-0"
      }`}
    >
      <div className="flex flex-col px-6 py-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="border-b border-black/10 py-4 text-[15px] font-medium text-black"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;