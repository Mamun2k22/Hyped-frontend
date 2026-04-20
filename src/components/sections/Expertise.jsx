import { useMemo } from 'react'

export default function ExpertiseSection() {
  const expertiseItems = useMemo(
    () => [
      {
        id: '01',
        eyebrow: 'EXPERTISE',
        title: 'Social\nstrategy',
        subtitle: 'Slimme strategie. Sterke start.',
        description:
          'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die echt impact maken.',
        cta: 'Meer over social strategie',
        cardBg: '#ece9e3',
        stripBg: '#e4b4ef',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        imageRotation: '-3deg',
        textColor: '#101010',
        subTextColor: 'rgba(16,16,16,0.74)',
        buttonBg: 'rgba(255,255,255,0.55)',
        buttonBorder: 'rgba(16,16,16,0.12)',
      },
      {
        id: '02',
        eyebrow: 'EXPERTISE',
        title: 'Content\ncreation',
        subtitle: 'Content die opvalt en raakt.',
        description:
          'We maken content die opvalt, blijft hangen en jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
        cta: 'Meer over content creatie',
        cardBg: '#d89fd7',
        stripBg: '#36df87',
        image:
          'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
        imageRotation: '2deg',
        textColor: '#101010',
        subTextColor: 'rgba(16,16,16,0.78)',
        buttonBg: 'rgba(255,255,255,0.22)',
        buttonBorder: 'rgba(16,16,16,0.12)',
      },
      {
        id: '03',
        eyebrow: 'EXPERTISE',
        title: 'Activation',
        subtitle: 'Zichtbaar waar en wanneer het telt.',
        description:
          'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is, precies waar en wanneer het telt.',
        cta: 'Meer over activatie',
        cardBg: '#ece9e3',
        stripBg: '#ff7e7d',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        imageRotation: '-4deg',
        textColor: '#101010',
        subTextColor: 'rgba(16,16,16,0.74)',
        buttonBg: 'rgba(255,255,255,0.55)',
        buttonBorder: 'rgba(16,16,16,0.12)',
      },
      {
        id: '04',
        eyebrow: 'EXPERTISE',
        title: 'Data',
        subtitle: 'Inzichten die impact maken.',
        description:
          'We duiken in de cijfers om te snappen wat echt werkt. En sturen jouw content scherp bij, zodat elk format slimmer presteert.',
        cta: 'Meer over data',
        cardBg: '#1694ff',
        stripBg: '#dceaf5',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        imageRotation: '4deg',
        textColor: '#ffffff',
        subTextColor: 'rgba(255,255,255,0.84)',
        buttonBg: 'rgba(255,255,255,0.16)',
        buttonBorder: 'rgba(255,255,255,0.24)',
      },
    ],
    []
  )

  return (
    <>
      <style>{`
        .expertise-shell {
          background: #f4f1ea;
        }

        .expertise-stack {
          width: min(1280px, calc(100vw - 32px));
          margin: 0 auto;
          padding: 24px 0 14vh;
        }

        .expertise-sticky-card {
          position: sticky;
          top: 24px;
          margin-bottom: 24px;
        }

        .expertise-card {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 56px);
          border-radius: 28px;
          border: 1px solid rgba(16, 16, 16, 0.1);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.22) inset;
          isolation: isolate;
        }

        .expertise-strip {
          height: 20px;
          width: 100%;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.18fr) minmax(420px, 0.9fr);
          align-items: center;
          gap: 56px;
          padding: 54px 40px 34px;
          min-height: calc(100vh - 76px);
        }

        .expertise-left {
          align-self: start;
          padding: 2px 0 0;
        }

        .expertise-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 23px;
          padding: 0 13px;
          border-radius: 999px;
          border: 1px solid rgba(16, 16, 16, 0.13);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          line-height: 1;
        }

        .expertise-dark .expertise-eyebrow {
          border-color: rgba(255, 255, 255, 0.28);
        }

        .expertise-title {
          margin: 18px 0 0;
          font-size: clamp(58px, 7vw, 82px);
          line-height: 0.9;
          letter-spacing: -0.075em;
          font-weight: 700;
          white-space: pre-line;
          max-width: 5.3ch;
        }

        .expertise-subtitle {
          margin: 18px 0 0;
          font-size: 20px;
          line-height: 1.15;
          font-weight: 700;
        }

        .expertise-description {
          margin: 14px 0 0;
          max-width: 565px;
          font-size: 16px;
          line-height: 1.55;
        }

        .expertise-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          min-height: 44px;
          padding: 0 17px;
          border-radius: 999px;
          border: 1px solid;
          backdrop-filter: blur(8px);
          font-size: 15px;
          font-weight: 600;
          transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
        }

        .expertise-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.06);
        }

        .expertise-right {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
          min-height: 520px;
          padding-right: 18px;
        }

        .expertise-number {
          position: absolute;
          right: 8px;
          top: -4px;
          font-size: clamp(120px, 15vw, 190px);
          line-height: 0.85;
          font-weight: 700;
          letter-spacing: -0.11em;
          color: rgba(16, 16, 16, 0.08);
          user-select: none;
          pointer-events: none;
        }

        .expertise-dark .expertise-number {
          color: rgba(255,255,255,0.18);
        }

        .expertise-shadow {
          position: absolute;
          right: 28px;
          bottom: 42px;
          width: 330px;
          height: 70px;
          border-radius: 999px;
          background: rgba(16,16,16,0.16);
          filter: blur(30px);
          opacity: 0.42;
          transform: rotate(-3deg);
        }

        .expertise-image-wrap {
          position: relative;
          width: min(100%, 318px);
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow: 0 26px 48px rgba(0, 0, 0, 0.12);
          transition: transform 220ms ease;
          transform-origin: center center;
          z-index: 1;
        }

        .expertise-sticky-card:hover .expertise-image-wrap {
          transform: scale(1.015) rotate(var(--card-rotate, 0deg));
        }

        .expertise-image {
          width: 100%;
          height: 292px;
          object-fit: cover;
          display: block;
        }

        .expertise-sticky-card:not(:hover) .expertise-image-wrap {
          transform: rotate(var(--card-rotate, 0deg));
        }

        @media (max-width: 1024px) {
          .expertise-stack {
            width: min(100vw - 24px, 1280px);
          }

          .expertise-card {
            min-height: auto;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            min-height: auto;
            padding: 34px 22px 22px;
          }

          .expertise-right {
            min-height: 300px;
            justify-content: center;
            padding-right: 0;
            padding-bottom: 14px;
          }

          .expertise-number {
            right: 50%;
            transform: translateX(50%);
            top: -6px;
          }

          .expertise-title {
            font-size: clamp(48px, 11vw, 68px);
          }
        }

        @media (max-width: 767px) {
          .expertise-stack {
            width: min(100vw - 16px, 1280px);
            padding-top: 12px;
          }

          .expertise-sticky-card {
            top: 12px;
            margin-bottom: 16px;
          }

          .expertise-card {
            border-radius: 24px;
          }

          .expertise-strip {
            height: 18px;
          }

          .expertise-grid {
            padding: 24px 18px 18px;
            gap: 22px;
          }

          .expertise-title {
            margin-top: 14px;
            font-size: clamp(42px, 15vw, 60px);
            max-width: 6ch;
          }

          .expertise-subtitle {
            margin-top: 16px;
            font-size: 18px;
          }

          .expertise-description {
            font-size: 15px;
            line-height: 1.52;
          }

          .expertise-button {
            margin-top: 24px;
            font-size: 14px;
            min-height: 42px;
          }

          .expertise-right {
            min-height: 220px;
          }

          .expertise-number {
            top: 4px;
            font-size: 92px;
          }

          .expertise-image-wrap {
            width: min(100%, 280px);
            border-radius: 20px;
          }

          .expertise-image {
            height: 220px;
          }

          .expertise-shadow {
            width: 220px;
            right: 50%;
            transform: translateX(50%);
          }
        }
      `}</style>

      <section className="expertise-shell">
        <div className="expertise-stack">
          {expertiseItems.map((item, index) => {
            const dark = item.textColor === '#ffffff'

            return (
              <article
                key={item.id}
                className={`expertise-sticky-card ${dark ? 'expertise-dark' : ''}`}
                style={{ zIndex: expertiseItems.length + index, ['--card-rotate']: item.imageRotation }}
              >
                <div className="expertise-card" style={{ background: item.cardBg }}>
                  <div className="expertise-strip" style={{ background: item.stripBg }} />

                  <div className="expertise-grid">
                    <div className="expertise-left">
                      <span className="expertise-eyebrow" style={{ color: item.textColor }}>
                        {item.eyebrow}
                      </span>

                      <h2 className="expertise-title" style={{ color: item.textColor }}>
                        {item.title}
                      </h2>

                      <h3 className="expertise-subtitle" style={{ color: item.textColor }}>
                        {item.subtitle}
                      </h3>

                      <p className="expertise-description" style={{ color: item.subTextColor }}>
                        {item.description}
                      </p>

                      <a
                        href="#"
                        className="expertise-button"
                        style={{
                          color: item.textColor,
                          background: item.buttonBg,
                          borderColor: item.buttonBorder,
                        }}
                      >
                        <span>{item.cta}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>

                    <div className="expertise-right">
                      <span className="expertise-number">{item.id}</span>
                      <span className="expertise-shadow" aria-hidden="true" />

                      <div className="expertise-image-wrap">
                        <img src={item.image} alt={item.title.replace('\n', ' ')} className="expertise-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
