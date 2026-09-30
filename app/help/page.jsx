import Image from "next/image";
import HelpAccordion from "@/components/HelpAccordion";

export const metadata = {
  title: "Pagalba — MyMouth",
  description:
    "MyMouth pagalbos centras. Atsakymai į dažniausius klausimus apie programėlę, paskyrą ir duomenis.",
};

const SUPPORT_EMAIL = "info@mymouth.app";

const FEATURES = [
  {
    q: "Kasdieniai gijimo nurodymai",
    a: "Programėlė kiekvieną dieną parodo, kas svarbu jūsų gijimo etape: ką daryti, ko vengti, kas yra normalu ir kada reikėtų kreiptis į gydytoją.",
  },
  {
    q: "Priminimai",
    a: "Gaukite priminimus apie vaistus, burnos higieną ir kitus svarbius veiksmus. Įsitikinkite, kad telefono nustatymuose MyMouth pranešimai yra įjungti.",
  },
  {
    q: "Kasdieniai klausimynai ir progresas",
    a: "Trumpi kasdieniai klausimynai padeda stebėti savijautą. Po implantacijos, traukimo ir sinuso pakėlimo jie trunka 10 dienų, po viso žandikaulio atstatymo — 14 dienų. Laiko linija iki galutinio protezavimo trunka iki 6 mėnesių.",
  },
  {
    q: "Dokumentai",
    a: "Laikykite implanto pasą (gamintojas, modelis, serijos numeris), rentgeno nuotraukas ir gydymo istoriją vienoje vietoje. Implanto pasą galite eksportuoti PDF formatu ir pasidalinti su gydytoju.",
  },
  {
    q: "Kokioms procedūroms skirta programėlė?",
    a: "Danties traukimas (paprastas ir chirurginis), implantacija (vienas ar keli implantai), sinuso dugno pakėlimas ir viso žandikaulio atstatymas implantais.",
  },
];

const ACCOUNT = [
  {
    q: "Ar programėlė mokama?",
    a: "Ne, MyMouth yra nemokama pacientams. Programėlėje nėra prenumeratų ar pirkimų.",
  },
  {
    q: "Kaip ištrinti paskyrą?",
    a: "Paskyrą galite bet kada ištrinti programėlės nustatymuose. Paskyros ištrynimas yra neatšaukiamas — prieš tai eksportuokite svarbius duomenis, pvz., implanto pasą. Ištrynus paskyrą, visi jūsų duomenys pašalinami pagal Privatumo politiką. Išsamią instrukciją rasite puslapyje mymouth.app/delete-account.",
  },
  {
    q: "Ar gydytojas mato mano duomenis?",
    a: "Ne, jūsų gijimo duomenys yra privatūs. Informacija su gydytoju dalinatės tik patys — per eksporto funkciją arba siųsdami PDF.",
  },
  {
    q: "Pamiršau slaptažodį",
    a: "Prisijungimo lange pasirinkite slaptažodžio atkūrimą ir sekite el. laiške gautus nurodymus. Jei laiško negavote, patikrinkite šlamšto aplanką arba susisiekite su mumis.",
  },
  {
    q: "Programėlė veikia netinkamai",
    a: `Įsitikinkite, kad naudojate naujausią programėlės versiją, ir pabandykite ją paleisti iš naujo. Jei problema išlieka, parašykite mums ${SUPPORT_EMAIL} — nurodykite telefono modelį, operacinės sistemos versiją ir problemos aprašymą.`,
  },
];

export default function HelpPage() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-[200] flex items-center justify-between px-5 md:px-[60px] h-16 bg-bg/90 backdrop-blur-[20px] border-b border-bd">
        <a
          href="/"
          className="flex items-center gap-[9px] text-[17px] font-extrabold tracking-[-.03em] text-tx no-underline"
        >
          <Image src="/icon.webp" alt="MyMouth" width={26} height={26} className="rounded-[7px]" />
          MyMouth
        </a>
        <a href="/" className="text-[13px] text-mu hover:text-tx no-underline font-medium transition-colors">
          ← Grįžti į pagrindinį
        </a>
      </nav>

      {/* CONTENT */}
      <div className="max-w-[800px] mx-auto px-5 md:px-[60px] py-12 md:py-16">
        {/* Header */}
        <div className="mb-10 pb-8 border-b border-bd">
          <div className="inline-flex items-center gap-1.5 bg-ac/10 border border-ac/20 rounded-full px-[14px] py-[5px] text-[11px] font-bold text-[#8fa8ff] tracking-[.08em] uppercase mb-5">
            Pagalba
          </div>
          <h1 className="text-[32px] md:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08] mb-3">
            MyMouth pagalbos centras
          </h1>
          <p className="text-[15px] text-mu leading-[1.7]">
            Atsakymai į dažniausius klausimus apie programėlę, paskyrą ir duomenis.
          </p>
        </div>

        {/* Contact */}
        <section className="mb-12 bg-bg3 border border-bd rounded-[20px] p-6 md:p-8">
          <h2 className="text-[20px] font-extrabold tracking-[-.02em] mb-2">Reikia daugiau pagalbos?</h2>
          <p className="text-sm text-mu leading-[1.65] mb-5">
            Parašykite mums — atsakysime kuo greičiau, dažniausiai per 1–2 darbo dienas.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center rounded-xl bg-ac px-5 py-3 text-sm font-bold text-white no-underline hover:opacity-90 transition-opacity"
          >
            Susisiekti: {SUPPORT_EMAIL} →
          </a>
          <p className="text-xs text-mu2 leading-[1.6] mt-5">
            MyMouth nepakeičia gydytojo konsultacijos. Esant stipriam kraujavimui, didėjančiam skausmui,
            karščiavimui ar kitiems nerimą keliantiems simptomams, nedelsdami kreipkitės į savo gydytoją,
            o skubiu atveju skambinkite 112.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] font-extrabold tracking-[-.03em] mb-5">Funkcijos</h2>
          <HelpAccordion items={FEATURES} />
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] font-extrabold tracking-[-.03em] mb-5">Paskyra ir duomenys</h2>
          <HelpAccordion items={ACCOUNT} />
        </section>

        <section>
          <h2 className="text-[24px] font-extrabold tracking-[-.03em] mb-5">Naudingos nuorodos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[["Privatumo politika", "/privacy"], ["Naudojimosi sąlygos", "/terms"], ["Paskyros ištrynimas", "/delete-account"]].map(([l, href]) => (
              <a
                key={href}
                href={href}
                className="border border-bd rounded-xl p-4 text-[15px] font-semibold text-tx no-underline hover:bg-bg3 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-bd py-7 px-5 md:px-[60px] flex flex-col md:flex-row justify-between items-center gap-3.5 text-center md:text-left">
        <div className="flex items-center gap-[7px] text-[15px] font-bold text-mu2">
          <Image src="/icon.webp" alt="MyMouth" width={20} height={20} className="rounded-[5px]" />
          MyMouth
        </div>
        <div className="flex gap-6">
          {[["Pagalba", "/help"], ["Privatumas", "/privacy"], ["Sąlygos", "/terms"]].map(([l, href]) => (
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
