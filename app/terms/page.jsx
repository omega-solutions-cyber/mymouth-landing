import Image from "next/image";

export const metadata = {
  title: "Naudojimosi sąlygos — MyMouth",
  description:
    "MyMouth naudojimosi sąlygos. Sužinokite, kokios taisyklės taikomos naudojantis MyMouth programele.",
};

const sections = [
  {
    id: "1",
    title: "1. Įvadas",
    subsections: [
      {
        id: "1.1",
        title: "1.1. Apie šias sąlygas",
        content: `Šios Naudojimosi sąlygos (toliau – „Sąlygos") reglamentuoja visą santykį tarp jūsų, kaip vartotojo (toliau – „Vartotojas"), ir Burnos chirurgija, MB, įmonės kodas 303916962 (toliau – „Bendrovė", „mes", „mums" arba „mūsų"), kai naudojatės MyMouth mobiliaja programele ar susijusia svetaine (toliau – „Programelė").

Prieš pradedant naudotis Programele, prašome atidžiai perskaityti šias Sąlygas. Naudodamiesi Programele, jūs patvirtinate, kad perskaitėte, supratote ir sutinkate būti šiomis Sąlygomis saistomi.`,
        warning: `SVARBU: JEI NESUTINKATE SU ŠIOMIS SĄLYGOMIS, NEINSTALIUOKITE IR NENAUDOKITĖS PROGRAMELE.`,
      },
      {
        id: "1.2",
        title: "1.2. Susisiekite su mumis",
        contacts: true,
      },
    ],
  },
  {
    id: "2",
    title: "2. Sąvokos",
    content: `Vartojamos pagrindinės sąvokos:`,
    definitions: [
      ["Programelė", "MyMouth mobilioji programelė, skirta parsisiuntimui iš App Store ir (ar) Google Play."],
      ["Vartotojas", "fizinis asmuo, besiregistruojantis ar naudojantis Programele."],
      ["Paskyra", "individuali Vartotojo paskyra, sukurta registruojantis Programelėje."],
      ["Turinys", "visa Programelėje pateikiama informacija: pooperaciniai planai, priminimai, gijimo laiko juostos, implanto paso informacija ir kiti duomenys."],
      ["Vartotojo duomenys", "Vartotojo įvesta informacija: sveikatos duomenys, procedūrų įrašai, dienos patikrinimo atsakymai ir kt."],
      ["Privatumo politika", "atskiras dokumentas, reglamentuojantis asmens duomenų tvarkymą, prieinamas Programelėje ir svetainėje mymouth.app."],
    ],
  },
  {
    id: "3",
    title: "3. Programelės paskirtis ir apribojimai",
    subsections: [
      {
        id: "3.1",
        title: "3.1. Ką daro MyMouth",
        content: `MyMouth yra informacinė pooperacinės priežiūros pagalbos priemonė, skirta asmenims, kuriems atliktos burnos chirurginės operacijos: dantų implantacija, dantų traukimas, sinuso dugno pakėlimas, viso žandikaulio atstatymas. Programelė teikia:`,
        list: [
          "Personalizuotus pooperacinės priežiūros planus ir priminimus.",
          "Dieninius pojautimo patikrinimus ir gijimo sekimo įrankius.",
          "Implanto paso kaupimo ir eksportavimo funkciją.",
          "Bendro pobūdžio informaciją apie pooperacinį laikotarpį.",
        ],
      },
      {
        id: "3.2",
        title: "3.2. Kas nėra MyMouth",
        content: `MyMouth NĖRA medicininė priemonė ir neteikia medicininės pagalbos. Konkrečiai:`,
        list: [
          "Programelė nediagnozuoja jokių ligų ar būklių.",
          "Programelės Turinys nėra medicininis patarimas, diagnozė ar gydymo rekomendacija.",
          "Programelė nekeičia gydytojo ar kito sveikatos priežiūros specialisto konsultacijos.",
          "Programelės duomenys negali būti naudojami kaip oficialus medicininis dokumentas – įskaitant Implanto pasą, kuris yra tik informacinės paskirties priemonė.",
        ],
        warning: `Bet kokio nerimą keliančio simptomo atveju nedelsiant kreipkitės į savo gydytoją ar skubios medicininės pagalbos tarnybą. Jokia Programelėje pateikiama informacija nėra skirta atidėti, pakeisti ar ignoruoti profesionalios medicininės pagalbos.`,
      },
    ],
  },
  {
    id: "4",
    title: "4. Registracija ir paskyra",
    subsections: [
      {
        id: "4.1",
        title: "4.1. Registracijos reikalavimai",
        content: `Norint naudotis visomis Programelės funkcijomis, būtina sukurti paskyrą. Registruodamasis Vartotojas patvirtina, kad:`,
        list: [
          "Yra sulaukęs 18 metų.",
          "Pateikiama informacija yra teisinga, tiksli ir išsami.",
          "Paskyrą kuria sau asmeniškai, o ne kito asmens vardu (išskyrus atvejus, kai yra to asmens teisėtas globėjas).",
        ],
      },
      {
        id: "4.2",
        title: "4.2. Paskyros saugumas",
        content: `Vartotojas yra vienintelis savo paskyros savininkas ir įpareigojamas:`,
        list: [
          "Saugoti prisijungimo duomenis konfidencialiai ir nesidalinti jais su trečiosiomis šalimis.",
          "Nedelsdamas pranešti apie bet kokį neleistiną paskyros naudojimą el. paštu info@mymouth.app.",
          "Užtikrinti, kad prie Programelės negalėtų patekti nepilnamečiai.",
        ],
        footer: `Bendrovė neatsako už nuostolius, kilusius dėl neleistino paskyros naudojimo, jei Vartotojas neapsaugojo savo prisijungimo duomenų.`,
      },
      {
        id: "4.3",
        title: "4.3. Paskyros ištrynimas",
        content: `Vartotojas gali bet kada ištrinti savo paskyrą Programelės nustatymuose. Svarbu: paskyros ištrynimas yra neatšaukiamas. Prieš ištrindami paskyrą, pasirūpinkite visais svarbiais duomenimis (pvz., eksportuokite Implanto pasą). Ištrynus paskyrą, visi Vartotojo įvesti duomenys yra pašalinami pagal Privatumo politiką.`,
      },
    ],
  },
  {
    id: "5",
    title: "5. Leistinas naudojimasis",
    subsections: [
      {
        id: "5.1",
        title: "5.1. Leidžiamas naudojimas",
        content: `Vartotojas turi teisę naudotis Programele tik asmeniniais, nekomercinės paskirties tikslais. Vartotojas gali:`,
        list: [
          "Kurti ir tvarkyti savo pooperacinės priežiūros įrašus.",
          "Eksportuoti savo Implanto pasą asmeninėms reikmėms.",
          "Naudotis visomis Programelės funkcijomis asmeninėms, nekomercinėms reikmėms.",
        ],
      },
      {
        id: "5.2",
        title: "5.2. Draudžiamas naudojimas",
        content: `Vartotojui draudžiama:`,
        list: [
          "Naudoti Programelę neteisėtiems, nesąžiningiems ar kenksmingiems tikslams.",
          "Bandyti gauti neleistiną prieigą prie Programelės, jos serverių ar duomenų bazių.",
          "Kopijuoti, platinti, parduoti ar licencijuoti Programelės turinį be Bendrovės raštiško sutikimo.",
          "Naudoti Programelę kitam asmeniui stebėti be jo žinios.",
          "Kelti ar perduoti kenksmingo, neteisingo ar kito asmens teises pažeidžiančio turinio.",
          "Atlikti veiksmus, galinčius sutrikdyti Programelės veiklą ar infrastruktūrą.",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "6. Turinys ir intelektinė nuosavybė",
    subsections: [
      {
        id: "6.1",
        title: "6.1. Programelės turinys",
        content: `Visas Programelėje pateikiamas turinys – įskaitant pooperacinius planus, priminimus, tekstus, dizainą, grafiką, logotipus ir kitus medžiagos elementus – yra Bendrovės nuosavybė arba licencijuotas jos naudojimui. Visi intelektinės nuosavybės teisių aktai taikomi visiškai.`,
      },
      {
        id: "6.2",
        title: "6.2. Naudojimosi licencija",
        content: `Šiomis Sąlygomis Vartotojui suteikiama ribota, neišimtinė, neperleidžiama, nesublicencijuojama licencija naudotis Programele tik asmeninėms, nekomercinėms reikmėms. Ši licencija nesuteikia teisių:`,
        list: [
          "Kopijuoti ar platinti Programelės turinį.",
          "Modifikuoti, pritaikyti ar kurti išvestinių kūrinių.",
          "Atlikti atvirkštinę inžineriją ar dekompiliuoti Programelę.",
          "Naudoti Programelę komerciniais ar viešais tikslais.",
        ],
      },
      {
        id: "6.3",
        title: "6.3. Vartotojo duomenys",
        content: `Vartotojas išlaiko visas nuosavybės teises į savo įvestus duomenis (sveikatos įrašai, operacijų duomenys ir kt.). Vartotojas suteikia Bendrovei ribotą licenciją naudoti šiuos duomenis išimtinai paslaugoms teikti ir gerinti pagal Privatumo politiką.

Vartotojas atsako už savo įvedamos informacijos tikslumą ir užtikrina, kad ji nepažeidžia trečiųjų šalių teisių.`,
      },
    ],
  },
  {
    id: "7",
    title: "7. Implanto pasas – svarbus atsisakymas",
    content: `Programelė leidžia kaupti ir eksportuoti Implanto pasą – PDF dokumentą su implanto gamintojo, modelio, serijos numerio, klinikos ir gydytojo informacija.`,
    list: [
      "Implanto pasas yra informacinės paskirties asmeninis įrašų dokumentas.",
      "Jis nėra oficialus medicininis dokumentas ir negali būti naudojamas kaip vienintelis medicininių sprendimų šaltinis.",
      "Bendrovė neatsako už Vartotojo įvestos informacijos tikslumą. Atsakomybė už teisingos informacijos įvedimą tenka Vartotojui.",
      "Medicininėms reikmėms visada vadovaukitės originaliais klinikos dokumentais ir gydytojo rekomendacijomis.",
    ],
  },
  {
    id: "8",
    title: "8. Atsakomybės apribojimas",
    subsections: [
      {
        id: "8.1",
        title: '8.1. Paslaugos teikiamos „kaip yra"',
        content: `Programelė teikiama „kaip yra" ir „kaip prieinama", be jokių tiesioginių ar numanomu garantijų. Bendrovė deda protingas pastangas užtikrinti, kad Programelė veiktų kaip numatyta, tačiau negarantuoja:`,
        list: [
          "Kad Programelė veiks nepertraukiamai, be klaidų ar visada bus prieinama.",
          "Kad Programelėje pateikta informacija bus visiškai tiksli, išsami ar aktuali.",
          "Kad Programelė atitiks konkrečius Vartotojo poreikius ar lūkesčius.",
        ],
      },
      {
        id: "8.2",
        title: "8.2. Atsakomybės apribojimas",
        content: `Tiek, kiek leidžia taikytini teisės aktai, Bendrovė neatsako už:`,
        list: [
          "Netiesioginius, atsitiktinius, specialiuosius ar pasekminius nuostolius.",
          "Nuostolius, kilusius dėl neteisingo Programelės turinio interpretavimo kaip medicininės rekomendacijos.",
          "Duomenų praradimą dėl Vartotojo nesaugojimo ar klaidos.",
          "Trečiųjų šalių (pvz., App Store, Google Play) veiksmų.",
        ],
        footer: `Bendrovės atsakomybė apribota tiesioginiais nuostoliais, jei taikytini teisės aktai nenumato kitaip.`,
      },
      {
        id: "8.3",
        title: "8.3. Force majeure",
        content: `Bendrovė atleidžiama nuo atsakomybės už Sąlygų nevykdymą, jei jis kilo dėl force majeure aplinkybių (karas, gamtos nelaimės, infrastruktūros gedimai, kibernetinės atakos ir pan.), kurių Bendrovė negalėjo kontroliuoti.`,
      },
    ],
  },
  {
    id: "9",
    title: "9. Medicininė atsakomybė",
    warning: `PRIEŠ NAUDODAMIESI PROGRAMELE, PASITARKITE SU SAVO GYDYTOJU AR KITU SVEIKATOS PRIEŽIŪROS SPECIALISTU.`,
    content: `Burnos chirurgija, MB nėra medicinos įstaiga ir negali teikti medicininės pagalbos. Jokia Programelėje pateikiama informacija neturi būti laikoma medicininės pagalbos pakeitimu ar suprantama kaip gydytojo patarimas, diagnozė ar recepto pavaduotojas.

Vartotojas yra vienintelis atsakingas už savo sveikatos būklės įvertinimą ir sprendimus, susijusius su gydymu. Programelė skirta papildyti, o ne pakeisti, gydytojo ar burnos chirurgo nurodymus.

Kilus bet kokiems nerimą keliantiems simptomams (stiprus skausmas, kraujavimas, infekcijos požymiai ir kt.), nedelsiant kreipkitės į savo gydytoją ar skubios medicininės pagalbos tarnybą.`,
  },
  {
    id: "10",
    title: "10. Privatumas ir asmens duomenys",
    content: `Vartotojo asmens duomenų tvarkymas reglamentuojamas atskira Privatumo politika, prieinama Programelėje ir svetainėje mymouth.app. Prašome atidžiai perskaityti Privatumo politiką, kad suprastumėte, kaip renkame, naudojame ir saugome jūsų duomenis.

Kadangi Programelė tvarko su sveikata susijusius duomenis, šie laikomi ypatinga asmens duomenų kategorija pagal BDAR. Jie tvarkomi tik jūsų sutikimo pagrindu ir tik Programelės veikimui užtikrinti.`,
  },
  {
    id: "11",
    title: "11. Programelės pakeitimai ir prieinamumas",
    content: `Bendrovė pasilieka teisę bet kada, be išankstinio įspėjimo:`,
    list: [
      "Keisti, papildyti ar tobulinti Programelės funkcionalumą.",
      "Laikinai ar visam laikui nutraukti visą arba dalį Programelės veiklos.",
      "Reikalauti atnaujinti Programelę, kad būtų galima toliau ją naudoti.",
    ],
    footer: `Kadangi Programelė nemokama, Vartotojas neturi teisių pretenduoti į kompensaciją dėl tokių pakeitimų.`,
  },
  {
    id: "12",
    title: "12. Sąlygų pakeitimai",
    content: `Bendrovė pasilieka teisę bet kada keisti šias Sąlygas. Apie esminius pakeitimus informuosime:`,
    list: [
      "El. paštu, Vartotojo paskyros adresu.",
      "Pranešimu Programelėje.",
      "Skelbdami atnaujintą versiją svetainėje mymouth.app.",
    ],
    footer: `Pakeitimai įsigalioja nuo jų paskelbimo datos. Tolimesnis Programelės naudojimas po pakeitimų paskelbimo reiškia sutikimą su naujomis Sąlygomis. Jei nesutinkate su pakeitimais, turite nebenaudoti Programelės ir ištrinti savo paskyrą.`,
  },
  {
    id: "13",
    title: "13. Amžiaus apribojimas",
    content: `Programelė skirta tik asmenims, sulaukusiems 18 metų. Registruodamasis Vartotojas patvirtina, kad yra sulaukęs 18 metų. Jei Bendrovė sužino, kad paskyrą sukūrė asmuo, nesulaukęs 18 metų, tokia paskyra bus nedelsdama ištrinta.`,
  },
  {
    id: "14",
    title: "14. Trečiųjų šalių paslaugos",
    content: `Programelė gali veikti kartu su trečiųjų šalių paslaugomis (pvz., Apple App Store, Google Play, el. pašto tiekėjais). Bendrovė neatsako už trečiųjų šalių paslaugų veiklą, prieigą ar privatumo politikas. Naudodamasis trečiųjų šalių paslaugomis, Vartotojas yra saistomas jų sąlygų.

Programelėje gali būti nuorodos į išorines svetaines ar išteklius. Bendrovė nėra atsakinga už jų turinį, tikslumą ar privatumą.`,
  },
  {
    id: "15",
    title: "15. Skundai ir ginčai",
    content: `Bet kokie skundai dėl Programelės ar mūsų paslaugų teikiami el. paštu info@mymouth.app. Atsakysime per 14 kalendorinių dienų nuo skundo gavimo.

Jei Bendrovės atsakymas netenkina Vartotojo arba atsakymas nepateikiamas laiku, Vartotojas turi teisę kreiptis į atitinkamas reguliavimo institucijas ar teismą.

Visi ginčai, kilę dėl šių Sąlygų ar susijęs su Programele, sprendžiami Lietuvos Respublikos teismuose pagal Lietuvos Respublikos teisę, jei taikytini teisės aktai nenumato kitaip.`,
  },
  {
    id: "16",
    title: "16. Kitos nuostatos",
    subsections: [
      {
        id: "16.1",
        title: "16.1. Atskirumas",
        content: `Jei kokia nors šių Sąlygų nuostata būtų pripažinta negaliojančia ar nevykdytina, likusios Sąlygos lieka galiojančios ir toliau taikomos.`,
      },
      {
        id: "16.2",
        title: "16.2. Teisių neperleidimas",
        content: `Vartotojas negali perleisti jokių iš šių Sąlygų kylančių teisių ar prievolių be išankstinio raštiško Bendrovės sutikimo.`,
      },
      {
        id: "16.3",
        title: "16.3. Komunikacija",
        content: `Bendrovė komunikuoja su Vartotoju el. paštu arba per Programelę. Vartotojas atsakingas už teisingos el. pašto adreso pateikimą ir reguliarų pašto tikrinimą. Bet kokie klausimai: info@mymouth.app`,
      },
      {
        id: "16.4",
        title: "16.4. Taikytina teisė",
        content: `Šioms Sąlygoms taikoma Lietuvos Respublikos teisė.`,
      },
    ],
  },
  {
    id: "kontaktai",
    title: "Kontaktai",
    contacts: true,
  },
];

function renderSection(section) {
  return (
    <section key={section.id} className="mb-10">
      <h2 className="text-[18px] md:text-[20px] font-bold tracking-[-0.02em] text-tx mb-4 pb-3 border-b border-bd">
        {section.title}
      </h2>

      {section.warning && (
        <div className="bg-rd/10 border border-rd/20 rounded-xl px-4 py-3 mb-4 text-[13px] font-semibold text-[#ff8899] leading-[1.6]">
          {section.warning}
        </div>
      )}

      {section.subsections
        ? section.subsections.map((sub) => (
            <div key={sub.id} className="mb-6">
              <h3 className="text-[15px] font-semibold text-tx mb-2">{sub.title}</h3>
              {sub.warning && (
                <div className="bg-rd/10 border border-rd/20 rounded-xl px-4 py-3 mb-3 text-[13px] font-semibold text-[#ff8899] leading-[1.6]">
                  {sub.warning}
                </div>
              )}
              {sub.content && (
                <p className="text-[14px] text-mu leading-[1.75] whitespace-pre-line mb-3">{sub.content}</p>
              )}
              {sub.list && (
                <ul className="flex flex-col gap-2 mb-3">
                  {sub.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-mu leading-[1.65]">
                      <span className="mt-[5px] w-1.5 h-1.5 min-w-[6px] rounded-full bg-ac/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {sub.footer && (
                <p className="text-[14px] text-mu leading-[1.75] mt-2">{sub.footer}</p>
              )}
              {sub.contacts && (
                <div className="bg-bg3 border border-bd rounded-xl p-5 text-[14px] text-mu leading-[1.8]">
                  <div><span className="text-tx font-medium">Burnos chirurgija, MB</span></div>
                  <div><span className="text-tx font-medium">Įmonės kodas:</span> 303916962</div>
                  <div>
                    <span className="text-tx font-medium">El. paštas:</span>{" "}
                    <a href="mailto:info@mymouth.app" className="text-ac hover:underline">info@mymouth.app</a>
                  </div>
                  <div>
                    <span className="text-tx font-medium">Svetainė:</span>{" "}
                    <a href="https://mymouth.app" className="text-ac hover:underline">mymouth.app</a>
                  </div>
                </div>
              )}
            </div>
          ))
        : null}

      {section.content && (
        <p className="text-[14px] text-mu leading-[1.75] whitespace-pre-line mb-4">{section.content}</p>
      )}

      {section.list && (
        <ul className="flex flex-col gap-2 mb-4">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-mu leading-[1.65]">
              <span className="mt-[5px] w-1.5 h-1.5 min-w-[6px] rounded-full bg-ac/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.definitions && (
        <div className="flex flex-col gap-3">
          {section.definitions.map(([term, def]) => (
            <div key={term} className="flex items-start gap-3 text-[14px] leading-[1.65]">
              <span className="mt-[5px] w-1.5 h-1.5 min-w-[6px] rounded-full bg-ac/50 flex-shrink-0" />
              <span className="text-mu">
                <strong className="text-tx font-semibold">{term}</strong> — {def}
              </span>
            </div>
          ))}
        </div>
      )}

      {section.footer && (
        <p className="text-[14px] text-mu leading-[1.75] mt-4">{section.footer}</p>
      )}

      {section.contacts && (
        <div className="bg-bg3 border border-bd rounded-xl p-5 text-[14px] text-mu leading-[1.8]">
          <div><span className="text-tx font-medium">Bendrovė:</span> Burnos chirurgija, MB</div>
          <div><span className="text-tx font-medium">Įmonės kodas:</span> 303916962</div>
          <div>
            <span className="text-tx font-medium">El. paštas:</span>{" "}
            <a href="mailto:info@mymouth.app" className="text-ac hover:underline">info@mymouth.app</a>
          </div>
          <div>
            <span className="text-tx font-medium">Svetainė:</span>{" "}
            <a href="https://mymouth.app" className="text-ac hover:underline">mymouth.app</a>
          </div>
        </div>
      )}
    </section>
  );
}

export default function TermsPage() {
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
            Teisinis dokumentas
          </div>
          <h1 className="text-[32px] md:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08] mb-3">
            Naudojimosi sąlygos
          </h1>
          <p className="text-[14px] text-mu2">Paskutinių pakeitimų data: 2025 m.</p>
        </div>

        {/* Sections */}
        <div>{sections.map(renderSection)}</div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-bd py-7 px-5 md:px-[60px] flex flex-col md:flex-row justify-between items-center gap-3.5 text-center md:text-left">
        <div className="flex items-center gap-[7px] text-[15px] font-bold text-mu2">
          <Image src="/icon.webp" alt="MyMouth" width={20} height={20} className="rounded-[5px]" />
          MyMouth
        </div>
        <div className="flex gap-6">
          {[["Privatumas", "/privacy"], ["Sąlygos", "/terms"]].map(([l, href]) => (
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
