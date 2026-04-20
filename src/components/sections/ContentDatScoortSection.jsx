export default function ContentDatScoortSection() {
  const cards = [
    {
      id: 1,
      title: "Van nul naar vol,\nbinnen 3 weken",
      brand: "Bullit",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      accent: "#ff5a1f",
      pill: "#ffd9cc",
      rotate: "-rotate-[1.2deg]",
    },
    {
      id: 2,
      title: "Zacht in smaak,\nsterk in beeld",
      brand: "Roasta",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      accent: "#2388f5",
      pill: "#d8e9ff",
      rotate: "rotate-[0.45deg]",
    },
    {
      id: 3,
      title: "Content die écht\nsmaakt (en raakt)",
      brand: "Loco",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      accent: "#3bcf95",
      pill: "#d8f5ea",
      rotate: "rotate-[0.8deg]",
    },
  ];

  return (
    <section className="w-full bg-[#ece7df] px-6 py-6 font-['Inter'] text-[#101010] md:px-10 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-x-8 xl:grid-cols-[520px_minmax(0,1fr)] xl:gap-x-10">
       <div className="max-w-[640px] pt-2 lg:pt-6">
<h2 className="text-[62px] font-extrabold leading-[0.90] lg:text-[90px] xl:text-[91px]">
  Content dat scoort.
</h2>

  <p className="mt-6 max-w-[520px] text-[24px] font-[700] leading-[1.08] tracking-[-0.04em] lg:text-[23px] xl:text-[25px]">
    Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
  </p>

  <button className="mt-6 inline-flex items-center rounded-[14px] border border-[#111111] bg-[#f5efe9] p-[2px] text-[#111111] transition hover:-translate-y-0.5">
    <span className="px-4 py-3 text-[15px] font-semibold">Bekijk al ons werk</span>
    <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#111111] text-xl font-bold text-white">
      →
    </span>
  </button>
</div>

          <div className="hidden lg:block" />

          <div className="lg:col-span-2 w-full overflow-x-auto pb-3 lg:overflow-visible">
            <div className="flex min-w-max items-start gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
              {cards.map((card, index) => (
                <article
                  key={card.id}
                  className={`group relative h-[360px] w-[220px] shrink-0 overflow-hidden rounded-[30px] bg-white ${card.rotate} sm:h-[410px] sm:w-[248px] lg:h-[420px] lg:w-[338px] xl:h-[430px] xl:w-[350px] ${
                    index === 0
                      ? "lg:mt-0"
                      : index === 1
                      ? "lg:mt-[74px]"
                      : "lg:mt-[8px]"
                  }`}
                  style={{ border: `6px solid ${card.accent}` }}
                >
                  <img
                    src={card.image}
                    alt={card.title.replace(/\n/g, " ")}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/8" />

                  <div
                    className={`absolute rounded-[24px] p-5 text-white sm:p-6 ${
                      index === 0
                        ? "bottom-[12px] left-[12px] right-[12px]"
                        : index === 1
                        ? "bottom-[12px] left-[12px] right-[18px]"
                        : "bottom-[12px] left-[12px] right-[12px]"
                    }`}
                    style={{ backgroundColor: card.accent }}
                  >
                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[20px] font-bold text-[#111111] shadow-sm transition duration-300 group-hover:rotate-45">
                      ↗
                    </div>

                    <h3
                      className={`whitespace-pre-line pr-12 font-black leading-[0.95] tracking-[-0.055em] ${
                        index === 0
                          ? "max-w-[185px] text-[28px] sm:text-[31px]"
                          : index === 1
                          ? "max-w-[165px] text-[27px] sm:text-[30px]"
                          : "max-w-[190px] text-[28px] sm:text-[31px]"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <span
                      className="mt-4 inline-flex rounded-[10px] px-3 py-1.5 text-[13px] font-semibold text-[#111111]"
                      style={{ backgroundColor: card.pill }}
                    >
                      {card.brand}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
