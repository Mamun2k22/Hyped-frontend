const brands = [
  {
    id: 1,
    name: "Bullit",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg",
    width: "w-[200px]",
  },
  {
    id: 2,
    name: "Morssinkhof Rymoplast",
    src: "https://dummyimage.com/360x70/efe9e1/0d4ea6&text=Morssinkhof-Rymoplast",
    width: "w-[245px]",
  },
  {
    id: 3,
    name: "Salontopper",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg",
    width: "w-[220px]",
  },
  {
    id: 4,
    name: "Seesing Flex",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg",
    width: "w-[210px]",
  },
  {
    id: 5,
    name: "Graafschap College",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg",
    width: "w-[230px]",
  },
  {
    id: 6,
    name: "Blinqx",
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg",
    width: "w-[150px]",
  },
];

export default function Brands() {
  const loopedBrands = [...brands, ...brands];

  return (
    <section className="overflow-hidden bg-[#ece7df] py-10 md:py-14 lg:py-16">
      <div className="mb-8 px-6 md:px-10 lg:px-8 xl:px-8">
        <div className="max-w-[520px]">
          <h2 className="text-[40px] font-bold leading-[1]  text-[#111111] lg:text-[57px]">
            <span className="block">These brands</span>
            <span className="block">got hyped.</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex w-max animate-[brandMarquee_26s_linear_infinite] gap-3 pl-6 md:gap-4 md:pl-10 lg:pl-8 xl:pl-8">
          {loopedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex h-[272px] w-[274px] shrink-0 items-center justify-center rounded-[14px] border border-black/20 bg-transparent px-8"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className={`${brand.width} w-full h-auto max-h-[130px] object-contain`}
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
