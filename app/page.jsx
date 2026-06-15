import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.99 31.99"
      className="w-6 h-6 flex-shrink-0"
    >
      <g data-name="Capa 2">
        <g data-name="Capa 1">
          <path
            d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z"
            style={{ fill: "#ea4335" }}
          />
          <path
            d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.54 3.54 0 0 0 1.5-4.79 3.62 3.62 0 0 0-1.5-1.5z"
            style={{ fill: "#fbbc04" }}
          />
          <path
            d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z"
            style={{ fill: "#4285f4" }}
          />
          <path
            d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
            style={{ fill: "#34a853" }}
          />
        </g>
      </g>
    </svg>
  );
}

function DownloadButtons({ centered }) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-3 md:flex-wrap reveal d3 max-w-[280px] md:max-w-none mx-auto ${
        centered ? "md:justify-center md:mx-auto" : "md:mx-0"
      }`}
    >
      <a
        href="#"
        className="dl-btn dl-btn-dark justify-center md:justify-start"
      >
        <AppleIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-normal opacity-70">
            Atsisiųsti iš
          </span>
          <span>App Store</span>
        </span>
      </a>
      <a
        href="#"
        className="dl-btn dl-btn-outline justify-center md:justify-start"
      >
        <PlayIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-normal opacity-70">
            Atsisiųsti iš
          </span>
          <span>Google Play</span>
        </span>
      </a>
    </div>
  );
}

function FeatNum({ children }) {
  return (
    <div className="font-mono text-[11px] font-medium text-ac tracking-[.12em] mb-[14px] bg-ac/10 border border-ac/20 rounded-md px-[10px] py-[3px] inline-block">
      {children}
    </div>
  );
}

function SFIcon({ name, className = "w-4 h-4" }) {
  return (
    <span
      className={`block ${className}`}
      style={{
        maskImage: `url(/icons/${name}.svg)`,
        WebkitMaskImage: `url(/icons/${name}.svg)`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        backgroundColor: "currentColor",
      }}
    />
  );
}

function Bullet({ color, icon, children }) {
  const colors = {
    g: "bg-gr/15 text-gr",
    b: "bg-ac/15 text-ac",
    y: "bg-yw/15 text-yw",
    r: "bg-rd/15 text-rd",
  };
  return (
    <div className="flex items-start gap-[10px] text-sm text-mu">
      <div
        className={`w-5 h-5 min-w-[20px] rounded-md flex items-center justify-center text-[10px] font-bold mt-0.5 ${colors[color]}`}
      >
        {icon}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <ScrollReveal />

      {/* NAV */}
      <nav className="sticky top-0 z-[200] flex items-center justify-between px-5 md:px-[60px] h-16 bg-bg/90 backdrop-blur-[20px] border-b border-bd">
        <a
          href="#"
          className="flex items-center gap-[9px] text-[17px] font-extrabold tracking-[-.03em] text-tx no-underline"
        >
          <Image
            src="/icon.webp"
            alt="MyMouth"
            width={26}
            height={26}
            className="rounded-[7px]"
          />
          MyMouth
        </a>
        <ul className="hidden md:flex gap-7 list-none">
          {[
            ["Kaip veikia", "#kaip-veikia"],
            ["Funkcijos", "#funkcijos"],
            ["Pacientams", "#pacientams"],
            ["Gydytojams", "#gydytojams"],
            ["DUK", "#faq"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[13px] text-mu hover:text-tx no-underline font-medium transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-[10px] items-center">
          <button className="btn-cta">Atsisiųsti</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="max-w-[1140px] mx-auto px-5 md:px-[60px] pt-10 md:pt-0 pb-8 md:pb-0 md:min-h-[calc(100vh-4rem)] grid md:grid-cols-[1fr_520px] gap-8 md:gap-[60px] items-center">
        <div className="text-center md:text-left order-2 md:order-none md:col-start-1">
          <h1 className="reveal d1 font-extrabold tracking-[-.04em] leading-[1.06] mb-4 md:mb-5 text-[32px] sm:text-[44px] md:text-[62px]">
            Suprasi savo gijimą
            <br />
            <em className="not-italic text-grad-tri">kiekvieną dieną</em>
          </h1>
          <p className="reveal d2 text-[15px] md:text-[17px] text-mu max-w-[480px] mx-auto md:mx-0 leading-[1.6] md:leading-[1.65] mb-6 md:mb-8 font-normal">
            Aiškūs nurodymai, mažiau klaidų, daugiau ramybės. Programėlė, kuri
            lydi per visą gijimo procesą po burnos chirurgijos procedurų.
          </p>
          <DownloadButtons />
          <div className="reveal d4 text-xs text-mu2 mt-4 text-center md:text-left">
            Saugūs duomenys. Sukurta bendradarbiaujant su odontologais ir burnos
            chirurgais.
          </div>
        </div>

        <div className="reveal d2 relative mx-auto md:mx-0 w-[280px] md:w-[460px] hero-radial order-1 md:order-none md:col-start-2">
          {/* Phone 1 — in-flow, drives container height */}
          <div className="iphone iphone-glow relative z-[2] w-[195px] md:w-[300px]">
            <div className="px-[14px] md:px-5 pt-4 md:pt-6 pb-[18px] md:pb-7">
              <div className="flex justify-center mb-2 md:mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ac flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5 md:w-6 md:h-6">
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center text-[12px] md:text-[15px] font-extrabold mb-3 md:mb-4 leading-tight tracking-[-.02em]">
                Gijimas juda į priekį!
              </div>
              <div className="bg-white/[.06] border border-white/[.10] rounded-[10px] px-3 md:px-4 py-2.5 md:py-3 mb-2 md:mb-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-[11px] md:text-[14px] flex-shrink-0 mt-0.5">💡</span>
                  <div>
                    <div className="text-[9px] md:text-[12px] font-bold text-tx leading-[1.4] mb-0.5">
                      Patinimas 3–ią dieną — normalu.
                    </div>
                    <div className="text-[9px] md:text-[11px] text-mu leading-[1.5]">
                      Didžiausias būna 2–3 dieną ir palaipsniui mažėja. Šaltas kompresas padės.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/[.04] border border-white/[.06] rounded-[10px] overflow-hidden">
                {[
                  ["😣", "Skausmas", "Vidutiniškai", "bg-yw/20 text-yw"],
                  ["🤢", "Patinimas", "Labai", "bg-rd/20 text-[#ff8899]"],
                  ["🩸", "Kraujavimas", "Visai ne", "bg-gr/20 text-gr"],
                  ["😊", "Savijauta", "Nebloga", "bg-ac/20 text-ac"],
                ].map(([ico, label, val, cls], i, arr) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-[7px] md:py-[10px] ${
                      i < arr.length - 1 ? "border-b border-white/[.05]" : ""
                    }`}
                  >
                    <span className="text-[11px] md:text-[14px] flex-shrink-0">{ico}</span>
                    <span className="flex-1 text-[9px] md:text-[12px] text-tx font-medium">
                      {label}
                    </span>
                    <span
                      className={`text-[8px] md:text-[11px] font-semibold px-[7px] md:px-[9px] py-[3px] md:py-1 rounded-full ${cls}`}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone 2 — always absolute, overlaps phone1 from bottom-right */}
          <div className="iphone absolute right-0 bottom-0 md:bottom-4 w-[130px] md:w-[200px] opacity-55 z-[1]">
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="flex items-center justify-center gap-1 text-[9px] font-bold tracking-[.08em] uppercase text-ac mb-1.5">
                <SFIcon name="bell.fill" className="w-[9px] h-[9px]" />
                <span>PRIMINIMAI</span>
              </div>
              <div className="bg-card border border-ac/20 rounded-xl px-3 py-[10px] mb-2">
                <div className="text-[10px] text-mu font-medium mb-0.5">
                  Vizitas
                </div>
                <div className="text-[11px] text-tx leading-[1.4]">
                  Laikas užsiregistruoti
                </div>
                <div className="text-[10px] text-mu mt-1">
                  Gijimo galvutės uždėjimas
                </div>
              </div>
              <div className="bg-card border border-ac/20 rounded-xl px-3 py-[10px]">
                <div className="font-mono text-[10px] text-ac font-medium">
                  20:00
                </div>
                <div className="text-[11px] text-tx mt-0.5 leading-[1.4]">
                  Laikas išgerti antibiotikus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 md:h-20" />

      {/* 2. PROBLEM */}
      <div
        id="kaip-veikia"
        className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center"
      >
        <div className="reveal">
          <FeatNum>1. PROBLEMA</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Daug klausimų
            <br />
            po implantacijos?
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Nerimas, spėliojimas ir klaidos gali sulėtinti gijimą. Dauguma
            pacientų nežino, kas normalu.
          </p>
        </div>
        <div className="reveal d1 flex justify-center items-center relative feat-radial">
          <div className="illus-top relative bg-bg3 border border-bd2 rounded-[20px] p-7 overflow-hidden z-[1] w-full min-h-[320px] flex flex-col gap-3">
            <div className="text-[11px] font-bold text-mu tracking-[.08em] uppercase mb-1">
              Klausimai po operacijos
            </div>
            {[
              "Ar normalu, kad skauda?",
              "Koks sekantis etapas?",
              "Kas bus toliau?",
            ].map((q) => (
              <div
                key={q}
                className="bg-yw/10 border border-yw/20 rounded-[14px] rounded-bl-[4px] px-4 py-3 max-w-[80%]"
              >
                <div className="text-sm text-yw">{q}</div>
              </div>
            ))}
            <div className="mt-2 p-[14px] bg-card rounded-xl flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[10px] bg-yw/15 flex items-center justify-center text-lg flex-shrink-0">
                😟
              </div>
              <div>
                <div className="text-xs font-semibold">
                  Nerimas, spėliojimas
                </div>
                <div className="text-[11px] text-mu">
                  ir klaidos gali sulėtinti gijimą
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* 3. SOLUTION */}
      <div
        id="funkcijos"
        className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center"
      >
        <div className="reveal d1 order-2 md:order-1 flex justify-center items-center relative feat-radial">
          <div className="iphone iphone-glow w-[240px]">
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="text-[9px] font-bold tracking-[.08em] uppercase text-ac mb-1.5 text-center">
                KAS ŠIANDIEN SVARBU
              </div>
              <div className="bg-gr/10 border border-gr/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-gr">
                ✓ Vengti fizinio krūvio
              </div>
              <div className="bg-gr/10 border border-gr/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-gr">
                ✓ Gali jaustis tinimas — normalu
              </div>
              <div className="bg-rd/10 border border-rd/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-[#ff8899]">
                ✗ Neskalaukite burnos
              </div>
              <div className="h-2.5" />
              <div className="flex items-center gap-2 py-2 border-b border-white/[.05]">
                <div className="w-7 h-7 rounded-lg bg-yw/15 text-yw flex items-center justify-center flex-shrink-0">
                  <SFIcon name="bell.fill" className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold leading-tight">
                    Priminimas
                  </div>
                  <div className="text-[9px] text-mu">20:00 · Antibiotikai</div>
                </div>
                <div className="text-[11px] text-mu2">○</div>
              </div>
              <div className="flex items-center gap-2 py-2">
                <div className="w-7 h-7 rounded-lg bg-gr/15 text-gr flex items-center justify-center flex-shrink-0">
                  <SFIcon name="heart.fill" className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold leading-tight">
                    Stebėk
                  </div>
                  <div className="text-[9px] text-mu">
                    Žinok, kada viskas normalu
                  </div>
                </div>
                <div className="text-[11px] text-mu2">›</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal order-1 md:order-2">
          <FeatNum>2. SPRENDIMAS</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Aiškumas, kuris
            <br />
            lydi kiekvieną dieną
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Gauk aiškius atsakymus ir tiksliai žinok, ką daryti. Kasdieniai
            nurodymai pagal tikslų gijimo etapą.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="g" icon="✓">
              <strong className="text-tx">Kas šiandien svarbu</strong> — vengti
              kramtymo operuota puse ir fizinio krūvio
            </Bullet>
            <Bullet color="g" icon="✓">
              <strong className="text-tx">Kas normalu</strong> — tinimas gali
              būti didžiausias šiandien
            </Bullet>
            <Bullet color="g" icon="✓">
              <strong className="text-tx">Kada kreiptis</strong> — aiškūs
              signalai, kada reikia skambinti gydytojui
            </Bullet>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* 4. NOTIFICATIONS */}
      <div className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal">
          <FeatNum>3. PRANEŠIMAI</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Primename, kai
            <br />
            to labiausiai reikia
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Laiku gausi priminimus apie vaistus, higieną ir svarbius veiksmus.
            Primename tai, kas labiausiai pasimirsta.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="b" icon={<SFIcon name="pills.fill" className="w-3 h-3" />}>
              <strong className="text-tx">Antibiotikų priminimai</strong> — du
              kartus per dieną, tiksliu laiku
            </Bullet>
            <Bullet color="y" icon={<SFIcon name="clock.fill" className="w-3 h-3" />}>
              <strong className="text-tx">Higienos priminimai</strong> — kada
              pradėti skalauti, kaip valyti
            </Bullet>
            <Bullet color="g" icon={<SFIcon name="calendar" className="w-3 h-3" />}>
              <strong className="text-tx">Vizitų priminimai</strong> — gijimo
              galvutės uždėjimas, karūnėlė
            </Bullet>
          </div>
        </div>
        <div className="reveal d1 flex justify-center items-center relative feat-radial">
          <div className="iphone w-[230px] relative z-[1]">
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="flex items-center justify-center gap-1 text-[9px] font-bold tracking-[.08em] uppercase text-ac mb-1.5">
                <SFIcon name="bell.fill" className="w-[9px] h-[9px]" />
                <span>PRIMINIMAI</span>
              </div>
              <div className="bg-card border border-ac/20 rounded-xl px-3 py-[10px] mb-2">
                <div className="font-mono text-[28px] font-medium text-tx tracking-[-.02em] my-1">
                  20:00
                </div>
                <div className="text-[11px] font-semibold text-tx mb-0.5">
                  Priminimas
                </div>
                <div className="text-[11px] text-mu">
                  Laikas išgerti antibiotikus
                </div>
                <div className="text-[10px] text-mu mt-1.5">
                  Svarbu vartoti reguliariai, net jei jautiesi gerai
                </div>
              </div>
              <div className="bg-card border border-gr/20 rounded-xl px-3 py-[10px]">
                <div className="text-[10px] text-mu mb-0.5">Vizitas</div>
                <div className="text-[11px] font-semibold text-tx mb-0.5">
                  Laikas užsiregistruoti
                </div>
                <div className="text-[11px] text-mu">
                  Gijimo galvutės uždėjimas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* 4. PEACE */}
      <div className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal">
          <FeatNum>4. RAMYBĖ</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Mažiau streso.
            <br />
            Daugiau pasitikėjimo.
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Žinodamas, kad viskas eina teisinga linkme, jauti ramybę kiekvieną
            dieną. Nespėlioji — žinai.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="g" icon="✓">
              <strong className="text-tx">Aiškus progresas</strong> — matai kiek
              dienų praėjo ir kas laukia toliau
            </Bullet>
            <Bullet color="g" icon="✓">
              <strong className="text-tx">Mažiau klaidų</strong> — padeda
              išvengti pasikartojančių komplikacijų
            </Bullet>
            <Bullet color="g" icon="✓">
              <strong className="text-tx">Gydytojas šalia</strong> — jo
              rekomendacijos tavo telefone kiekvieną dieną
            </Bullet>
          </div>
        </div>
        <div className="reveal d1 flex justify-center items-center relative feat-radial">
          <div className="illus-top relative bg-bg3 border border-bd2 rounded-[20px] p-7 overflow-hidden z-[1] w-full min-h-[300px] flex flex-col justify-center gap-5">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center w-[72px] h-[72px] rounded-2xl bg-ac/10 border border-ac/20 flex-shrink-0">
                <div className="text-[28px] font-extrabold text-ac leading-none tracking-[-.03em]">
                  42
                </div>
                <div className="text-[9px] text-ac/70 mt-0.5 font-medium">
                  diena
                </div>
              </div>
              <div>
                <div className="text-[11px] text-mu mb-0.5">Gijimo etapas</div>
                <div className="text-[15px] font-bold tracking-[-.02em] leading-tight">
                  Integracijos
                  <br />
                  fazė
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="bg-ac/8 border border-ac/15 rounded-[12px] px-4 py-3">
                <div className="text-[10px] text-ac font-semibold mb-0.5 uppercase tracking-[.06em]">
                  Kas vyksta dabar?
                </div>
                <div className="text-[13px] text-tx">
                  Implantas integruojasi į kaulą.
                </div>
              </div>
              <div className="bg-gr/8 border border-gr/15 rounded-[12px] px-4 py-3">
                <div className="text-[10px] text-gr font-semibold mb-0.5 uppercase tracking-[.06em]">
                  Kas normalu?
                </div>
                <div className="text-[13px] text-tx">Jokio diskomforto.</div>
              </div>
              <div className="bg-yw/8 border border-yw/15 rounded-[12px] px-4 py-3">
                <div className="text-[10px] text-yw font-semibold mb-0.5 uppercase tracking-[.06em]">
                  Kas laukia toliau?
                </div>
                <div className="text-[13px] text-tx">
                  Protezavimo etapas po 2 mėnesių.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* 5. DOCUMENTS */}
      <div className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal d1 order-2 md:order-1 flex justify-center items-center relative feat-radial">
          <div className="iphone iphone-glow w-[250px]">
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="text-[11px] font-bold text-tx mb-3 text-center">
                Mano dokumentai
              </div>

              {[
                ["checkmark.seal.text.page.fill", "text-ac", "Implanto pasas", "Straumann · 14.05.2024", "bg-ac/15"],
                ["waveform.path.ecg.rectangle.fill", "text-rd", "Rentgeno nuotraukos", "3 failai", "bg-rd/10"],
                ["text.document.fill", "text-gr", "Gydymo informacija", "Operacijos ir vizitų istorija", "bg-gr/15"],
              ].map(([ico, tc, label, sub, bg], i, arr) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 py-2 ${
                    i < arr.length - 1 ? "border-b border-white/[.05]" : ""
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg ${bg} ${tc} flex items-center justify-center flex-shrink-0`}
                  >
                    <SFIcon name={ico} className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold text-tx leading-tight">
                      {label}
                    </div>
                    <div className="text-[9px] text-mu">{sub}</div>
                  </div>
                  <div className="text-[11px] text-mu2">›</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal order-1 md:order-2">
          <FeatNum>5. DOKUMENTAI</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Viskas vienoje
            <br />
            vietoje
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Implanto pasas, rentgeno nuotraukos ir visa gydymo informacija —
            informacija, kuri nepasimeta einant metams.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="b" icon={<SFIcon name="checkmark.seal.text.page.fill" className="w-3 h-3" />}>
              <strong className="text-tx">Implanto pasą saugome</strong> —
              gamintojas, modelis, serijos numeris
            </Bullet>
            <Bullet color="r" icon={<SFIcon name="waveform.path.ecg.rectangle.fill" className="w-3 h-3" />}>
              <strong className="text-tx">Rentgeno nuotraukos</strong> — visada
              pasiekiamos
            </Bullet>
            <Bullet color="g" icon={<SFIcon name="text.document.fill" className="w-3 h-3" />}>
              <strong className="text-tx">Gydymo informacija</strong> —
              operacijų ir vizitų istorija
            </Bullet>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* AUDIENCE */}
      <div
        id="pacientams"
        className="max-w-[1140px] mx-auto py-16 md:py-[100px] px-5 md:px-[60px] pb-20"
      >
        <div className="text-center mb-12">
          <h2 className="reveal text-[28px] md:text-[44px] font-extrabold tracking-[-.03em] mb-[14px]">
            Tu ir tavo gydytojas –<br />
            viena komanda
          </h2>
          <p className="reveal text-base text-mu max-w-[540px] mx-auto">
            Programėlė, kuri kiekvienam pacientui aiškiai parodo, kurioje gydymo
            stadijoje jis yra, kas vyksta dabar ir kas laukia toliau.
          </p>
        </div>
        <div id="gydytojams" className="reveal grid md:grid-cols-2 gap-5">
          <div className="aud-top relative bg-bg3 border border-bd rounded-[20px] p-8 overflow-hidden">
            <SFIcon name="person.fill" className="w-8 h-8 mb-3.5 text-mu" />
            <div className="text-xl font-bold mb-3 tracking-[-.02em]">
              Pacientams
            </div>
            <div className="flex flex-col gap-[9px]">
              {[
                ["Mažiau nerimo", "ir spėliojimo kiekvieną dieną"],
                ["Aiškūs nurodymai", "— kas normalu, ko vengti"],
                ["Mažiau klaidų", "— higiena, kramtymas, krūvis"],
                [
                  "Saugome implanto pasą",
                  "— informacija, kuri nepasimeta einant metams",
                ],
                ["Visa informacija", "vienoje vietoje visada"],
              ].map(([bold, rest], i) => (
                <div
                  key={i}
                  className="flex items-start gap-[9px] text-sm text-mu leading-[1.5]"
                >
                  <div className="w-[18px] h-[18px] min-w-[18px] rounded-md bg-ac/15 text-ac flex items-center justify-center text-[9px] font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-tx">{bold}</strong> {rest}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aud-top aud-top-green relative bg-bg3 border border-bd rounded-[20px] p-8 overflow-hidden">
            <SFIcon name="stethoscope" className="w-8 h-8 mb-3.5 text-mu" />
            <div className="text-xl font-bold mb-3 tracking-[-.02em]">
              Gydytojams
            </div>
            <div className="flex flex-col gap-[9px]">
              {[
                ["Pacientas gerai laikosi", "rekomendacijų"],
                ["Mažiau klausimų", "ir skambučių į kliniką"],
                ["Geresni", "gijimo rezultatai"],
                ["Ankstyvas komplikacijų", "nustatymas"],
                ['Mažiau „dingusių"', "pacientų tarp vizitų"],
              ].map(([bold, rest], i) => (
                <div
                  key={i}
                  className="flex items-start gap-[9px] text-sm text-mu leading-[1.5]"
                >
                  <div className="w-[18px] h-[18px] min-w-[18px] rounded-md bg-gr/15 text-gr flex items-center justify-center text-[9px] font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-tx">{bold}</strong> {rest}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* BENEFITS */}
      <div className="max-w-[1140px] mx-auto py-16 md:py-[100px] px-5 md:px-[60px]">
        <div className="text-center mb-11">
          <h2 className="reveal text-[26px] md:text-[40px] font-extrabold tracking-[-.03em]">
            Viskas, ko reikia
            <br />
            sklandžiam gijimui
          </h2>
        </div>
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            [
              "calendar",
              "Kasdieniai nurodymai",
              "Aiškiai žinok, ką daryti kiekviename gijimo etape",
            ],
            [
              "bell.fill",
              "Išmanūs priminimai",
              "Nepamiršk vaistų, higienos, vizitų ir kitų svarbių veiksmų",
            ],
            [
              "shield.lefthalf.filled.badge.checkmark",
              "Aiškūs signalai",
              "Žinok, kas normalu, o kada verta pasitikrinti pas gydytoją",
            ],
            [
              "folder.fill",
              "Viskas vienoje vietoje",
              "Implanto pasas, nuotraukos, gydymo informacija visada su tavimi",
            ],
          ].map(([ico, title, sub]) => (
            <div
              key={title}
              className="bg-bg3 border border-bd rounded-2xl px-[18px] py-[22px] transition-all hover:border-ac/30 hover:-translate-y-[3px]"
            >
              <div className="mb-3 text-ac"><SFIcon name={ico} className="w-5 h-5" /></div>
              <div className="text-sm font-bold mb-1.5 leading-[1.3]">
                {title}
              </div>
              <div className="text-xs text-mu leading-[1.5]">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* TESTIMONIALS */}
      <div className="max-w-[1140px] mx-auto py-16 md:py-[100px] px-5 md:px-[60px] overflow-visible">
        <div className="text-center mb-11">
          <h2 className="reveal text-[26px] md:text-[40px] font-extrabold tracking-[-.03em]">
            Jau padeda pacientams
          </h2>
        </div>
        <Testimonials />
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* FAQ */}
      <div
        id="faq"
        className="max-w-[860px] mx-auto py-16 md:py-[100px] px-5 md:px-[60px]"
      >
        <div className="text-center mb-11">
          <h2 className="reveal text-[26px] md:text-[40px] font-extrabold tracking-[-.03em]">
            Dažni klausimai
          </h2>
        </div>
        <FAQ />
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* CTA */}
      <div className="cta-radial py-16 md:py-[100px] px-5 md:px-[60px] text-center relative overflow-hidden border-t border-bd">
        <h2 className="reveal text-[32px] md:text-[56px] font-extrabold tracking-[-.04em] leading-[1.08] mb-[14px]">
          Nebespėliok. Žinok.
        </h2>
        <p className="reveal text-[17px] text-mu mb-9 font-light">
          Atsisiųsk programėlę ir rūpinkis savo gijimu užtikrintai – kiekvieną
          dieną.
        </p>
        <div className="reveal mb-5">
          <DownloadButtons centered />
        </div>
        <div className="reveal flex justify-center gap-6 flex-wrap mt-5 text-xs text-mu2">
          <span className="flex items-center gap-1.5"><SFIcon name="lock.fill" className="w-3 h-3" /> Saugūs duomenys</span>
          <span className="flex items-center gap-1.5">
            <SFIcon name="star.fill" className="w-3 h-3" /> 4.9/5 įvertinimas
          </span>
          <span className="flex items-center gap-1.5">
            <SFIcon name="creditcard.fill" className="w-3 h-3" /> Nemokama
          </span>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-bd py-7 px-5 md:px-[60px] flex flex-col md:flex-row justify-between items-center gap-3.5 text-center md:text-left">
        <div className="flex items-center gap-[7px] text-[15px] font-bold text-mu2">
          <Image
            src="/icon.webp"
            alt="MyMouth"
            width={20}
            height={20}
            className="rounded-[5px]"
          />
          MyMouth
        </div>
        <div className="flex gap-6">
          {[
            ["Privatumas", "/privacy"],
            ["Sąlygos", "/terms"],
          ].map(([l, href]) => (
            <a
              key={l}
              href={href}
              className="text-xs text-mu2 hover:text-tx no-underline transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
