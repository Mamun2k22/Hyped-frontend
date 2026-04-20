const brands = [
  {
    id: 1,
    name: "Bullit",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg",
  },
  {
    id: 2,
    name: "Morssinkhof Rymoplast",
    src: "https://dummyimage.com/360x70/efe9e1/0d4ea6&text=Morssinkhof-Rymoplast",
  },
  {
    id: 3,
    name: "Salontopper",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg",
  },
  {
    id: 4,
    name: "Seesing Flex",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg",
  },
  {
    id: 5,
    name: "Graafschap College",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg",
  },
  {
    id: 6,
    name: "Blinqx",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg",
  },
];

export default function Brands() {
  const loopedBrands = [...brands, ...brands];

  return (
    <section className="overflow-hidden bg-[#ece7df] py-10 md:py-14 lg:py-16">
      <div className="mb-6 px-4 sm:px-6 md:mb-8 md:px-10 lg:px-8 xl:px-8">
        <div className="max-w-[520px]">
          <h2 className="text-[24px] font-bold leading-[1.02] text-[#111111] sm:text-[30px] md:text-[40px] lg:text-[57px]">
            <span className="block">These brands</span>
            <span className="block">got hyped.</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex w-max animate-[brandMarquee_26s_linear_infinite] gap-2 pl-4 sm:gap-3 sm:pl-6 md:gap-4 md:pl-10 lg:pl-8 xl:pl-8">
          {loopedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex h-[92px] w-[96px] shrink-0 items-center justify-center rounded-[12px] border border-black/20 bg-transparent px-2 sm:h-[110px] sm:w-[115px] sm:px-3 md:h-[160px] md:w-[170px] md:px-4 lg:h-[272px] lg:w-[274px] lg:px-8"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="w-full h-auto max-h-[60px] object-contain  md:max-h-[95px] lg:max-h-[130px]"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.375rem));
          }
        }
      `}</style>
    </section>
  );
}