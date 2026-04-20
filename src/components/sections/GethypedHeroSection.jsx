export default function GethypedHeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#ece7e1] text-[#111111] overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-full flex-col px-7 pb-8 pt-10 md:px-6 lg:px-10 lg:pt-12">
        <div className=" max-w-[1080px]">
          <h1 className="max-w-[980px] text-[44px] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-[58px] md:text-[52px] lg:text-[58px] xl:text-[58px] lg:ml-28 ml-0">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h1>
        </div>

        <div className="mt-14 grid flex-1 grid-cols-1 items-end gap-10 md:mt-20 md:grid-cols-[270px_minmax(0,1fr)_96px] md:gap-12 lg:mt-24 lg:grid-cols-[290px_minmax(0,1fr)_110px] xl:grid-cols-[310px_minmax(0,1fr)_120px]">
          <div className="self-end">
            <div className="overflow-hidden rounded-[20px] bg-[#e7d8c2] shadow-sm">
              <img
                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
                alt="Campaign portrait"
                className="h-[290px] w-full object-cover object-center md:h-[320px] lg:h-[340px]"
              />
            </div>
          </div>

          <div className="flex h-full justify-center">
            <div className="max-w-[450px]">
              <p className="text-[24px] font-semibold leading-[1.14] tracking-[-0.03em] text-[#111111] md:text-[23px] lg:text-[24px]">
                We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <button className="group inline-flex h-[48px] items-center overflow-hidden rounded-[14px] border border-black/45 bg-[#f3efe9] pl-5 pr-[3px] text-[15px] font-semibold text-[#222] shadow-[0_1px_0_rgba(0,0,0,0.14)] transition hover:translate-y-[-1px]">
                  <span>Leer ons kennen</span>
                  <span className="ml-4 inline-flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#111111] text-white transition group-hover:translate-x-[1px]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-start md:justify-end">
            <button
              aria-label="Scroll down"
              className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-black/40 bg-[#f3efe9] text-[#ff5a1f] shadow-[0_1px_0_rgba(0,0,0,0.14)] transition hover:translate-y-[1px]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M12 5V19M12 19L6 13M12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
