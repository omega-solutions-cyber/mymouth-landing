import ScrollReveal from '@/components/ScrollReveal';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

function LogoMark() {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px]">
      <rect width="26" height="26" rx="7" fill="url(#ng)" />
      <path
        d="M8 10c0-2.2 1.34-4 3.5-4 1 0 1.8.5 2.5.5S15.5 6 16.5 6C18.7 6 20 8 20 10c0 1.2-.4 3-1.2 5.5-.7 2.2-1.6 4-2.8 4-.8 0-1.2-.6-1.5-1.5-.3-.9-.6-1-.9-1s-.6.1-.9 1c-.3.9-.7 1.5-1.5 1.5-1.2 0-2.1-1.8-2.8-4C8.4 13 8 11.2 8 10z"
        fill="white"
      />
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5b7fff" />
          <stop offset="1" stopColor="#8b5fff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
      <path d="M15.12 10.72a4.52 4.52 0 002.15-3.8 4.52 4.52 0 00-2.7-4.12A4.57 4.57 0 0010 4.57a4.57 4.57 0 00-4.57-1.77A4.52 4.52 0 002.73 6.92a4.52 4.52 0 002.15 3.8A4.52 4.52 0 002.73 14.52 4.52 4.52 0 007.3 18.64a4.57 4.57 0 002.7.9 4.57 4.57 0 002.7-.9 4.52 4.52 0 004.57-4.12 4.52 4.52 0 00-2.15-3.8z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
      <path d="M10 2L3 7v6l7 5 7-5V7l-7-5z" opacity=".3" />
      <path d="M10 2L3 7l7 5 7-5-7-5zM3 13l7 5v-5L3 8v5z" />
    </svg>
  );
}

function DownloadButtons({ centered }) {
  return (
    <div className={`flex gap-3 flex-wrap reveal d3 ${centered ? 'justify-center' : ''}`}>
      <a href="#" className="dl-btn dl-btn-dark">
        <AppleIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-normal opacity-70">Atsisiųsk iš</span>
          <span>App Store</span>
        </span>
      </a>
      <a href="#" className="dl-btn dl-btn-outline">
        <PlayIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-normal opacity-70">Gauti iš</span>
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

function Bullet({ color, icon, children }) {
  const colors = {
    g: 'bg-gr/15 text-gr',
    b: 'bg-ac/15 text-ac',
    y: 'bg-yw/15 text-yw',
    r: 'bg-rd/15 text-rd',
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
        <a href="#" className="flex items-center gap-[9px] text-[17px] font-extrabold tracking-[-.03em] text-tx no-underline">
          <LogoMark />
          MyMouth
        </a>
        <ul className="hidden md:flex gap-7 list-none">
          {[
            ['Kaip veikia', '#kaip-veikia'],
            ['Funkcijos', '#funkcijos'],
            ['Pacientams', '#pacientams'],
            ['Gydytojams', '#gydytojams'],
            ['DUK', '#faq'],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-[13px] text-mu hover:text-tx no-underline font-medium transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-[10px] items-center">
          <button className="hidden md:inline-flex btn-ghost">Prisijungti</button>
          <button className="btn-cta">Atsisiųsti</button>
        </div>
      </nav>

      {/* mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[300] px-4 pt-3 pb-5 border-t border-bd bg-gradient-to-t from-bg from-60% to-transparent">
        <button
          className="w-full border-0 rounded-2xl py-4 text-base font-bold text-white cursor-pointer min-h-12"
          style={{ background: 'linear-gradient(135deg, #5b7fff, #8b5fff)' }}
        >
          🍎 Atsisiųsti nemokamai
        </button>
      </div>

      {/* HERO */}
      <div className="max-w-[1140px] mx-auto px-5 md:px-[60px] pt-14 md:pt-20 grid md:grid-cols-[1fr_520px] gap-10 md:gap-[60px] items-center md:min-h-[calc(100vh-64px)]">
        <div>
          <div className="reveal inline-flex items-center gap-1.5 bg-ac/10 border border-ac/20 rounded-full px-[14px] py-[5px] text-[11px] font-bold text-[#8fa8ff] tracking-[.08em] uppercase mb-[22px]">
            🦷 Tavo gijimo gidas
          </div>
          <h1 className="reveal d1 font-extrabold tracking-[-.04em] leading-[1.06] mb-5 text-[38px] md:text-[62px]">
            Suprasi savo gijimą –<br />
            <em className="not-italic text-grad-tri">kiekvieną dieną</em>
          </h1>
          <p className="reveal d2 text-[17px] text-mu max-w-[480px] leading-[1.65] mb-8 font-normal">
            Aiškūs nurodymai, mažiau klaidų, daugiau ramybės. Programėlė, kuri veda per visą gijimo procesą po burnos chirurgijos.
          </p>
          <DownloadButtons />
          <div className="reveal d4 flex items-center gap-1.5 text-xs text-mu2 mt-4">
            <svg viewBox="0 0 14 14" fill="none" className="w-[14px] h-[14px]">
              <path d="M7 1l1.5 3.5 4 .3-3 2.7.9 4L7 9.3 3.6 11.5l.9-4-3-2.7 4-.3z" fill="#1ed98a" />
            </svg>
            Saugūs duomenys. Sukurta kartu su odontologais.
          </div>
        </div>

        <div className="reveal d2 relative flex items-end gap-4 hero-radial">
          <div className="iphone iphone-glow relative z-[2] w-[260px]">
            <div className="iphone-notch" />
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="text-[9px] font-bold tracking-[.08em] uppercase text-ac mb-1.5">📅 DIENOS PLANAS</div>
              <div className="inline-flex items-center gap-1.5 bg-ac/10 border border-ac/25 rounded-[20px] px-[10px] py-[3px] text-[10px] font-bold text-ac mb-[10px]">Day 3</div>
              <div className="bg-gr/10 border border-gr/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-gr">✓ Tinimas gali būti didžiausias – tai normalu</div>
              <div className="bg-rd/10 border border-rd/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-[#ff8899]">✗ Venk kramtymo operuota puse</div>
              <div className="bg-white/[.04] rounded-[10px] px-[11px] py-[9px] mb-[7px]">
                <div className="text-[9px] text-mu mb-1.5">Priminimas</div>
                <div className="flex items-center gap-2 py-1">
                  <div className="w-7 h-7 rounded-lg bg-ac/15 flex items-center justify-center text-[13px] flex-shrink-0">🔔</div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold leading-tight">20:00 · Antibiotikai</div>
                    <div className="text-[9px] text-mu">Svarbu vartoti reguliariai</div>
                  </div>
                  <div className="text-[11px] text-gr">○</div>
                </div>
              </div>
              <div className="bg-white/[.04] rounded-[10px] px-[11px] py-[9px]">
                <div className="flex items-center gap-2 py-1">
                  <div className="w-7 h-7 rounded-lg bg-gr/15 flex items-center justify-center text-[13px] flex-shrink-0">❤️</div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold leading-tight">Stebėk</div>
                    <div className="text-[9px] text-mu">Žinok, kada viskas normalu</div>
                  </div>
                  <div className="text-[11px] text-gr">›</div>
                </div>
              </div>
            </div>
          </div>

          <div className="iphone hidden md:block w-[200px] opacity-55 translate-y-8 relative z-[1]">
            <div className="iphone-notch" />
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="text-[9px] font-bold tracking-[.08em] uppercase text-ac mb-1.5">🔔 PRIMINIMAI</div>
              <div className="bg-card border border-ac/20 rounded-xl px-3 py-[10px] mb-2">
                <div className="font-mono text-[10px] text-ac font-medium">20:00</div>
                <div className="text-[11px] text-tx mt-0.5 leading-[1.4]">Laikas išgerti antibiotikus</div>
                <div className="text-[10px] text-mu mt-1">Svarbu vartoti reguliariai, net jei jautiesi gerai</div>
              </div>
              <div className="bg-card border border-ac/20 rounded-xl px-3 py-[10px]">
                <div className="font-mono text-[10px] text-ac font-medium">08:00</div>
                <div className="text-[11px] text-tx mt-0.5 leading-[1.4]">Rytinis antibiotikų priminimas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20" />
      <hr className="border-0 h-px bg-bd m-0" />

      {/* STATS */}
      <div className="bg-bg2 border-t border-b border-bd grid grid-cols-2 md:grid-cols-4">
        {[
          ['10', 'Dienų kasdieniai\npatikrinimai'],
          ['4', 'Palaikomos chirurginės\nprocedūros'],
          ['100%', 'Personalizuota\ninformacija'],
          ['0€', 'Nemokama\npacientams'],
        ].map(([n, l], i) => (
          <div
            key={i}
            className={`reveal ${i > 0 ? `d${i}` : ''} text-center py-9 px-5 ${
              i < 3 ? 'md:border-r border-bd' : ''
            } ${i < 2 ? 'border-b md:border-b-0 border-bd' : ''} ${i % 2 === 0 ? 'border-r md:border-r' : ''}`}
          >
            <div className="text-[32px] font-extrabold tracking-[-.03em] leading-none mb-1.5 text-grad-blue">{n}</div>
            <div className="text-xs text-mu leading-[1.4] whitespace-pre-line">{l}</div>
          </div>
        ))}
      </div>

      {/* 2. PROBLEM */}
      <div id="kaip-veikia" className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal">
          <FeatNum>02. PROBLEMA</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Daug klausimų<br />po implantacijos?
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Nerimas, spėliojimas ir klaidos gali sulėtinti gijimą. Dauguma pacientų nežino, kas normalu.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="r" icon="?"><strong className="text-tx">Ar normalu, kad skauda?</strong> — Nežino ribos tarp normos ir komplikacijos</Bullet>
            <Bullet color="y" icon="!"><strong className="text-tx">Ar jau galima kramtyti?</strong> — Padaro klaidas, kurios gadina gijimą</Bullet>
            <Bullet color="r" icon="?"><strong className="text-tx">Ar viskas gyja gerai?</strong> — Nerimas dėl kiekvieno pojūčio</Bullet>
            <Bullet color="y" icon="!"><strong className="text-tx">Pamiršta vaistus</strong> — Antibiotikų kursas nutraukiamas per anksti</Bullet>
          </div>
        </div>
        <div className="reveal d1 flex justify-center items-center relative feat-radial">
          <div className="illus-top relative bg-bg3 border border-bd2 rounded-[20px] p-7 overflow-hidden z-[1] w-full min-h-[320px] flex flex-col gap-3">
            <div className="text-[11px] font-bold text-mu tracking-[.08em] uppercase mb-1">Klausimas po operacijos</div>
            {['Ar normalu, kad skauda?', 'Ar jau galima kramtyti?', 'Ar viskas gyja gerai?'].map((q) => (
              <div key={q} className="bg-rd/10 border border-rd/20 rounded-[14px] rounded-bl-[4px] px-4 py-3 max-w-[80%]">
                <div className="text-sm text-[#ff8899]">{q}</div>
              </div>
            ))}
            <div className="mt-2 p-[14px] bg-card rounded-xl flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[10px] bg-rd/15 flex items-center justify-center text-lg flex-shrink-0">😟</div>
              <div>
                <div className="text-xs font-semibold">Nerimas, spėliojimas</div>
                <div className="text-[11px] text-mu">ir klaidos gali sulėtinti gijimą</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* 3. SOLUTION */}
      <div id="funkcijos" className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal d1 order-2 md:order-1 flex justify-center items-center relative feat-radial">
          <div className="iphone iphone-glow w-[240px]">
            <div className="iphone-notch" />
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="text-[9px] font-bold tracking-[.08em] uppercase text-ac mb-1.5">KAS ŠIANDIEN SVARBU</div>
              <div className="bg-gr/10 border border-gr/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-gr">✓ Venk kramtymo operuota puse</div>
              <div className="bg-gr/10 border border-gr/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-gr">✓ Gali jaustis tinimas — normalu</div>
              <div className="bg-rd/10 border border-rd/20 rounded-[10px] px-[10px] py-2 mb-1.5 text-[10px] text-[#ff8899]">✗ Neskalaukite burnos</div>
              <div className="h-2.5" />
              <div className="flex items-center gap-2 py-2 border-b border-white/[.05]">
                <div className="w-7 h-7 rounded-lg bg-ac/15 flex items-center justify-center text-[13px] flex-shrink-0">🔔</div>
                <div className="flex-1"><div className="text-[10px] font-semibold leading-tight">Priminimas</div><div className="text-[9px] text-mu">20:00 · Antibiotikai</div></div>
                <div className="text-[11px] text-gr">○</div>
              </div>
              <div className="flex items-center gap-2 py-2">
                <div className="w-7 h-7 rounded-lg bg-gr/15 flex items-center justify-center text-[13px] flex-shrink-0">❤️</div>
                <div className="flex-1"><div className="text-[10px] font-semibold leading-tight">Stebėk</div><div className="text-[9px] text-mu">Žinok, kada viskas normalu</div></div>
                <div className="text-[11px] text-gr">›</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal order-1 md:order-2">
          <FeatNum>03. SPRENDIMAS</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Aiškumas, kuris<br />veda kiekvieną dieną
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Gauk aiškius atsakymus ir tiksliai žinok, ką daryti. Kasdieniai nurodymai pagal tikslų gijimo etapą.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="g" icon="✓"><strong className="text-tx">Kas šiandien svarbu</strong> — venk kramtymo operuota puse ir fizinio krūvio</Bullet>
            <Bullet color="g" icon="✓"><strong className="text-tx">Kas normalu</strong> — tinimas gali būti didžiausias šiandien</Bullet>
            <Bullet color="g" icon="✓"><strong className="text-tx">Kada kreiptis</strong> — aiškūs signalai, kada reikia skambinti gydytojui</Bullet>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* 4. NOTIFICATIONS */}
      <div className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal">
          <FeatNum>04. NOTIFIKACIJOS</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Primename, kai<br />to labiausiai reikia
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Laiku gausi priminimus apie vaistus, higieną ir svarbius veiksmus. Nereikia nieko atsiminti.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="b" icon="💊"><strong className="text-tx">Antibiotikų priminimai</strong> — du kartus per dieną, tiksliu laiku</Bullet>
            <Bullet color="y" icon="⏰"><strong className="text-tx">Higienos priminimai</strong> — kada pradėti skalauti, kaip valyti</Bullet>
            <Bullet color="g" icon="📅"><strong className="text-tx">Vizitų priminimai</strong> — gijimo galvutės uždėjimas, karūnėlė</Bullet>
          </div>
        </div>
        <div className="reveal d1 flex justify-center items-center relative feat-radial">
          <div className="iphone w-[230px] relative z-[1]">
            <div className="iphone-notch" />
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="text-[9px] font-bold tracking-[.08em] uppercase text-ac mb-1.5">🔔 PRIMINIMAI</div>
              <div className="bg-card border border-ac/20 rounded-xl px-3 py-[10px] mb-2">
                <div className="font-mono text-[28px] font-medium text-tx tracking-[-.02em] my-1">20:00</div>
                <div className="text-[11px] font-semibold text-tx mb-0.5">Priminimas</div>
                <div className="text-[11px] text-mu">Laikas išgerti antibiotikus</div>
                <div className="text-[10px] text-mu mt-1.5">Svarbu vartoti reguliariai, net jei jautiesi gerai</div>
              </div>
              <div className="bg-card border border-ac/20 rounded-xl px-3 py-[10px]">
                <div className="text-[10px] text-mu mb-0.5">Rytinis</div>
                <div className="text-[11px] font-semibold text-tx mb-0.5">08:00 · Antibiotikai</div>
                <div className="text-[11px] text-mu">Ryte prieš valgį</div>
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
            <div className="iphone-notch" />
            <div className="px-[14px] pt-3 pb-[18px]">
              <div className="text-[11px] font-bold text-tx mb-3">‹  Mano dokumentai</div>
              {[
                ['🦷', 'Implanto pasas', 'Straumann · 14.05.2024', 'bg-ac/15'],
                ['🩻', 'Rentgeno nuotraukos', '3 failai', 'bg-rd/10'],
                ['📄', 'Gydymo informacija', 'Operacijos ir vizitų istorija', 'bg-gr/15'],
                ['📋', 'Sutikimai ir pažymos', '2 dokumentai', 'bg-yw/15'],
              ].map(([ico, label, sub, bg], i, arr) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 py-2 ${i < arr.length - 1 ? 'border-b border-white/[.05]' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center text-[13px] flex-shrink-0`}>{ico}</div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold text-tx leading-tight">{label}</div>
                    <div className="text-[9px] text-mu">{sub}</div>
                  </div>
                  <div className="text-[11px] text-gr">›</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal order-1 md:order-2">
          <FeatNum>05. DOKUMENTAI</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Viskas vienoje<br />vietoje
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Implanto pasas, rentgeno nuotraukos ir visa gydymo informacija – visada po ranka.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="b" icon="🦷"><strong className="text-tx">Implanto pasas</strong> — gamintojas, modelis, serijos numeris, garantija</Bullet>
            <Bullet color="b" icon="🩻"><strong className="text-tx">Rentgeno nuotraukos</strong> — prieš ir po, visada pasiekiamos</Bullet>
            <Bullet color="g" icon="📄"><strong className="text-tx">Gydymo informacija</strong> — operacijų ir vizitų istorija</Bullet>
            <Bullet color="y" icon="📋"><strong className="text-tx">Sutikimai ir pažymos</strong> — visi svarbūs dokumentai</Bullet>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* 6. PEACE */}
      <div className="max-w-[1140px] mx-auto py-14 md:py-20 px-5 md:px-[60px] grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal">
          <FeatNum>06. RAMYBĖ</FeatNum>
          <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-[-.03em] leading-[1.1] mb-[14px]">
            Mažiau streso.<br />Daugiau pasitikėjimo.
          </h2>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Žinodamas, kad viskas eina teisinga linkme, jauti ramybę kiekvieną dieną. Nebe spėlioji — žinai.
          </p>
          <div className="flex flex-col gap-2.5">
            <Bullet color="g" icon="✓"><strong className="text-tx">Aiškus progresas</strong> — matai kiek dienų praėjo ir kas laukia toliau</Bullet>
            <Bullet color="g" icon="✓"><strong className="text-tx">Mažiau klaidų</strong> — programėlė apsaugo nuo dažniausių gijimo klaidų</Bullet>
            <Bullet color="g" icon="✓"><strong className="text-tx">Gydytojas šalia</strong> — jo rekomendacijos tavo telefone kiekvieną dieną</Bullet>
          </div>
        </div>
        <div className="reveal d1 flex justify-center items-center relative feat-radial">
          <div className="illus-top relative bg-bg3 border border-bd2 rounded-[20px] p-7 overflow-hidden z-[1] w-full min-h-[300px] flex flex-col justify-center items-center gap-4 text-center">
            <div className="text-[56px] mb-2">😌</div>
            <div className="text-xl font-bold tracking-[-.02em]">Viskas pagal planą</div>
            <div className="text-sm text-mu max-w-[260px] leading-[1.6]">Gijimas juda teisinga linkme. Šiandien nėra ko nerimauti.</div>
            <div className="flex flex-col gap-2 w-full max-w-[260px] mt-2">
              <div className="bg-gr/10 border border-gr/20 rounded-[10px] px-[14px] py-2.5 flex items-center gap-2 text-[13px] text-gr">
                <span>✓</span> Tinimas mažėja — D+3 tai normalu
              </div>
              <div className="bg-gr/10 border border-gr/20 rounded-[10px] px-[14px] py-2.5 flex items-center gap-2 text-[13px] text-gr">
                <span>✓</span> Antibiotikai vartojami laiku
              </div>
              <div className="bg-ac/10 border border-ac/20 rounded-[10px] px-[14px] py-2.5 flex items-center gap-2 text-[13px] text-[#8fa8ff]">
                <span>📅</span> Sekantis etapas: ~7 dienos
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* AUDIENCE */}
      <div id="pacientams" className="max-w-[1140px] mx-auto py-16 md:py-[100px] px-5 md:px-[60px] pb-20">
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.13em] uppercase text-ac mb-4">👥 Kam skirta</div>
          <h2 className="reveal text-[28px] md:text-[44px] font-extrabold tracking-[-.03em] mb-[14px]">
            Tu ir tavo gydytojas –<br />vienas komandos
          </h2>
          <p className="reveal text-base text-mu max-w-[500px] mx-auto">
            Tavo gydytojo rekomendacijos tavo telefone kiekvieną dieną.
          </p>
        </div>
        <div id="gydytojams" className="reveal grid md:grid-cols-2 gap-5">
          <div className="aud-top relative bg-bg3 border border-bd rounded-[20px] p-8 overflow-hidden">
            <div className="text-[32px] mb-3.5">📱</div>
            <div className="text-xl font-bold mb-3 tracking-[-.02em]">Tau, pacientai</div>
            <div className="flex flex-col gap-[9px]">
              {[
                ['Mažiau nerimo', 'ir spėliojimo kiekvieną dieną'],
                ['Aiškūs nurodymai', '— kas normalu, ko vengti'],
                ['Mažiau klaidų', '— skalavimas, kramtymas, krūvis'],
                ['Patogumas', 'ir kontrolė tavo telefone'],
                ['Visa informacija', 'vienoje vietoje visada'],
              ].map(([bold, rest], i) => (
                <div key={i} className="flex items-start gap-[9px] text-sm text-mu leading-[1.5]">
                  <div className="w-[18px] h-[18px] min-w-[18px] rounded-md bg-ac/15 text-ac flex items-center justify-center text-[9px] font-bold mt-0.5">✓</div>
                  <div><strong className="text-tx">{bold}</strong> {rest}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aud-top aud-top-green relative bg-bg3 border border-bd rounded-[20px] p-8 overflow-hidden">
            <div className="text-[32px] mb-3.5">🦷</div>
            <div className="text-xl font-bold mb-3 tracking-[-.02em]">Tau, gydytojai</div>
            <div className="flex flex-col gap-[9px]">
              {[
                ['Pacientas gerai laikosi', 'rekomendacijų'],
                ['Mažiau klausimų', 'ir skambučių į kliniką'],
                ['Geresni gydymo', 'rezultatai ilgalaikiai'],
                ['Ankstyvas komplikacijų', 'nustatymas'],
                ['Mažiau „dingusių"', 'pacientų tarp vizitų'],
              ].map(([bold, rest], i) => (
                <div key={i} className="flex items-start gap-[9px] text-sm text-mu leading-[1.5]">
                  <div className="w-[18px] h-[18px] min-w-[18px] rounded-md bg-gr/15 text-gr flex items-center justify-center text-[9px] font-bold mt-0.5">✓</div>
                  <div><strong className="text-tx">{bold}</strong> {rest}</div>
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
          <div className="reveal inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.13em] uppercase text-ac mb-4">📊 Ką gauni</div>
          <h2 className="reveal text-[26px] md:text-[40px] font-extrabold tracking-[-.03em]">
            Viskas, ko reikia<br />sklandžiam gijimui
          </h2>
        </div>
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['📅', 'Kasdieniai nurodymai', 'Aiškiai žinok, ką daryti kiekvieną gijimo etape'],
            ['🔔', 'Išmanūs priminimai', 'Nepamirški vaistų, skalavimo, vizitų ir kitų svarbių veiksmų'],
            ['🛡️', 'Aiškūs signalai', 'Žinok, kas normalu, o kada verta pasitikrinti pas gydytoją'],
            ['📁', 'Viskas vienoje vietoje', 'Implanto pasas, nuotraukos, gydymo informacija visada su tavimi'],
          ].map(([ico, title, sub]) => (
            <div
              key={title}
              className="bg-bg3 border border-bd rounded-2xl px-[18px] py-[22px] transition-all hover:border-ac/30 hover:-translate-y-[3px]"
            >
              <div className="text-[22px] mb-3">{ico}</div>
              <div className="text-sm font-bold mb-1.5 leading-[1.3]">{title}</div>
              <div className="text-xs text-mu leading-[1.5]">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* TESTIMONIALS */}
      <div className="max-w-[1140px] mx-auto py-16 md:py-[100px] px-5 md:px-[60px] overflow-visible">
        <div className="text-center mb-11">
          <div className="reveal inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.13em] uppercase text-ac mb-4">💬 Ką sako pacientai</div>
          <h2 className="reveal text-[26px] md:text-[40px] font-extrabold tracking-[-.03em]">Jau padeda pacientams</h2>
        </div>
        <Testimonials />
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* FAQ */}
      <div id="faq" className="max-w-[860px] mx-auto py-16 md:py-[100px] px-5 md:px-[60px]">
        <div className="text-center mb-11">
          <div className="reveal inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.13em] uppercase text-ac mb-4">❓ DUK</div>
          <h2 className="reveal text-[26px] md:text-[40px] font-extrabold tracking-[-.03em]">Dažni klausimai</h2>
        </div>
        <FAQ />
      </div>

      <hr className="border-0 h-px bg-bd m-0" />

      {/* CTA */}
      <div className="cta-radial py-16 md:py-[100px] px-5 md:px-[60px] text-center relative overflow-hidden border-t border-bd">
        <div className="reveal inline-flex items-center justify-center gap-1.5 text-[11px] font-bold tracking-[.13em] uppercase text-ac mb-4">🚀 Pradėk dabar</div>
        <h2 className="reveal text-[32px] md:text-[56px] font-extrabold tracking-[-.04em] leading-[1.08] mb-[14px]">
          Nebe spėliok. Žinok.
        </h2>
        <p className="reveal text-[17px] text-mu mb-9 font-light">
          Atsisiųsk programėlę ir rūpinkis savo gijimu užtikrintai – kiekvieną dieną.
        </p>
        <div className="reveal mb-5">
          <DownloadButtons centered />
        </div>
        <div className="reveal flex justify-center gap-6 flex-wrap mt-5 text-xs text-mu2">
          <span className="flex items-center gap-1.5">🔒 Saugūs duomenys</span>
          <span className="flex items-center gap-1.5">⭐ 4.9/5 įvertinimas</span>
          <span className="flex items-center gap-1.5">💳 Nereikia kortelės</span>
          <span className="flex items-center gap-1.5">🆓 Nemokama visada</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-bd py-7 px-5 md:px-[60px] flex flex-col md:flex-row justify-between items-center gap-3.5 text-center md:text-left pb-24 md:pb-7">
        <div className="text-[15px] font-bold text-mu2">🦷 MyMouth</div>
        <div className="text-xs text-mu2">© 2025 MyMouth · Visos teisės saugomos</div>
        <div className="flex gap-6">
          {['Privatumas', 'Sąlygos', 'Instagram', 'Facebook'].map((l) => (
            <a key={l} href="#" className="text-xs text-mu2 hover:text-tx no-underline transition-colors">
              {l}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
