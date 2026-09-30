import Image from "next/image";

export const metadata = {
  title: "Paskyros ištrynimas — MyMouth",
  description:
    "Kaip ištrinti MyMouth paskyrą ir visus su ja susijusius duomenis programėlėje arba el. paštu.",
};

const SUPPORT_EMAIL = "info@mymouth.app";

const STEPS = [
  "Atidarykite MyMouth programėlę ir prisijunkite prie savo paskyros.",
  "Apatiniame meniu pasirinkite skirtuką „Profilis“.",
  "Skiltyje „Pagalba“ paspauskite „Privatumas“.",
  "Skiltyje „Paskyra“ paspauskite „Prašyti paskyros ir duomenų ištrynimo“.",
  "Patvirtinkite paspausdami „Pateikti prašymą“. Būsite atjungti nuo paskyros.",
];

const DELETED = [
  "Paskyra ir prisijungimo duomenys (el. pašto adresas, slaptažodis ar socialinio tinklo prisijungimas)",
  "Profilio informacija: vardas, amžius, lytis",
  "Procedūrų, implantų ir dantų informacija, implanto pasas",
  "Kasdienių klausimynų atsakymai, gijimo progresas ir įrašai",
  "Priminimų ir pranešimų nustatymai",
];

export default function DeleteAccountPage() {
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
            Paskyra
          </div>
          <h1 className="text-[32px] md:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08] mb-3">
            MyMouth paskyros ištrynimas
          </h1>
          <p className="text-[15px] text-mu leading-[1.7]">
            Savo MyMouth paskyrą ir visus su ja susijusius duomenis galite ištrinti bet kada — tiesiai
            programėlėje arba parašę mums el. laišką.
          </p>
        </div>

        {/* In-app steps */}
        <section className="mb-12">
          <h2 className="text-[24px] font-extrabold tracking-[-.03em] mb-5">Ištrynimas programėlėje</h2>
          <ol className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <li key={i} className="flex gap-4 items-start border border-bd rounded-xl p-4">
                <span className="flex-none flex items-center justify-center w-7 h-7 rounded-full bg-ac/15 text-[13px] font-bold text-[#8fa8ff]">
                  {i + 1}
                </span>
                <span className="text-[15px] text-tx leading-[1.6] pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-mu leading-[1.65] mt-5">
            Prieš ištrindami paskyrą, eksportuokite jums svarbius duomenis, pvz., implanto pasą PDF
            formatu. Ištrynimo atšaukti negalima.
          </p>
        </section>

        {/* Email */}
        <section className="mb-12 bg-bg3 border border-bd rounded-[20px] p-6 md:p-8">
          <h2 className="text-[20px] font-extrabold tracking-[-.02em] mb-2">Neturite prieigos prie programėlės?</h2>
          <p className="text-sm text-mu leading-[1.65] mb-5">
            Parašykite mums iš el. pašto adreso, kuriuo registravotės MyMouth, su tema „Paskyros
            ištrynimas“. Patvirtinę, kad paskyra priklauso jums, ją ištrinsime ir informuosime el. paštu.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Paskyros ištrynimas")}`}
            className="inline-flex items-center rounded-xl bg-ac px-5 py-3 text-sm font-bold text-white no-underline hover:opacity-90 transition-opacity"
          >
            Rašyti: {SUPPORT_EMAIL} →
          </a>
        </section>

        {/* Data */}
        <section className="mb-12">
          <h2 className="text-[24px] font-extrabold tracking-[-.03em] mb-5">Kokie duomenys ištrinami</h2>
          <ul className="flex flex-col gap-2 mb-6">
            {DELETED.map((item) => (
              <li key={item} className="text-[15px] text-tx leading-[1.6] pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-mu">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-[17px] font-bold tracking-[-.02em] mb-2">Per kiek laiko</h3>
          <p className="text-[15px] text-mu leading-[1.7] mb-6">
            Paskyra ir visi aukščiau nurodyti duomenys ištrinami visam laikui ne vėliau kaip per 30
            dienų nuo prašymo pateikimo.
          </p>
          <h3 className="text-[17px] font-bold tracking-[-.02em] mb-2">Kas gali būti saugoma</h3>
          <p className="text-[15px] text-mu leading-[1.7]">
            Techniniai klaidų ir naudojimo statistikos įrašai, kuriuos tvarko mūsų paslaugų teikėjai,
            saugomi ribotą laiką pagal jų saugojimo terminus ir vėliau automatiškai ištrinami. Duomenis,
            kuriuos patys eksportavote ar išsiuntėte gydytojui, ištrinti galite tik jūs arba gavėjas.
            Daugiau informacijos rasite{" "}
            <a href="/privacy" className="text-tx underline">
              Privatumo politikoje
            </a>
            .
          </p>
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
