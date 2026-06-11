import Image from "next/image";

export const metadata = {
  title: "Privatumo politika — MyMouth",
  description:
    "MyMouth privatumo politika. Sužinokite, kaip renkame, naudojame ir saugome jūsų asmens duomenis.",
};

const sections = [
  {
    id: "1",
    title: "1. Bendrosios nuostatos",
    subsections: [
      {
        id: "1.1",
        title: "1.1. Kas yra ši privatumo politika ir kas yra jūsų duomenų valdytojas?",
        content: `Šioje Privatumo politikoje mes, Burnos chirurgija, MB, įmonės kodas 303916962 (toliau – „Bendrovė", „mes", „mums" arba „mūsų"), kaip duomenų valdytojai aiškiname, kaip tvarkome jūsų asmens duomenis, kai lankotės mūsų svetainėje, naudojatės mūsų mobiliaja programele MyMouth, kreipiatės į mus per oficialius socialinių tinklų puslapius ar el. paštu ir (ar) naudojatės mūsų paslaugomis.

Mobialioji programelė MyMouth yra skirta pacientams, kuriems atliktos burnos chirurginės operacijos (dantų implantacija, dantų traukimas, sinuso dugno pakėlimas, viso žandikaulio atstatymas), ir siekia padėti jiems saugiai bei užtikrintai išgyventi pooperacinį laikotarpį.

Susisiekti su mumis galite el. paštu: info@mymouth.app`,
      },
      {
        id: "1.2",
        title: "1.2. Kas yra asmens duomenys?",
        content: `Mūsų vartotojų saugumas ir privatumas yra svarbus mūsų prioritetas. Asmens duomenys – tai bet kokia informacija, susijusi su identifikuotu ar identifikuojamu fiziniu asmeniu (pvz., jūsų vardas, el. pašto adresas, sveikatos duomenys ir pan.).

Tvarkydami jūsų asmens duomenis, vadovaujamės 2016/679 Bendruoju duomenų apsaugos reglamentu (toliau – „BDAR") ir kitais taikytinais teisės aktais, reglamentuojančiais asmens duomenų apsaugą.`,
      },
      {
        id: "1.3",
        title: "1.3. Klausimai dėl privatumo?",
        content: `Iškilus bet kokiems klausimams arba norint pasinaudoti šioje Privatumo politikoje numatytomis teisėmis, kreipkitės: info@mymouth.app`,
      },
    ],
  },
  {
    id: "2",
    title: "2. Ką rasite šioje privatumo politikoje?",
    content: `Šioje Privatumo politikoje rasite informaciją apie:`,
    list: [
      "duomenų tvarkymo principus, kuriuos taikome (3 skyrius);",
      "renkamus asmens duomenis, tvarkymo tikslus, teisinius pagrindus ir saugojimo laikotarpius (4 skyrius);",
      "asmens duomenų saugojimo laikotarpius (5 skyrius);",
      "kam perduodame jūsų asmens duomenis (6 skyrius);",
      "tiesioginę rinkodarą ir kitas rinkodaros operacijas (7 ir 8 skyriai);",
      "AI įrankius (9 skyrius);",
      "jūsų asmens duomenų saugumą (10 skyrius);",
      "jūsų teises, susijusias su asmens duomenimis (11 skyrius);",
      "kitus privatumo aspektus (12–18 skyriai).",
    ],
  },
  {
    id: "3",
    title: "3. Duomenų tvarkymo principai",
    content: `Laikomes šių pagrindinių duomenų tvarkymo principų:`,
    principles: [
      ["Teisėtumas, sąžiningumas ir skaidrumas", "tvarkome asmens duomenis teisėtais, sąžiningais ir skaidriais būdais."],
      ["Tikslų apribojimas", "tvarkome asmens duomenis nustatytais, aiškiai apibrėžtais ir teisėtais tikslais."],
      ["Duomenų kiekio minimizavimas", "renkame tik būtinus tikslui pasiekti duomenis."],
      ["Tikslumas", "siekiame, kad tvarkomi asmens duomenys būtų tikslūs ir naujinami."],
      ["Saugojimo trukmės apribojimas", "saugome asmens duomenis ne ilgiau, nei būtina nustatytam tikslui pasiekti."],
      ["Vientisumas ir konfidencialumas", "užtikrinamas tinkamas asmens duomenų saugumas taikant technines ir organizacines priemones."],
    ],
  },
  {
    id: "4",
    title: "4. Renkami asmens duomenys, tikslai, teisiniai pagrindai ir saugojimo laikotarpiai",
    subsections: [
      {
        id: "4.1",
        title: "4.1. Registracija ir paskyros kūrimas",
        content: `Kai kuriate paskyrą, galime tvarkyti: vardą (neprivalomą), el. pašto adresą, slaptažodį (šifruotą). Duomenis pateikiate tiesiogiai jūs.

Teisinis pagrindas: sutarties vykdymas (BDAR 6 str. 1 d. b p.).

Duomenys saugomi ne ilgiau kaip 5 (penkerius) metus nuo paskutinio naudojimosi paskyra arba iki paskyros ištrynimo.`,
      },
      {
        id: "4.2",
        title: "4.2. Personalizuoto plano suteikimas ir sveikatos duomenys",
        content: `Teikdami personalizuotą pooperacinį planą, galime tvarkyti: amžių, lytį, atliktos operacijos tipą (implantacija, dantų traukimas, sinuso dugno pakėlimas, viso žandikaulio atstatymas), operacijos datą, dantų būklę, dieninį patikrinimą (skausmo, tinimo, kraujavimo, bendro jautimosi rodiklius), implanto paso duomenis (gamintojas, modelis, serijos Nr., nuotrauka). Šie duomenys gali apimti ypatingus asmens duomenis, susijusius su sveikata.

Teisinis pagrindas: jūsų sutikimas (BDAR 6 str. 1 d. a p. ir 9 str. 2 d. a p.). Turite teisę bet kada atšaukti sutikimą.

Duomenys saugomi ne ilgiau kaip 2 (dveji) metai nuo paskutinio paskyros atnaujinimo arba iki sutikimo atšaukimo.`,
      },
      {
        id: "4.3",
        title: "4.3. Klientų aptarnavimas",
        content: `Tvarkydami jūsų užklausas, skundus ir kitus kreipimusis, galime tvarkyti: el. pašto adresą, kreipimosi turinį, susirašėjimo metaduomenis, kitą paskyros informaciją, būtiną jūsų klausimui spręsti.

Teisinis pagrindas: jūsų sutikimas (BDAR 6 str. 1 d. a p.) arba teisinis sąntaras, siekiant užtikrinti vienodą ir kokybišką konsultacinę praktiką (BDAR 6 str. 1 d. f p.).

Duomenys saugomi ne ilgiau kaip 3 (treji) metai nuo sutikimo suteikimo arba iki sutikimo atšaukimo.`,
      },
      {
        id: "4.4",
        title: "4.4. Svetainės ir mobiliosios programelės administravimas",
        content: `Svetainės ir programelės administravimui, funkcionalumo užtikrinimui ir statistinei analizei galime tvarkyti: įrenginio duomenis, IP adresą, geografinę vietą, naršyklės tipą, operacinę sistemą, įrenginio tipą, naudojimosi programele informaciją. Duomenys renkami naudojant slapukus ir panašias technologijas.

Teisinis pagrindas: jūsų sutikimas (BDAR 6 str. 1 d. b p.) arba teisinis sąntaras (BDAR 6 str. 1 d. f p.).

Duomenys saugomi ne ilgiau kaip 2 (dveji) metai.`,
      },
      {
        id: "4.5",
        title: "4.5. Socialinių tinklų paskyros",
        content: `Valdydami ir administruodami socialinių tinklų paskyras, galime tvarkyti: vartotojo profilio vardą, nuotrauką, reakcijas į mūsų turinį (patiktukus, komentarus, dalinimąsi).

Teisinis pagrindas: jūsų sutikimas (BDAR 6 str. 1 d. a p.).

Duomenys saugomi tol, kol galioja Bendrovės arba jūsų socialinės paskyros, nebent anksčiau pareikšite norą juos ištrinti.`,
      },
      {
        id: "4.6",
        title: "4.6. Teisiniai reikalavimai ir teisėti interesai",
        content: `Siekiant įvykdyti teisinę prievolę arba apsaugoti bei apginti teisėtus interesus (pvz., teisinėje ginčo procedūroje), galime tvarkyti jūsų asmens duomenis, būtinus konkrečiam tikslui.

Teisinis pagrindas: teisinė prievolė (BDAR 6 str. 1 d. c p.) arba teisėti interesai (BDAR 6 str. 1 d. f p.).

Duomenys saugomi tiek, kiek būtina teisėtiems interesams apsaugoti.`,
      },
    ],
  },
  {
    id: "5",
    title: "5. Kaip ilgai saugome jūsų asmens duomenis?",
    content: `Jūsų asmens duomenys, tvarkomi konkrečiu tikslu, saugomi ne ilgiau, nei būtina tam tikslui. Konkretūs saugojimo terminai numatyti 4 skyriuje.

Pasibaigus taikytiniam saugojimo laikotarpiui arba jūsų prašymu asmens duomenys sunaikinami naudojant perrašymo arba fizinio sunaikinimo metodus.

Kartais galime agreguoti, anonimizuoti arba depersonalizuoti asmens duomenis taip, kad jūsų būtų nebeįmanoma identifikuoti. Tokie duomenys nebelaikomi asmens duomenimis ir gali būti naudojami be apribojimų.`,
  },
  {
    id: "6",
    title: "6. Kam perduodame jūsų asmens duomenis?",
    content: `Galime atskleisti jūsų asmens duomenis:`,
    list: [
      "Draudimo bendrovėms, antstoliams, auditoriams, advokatams, notarams ir (ar) kitiems profesionaliems patarėjams – kiek būtina teisėtiems interesams apsaugoti.",
      "Prieššauktinės veiklos, rizikos ir atitikties tiekėjams – kiek būtina asmens duomenų apsaugai užtikrinti.",
      "AI paslaugų tiekėjams – kiek būtina klientų aptarnavimo funkcijoms užtikrinti (plačiau – 9 skyriuje).",
      "Kitiems paslaugų tiekėjams (serverių priežiūros, el. pašto, duomenų analitikos) – tiek, kiek būtina konkrečioms paslaugoms teikti.",
      "Valstybinėms institucijoms – kai to reikalauja teisės aktai.",
    ],
    footer: `Su visais trečiaisiais šalimis sudarome būtinas sutartis (pvz., duomenų tvarkymo sutartis) ir reikalaujame taikyti tinkamas organizacines ir technines priemones. Perduodant duomenis už EEE ribų, taikome Europos Komisijos patvirtintas standartines sutarčių sąlygas.`,
  },
  {
    id: "7",
    title: "7. Tiesioginė rinkodaros komunikacija",
    content: `Galime kreiptis į jus el. paštu, kad informuotume apie mūsų naujienas, pasiūlymus ar MyMouth programelės atnaujinimus. Taip pat galime naudoti jūsų asmens duomenis rinkodaros pranešimams personalizuoti.

Teisinis pagrindas: teisėti interesai (BDAR 6 str. 1 d. f p.).

Turite teisę bet kada atsisakyti rinkodaros komunikacijos, pasirinkdami atitinkamą nuorodą mūsų rinkodaros pranešimuose arba susisiekdami su mumis el. paštu info@mymouth.app.`,
  },
  {
    id: "8",
    title: "8. Kitos rinkodaros operacijos ir slapukai",
    content: `Galime naudoti socialinių tinklų platformų operatorių (pvz., „Google LLC", „Meta Platforms Inc.") rinkodaros įrankius ir perduoti jūsų asmens duomenis rinkodaros tikslams. Taip pat naudojame slapukus. Papildomos informacijos rasite mūsų Slapukų politikoje.`,
  },
  {
    id: "9",
    title: "9. AI įrankiai",
    content: `AI asistento funkcija šiuo metu nėra dalis MyMouth programelės ir bus pristatyta ateityje. Kai ši funkcija bus paleista, ši Privatumo politika bus atitinkamai atnaujinta, o jūs būsite informuoti.

Jei klientų aptarnavimo tikslais bus naudojami AI įrankiai, jūsų asmens duomenys (įskaitant su sveikata susijusius duomenis, kuriuos pateiksite kreipimosi metu) gali būti tvarkomi automatizuotai, siekiant efektyviai atsakyti į jūsų klausimus. Mes užtikrinsime, kad trečiosios šalys, teikiančios AI funkcionalumą, laikytųsi duomenų apsaugos reikalavimų.`,
  },
  {
    id: "10",
    title: "10. Jūsų asmens duomenų saugumas",
    content: `Taikome tinkamas technines ir organizacines priemones jūsų asmens duomenims apsaugoti. Organizacinės priemonės apima prieigos apribojimą tik įgaliotiems asmenims, konfidencialumo sutarčių sudarymą, mokymus, atitinkamų politikų kūrimą ir įgyvendinimą. Techninės priemonės apima interneto saugumo priemones, prieigos valdymo įrankius, autentifikaciją ir fizinį saugumą.

Asmens duomenys saugomi Bendrovės arba mūsų rangovų serveriuose, kurie yra įpareigoti saugoti duomenų konfidencialumą. Nepaisant įdiegtų apsaugos priemonių, negalime visiškai garantuoti absoliutaus jūsų asmens duomenų saugumo.`,
  },
  {
    id: "11",
    title: "11. Jūsų teisės",
    content: `Pagal duomenų apsaugos teisės aktus jūs turite šias pagrindines teises:`,
    rights: [
      ["Teisė būti informuotam", "apie asmens duomenų tvarkymą."],
      ["Teisė susipažinti su duomenimis", "– patvirtinimas, ar tvarkome jūsų asmens duomenis, ir prieiga prie jų."],
      ["Teisė į klaidų ištaisymą", "– netikslių asmens duomenų ištaisymas."],
      ["Teisė į ištrynimą", "(„teisė būti pamirštam") – tam tikrais atvejais."],
      ["Teisė apriboti tvarkymą", "– tam tikromis aplinkybėmis."],
      ["Teisė į duomenų perkeliamumą", "– gauti jūsų duomenis struktūrizuotu, įprastu formatu."],
      ["Teisė nesutikti su tvarkymu", "– dėl konkrečios situacijos, ypač tiesioginės rinkodaros atveju."],
      ["Teisė atšaukti sutikimą", "– bet kada, nepaveikiant atšaukimu iki to laiko atlikto tvarkymo teisėtumo."],
      ["Teisė nebūti automatizuoto sprendimų priėmimo subjektu", "– tam tikrais atvejais."],
    ],
    footer: `Savo teises galite įgyvendinti kreipdamiesi el. paštu info@mymouth.app. Atsakysime per 1 mėnesį nuo jūsų kreipimosi gavimo (sudėtingesniais atvejais – per 3 mėn.). Taip pat turite teisę pateikti skundą priežiūros institucijai: Valstybinė duomenų apsaugos inspekcija, Lygiaių gatvė 17, LT-10312 Vilnius, el. paštas ada@ada.lt, www.vdai.lrv.lt.`,
  },
  {
    id: "12",
    title: "12. Trečiųjų šalių svetainės",
    content: `Svetainėje galite rasti nuorodų į partnerių ar kitas trečiųjų šalių svetaines. Atkreipkite dėmesį, kad tos svetainės turi savo privatumo politikas ir mes neatsakome už jas. Rekomenduojame susipažinti su jų privatumo politikomis prieš pateikdami bet kokius asmens duomenis.`,
  },
  {
    id: "13",
    title: "13. Nepilnamečių asmens duomenys",
    content: `Mūsų Svetainė ir Mobialioji programelė yra skirtos tik asmenims, sulaukusiems 18 metų.

Jei turėtume pagrindo manyti, kad mūsų duomenų bazėje saugomi jaunesnių kaip 18 metų asmenų asmens duomenys be tėvų ar globos teisių turėtojo sutikimo, juos ištrinsime. Jei sužinote, kad jūsų vaikas pateikė mums savo asmens duomenis be jūsų sutikimo, kreipkitės: info@mymouth.app`,
  },
  {
    id: "14",
    title: "14. Teisė pateikti skundą",
    content: `Jei manote, kad jūsų teisės buvo pažeistos, galite kreiptis į mus el. paštu info@mymouth.app. Taip pat galite pateikti skundą priežiūros institucijai ES valstybėje narėje pagal įprastinę gyvenamąją vietą, darbo vietą arba tariamo pažeidimo vietą. Mūsų duomenų tvarkymą prižiūri Valstybinė duomenų apsaugos inspekcija, Lygiaių gatvė 17, LT-10312 Vilnius, el. paštas ada@ada.lt, www.vdai.lrv.lt.`,
  },
  {
    id: "15",
    title: "15. Duomenų kasimas",
    content: `Atkreipiame dėmesį, kad automatizuotas duomenų rinkimas (angl. data scraping) iš mūsų Svetainės yra griežtai draudžiamas be raštiško mūsų sutikimo. Tai apima, be kita ko, programinės įrangos, botų, skriptų ar kitų automatizuotų priemonių naudojimą turiniui rinkti, kopijuoti ar reprodukuoti.`,
  },
  {
    id: "16",
    title: "16. Jūsų duomenų atnaujinimas",
    content: `Prašome informuoti mus, jei jūsų asmens duomenys, kuriuos saugome, turėtų būti patikslinti ar atnaujinti. Kreipkitės: info@mymouth.app`,
  },
  {
    id: "17",
    title: "17. Privatumo politikos pakeitimai",
    content: `Pasiliekame teisę bet kada keisti šią Privatumo politiką. Bet kokie pakeitimai bus skelbiami Svetainėje, o esant reikšmingiems pakeitimams, galime jus informuoti el. paštu. Pakeitimai įsigalioja nuo jų paskelbimo datos.`,
  },
  {
    id: "18",
    title: "18. Kontaktai",
    content: null,
    contacts: true,
  },
];

function renderSection(section) {
  return (
    <section key={section.id} className="mb-10">
      <h2 className="text-[18px] md:text-[20px] font-bold tracking-[-0.02em] text-tx mb-4 pb-3 border-b border-bd">
        {section.title}
      </h2>

      {section.subsections
        ? section.subsections.map((sub) => (
            <div key={sub.id} className="mb-6">
              <h3 className="text-[15px] font-semibold text-tx mb-2">{sub.title}</h3>
              <div className="text-[14px] text-mu leading-[1.75] whitespace-pre-line">{sub.content}</div>
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

      {section.principles && (
        <div className="flex flex-col gap-3">
          {section.principles.map(([bold, rest]) => (
            <div key={bold} className="flex items-start gap-3 text-[14px] leading-[1.65]">
              <span className="mt-[5px] w-1.5 h-1.5 min-w-[6px] rounded-full bg-ac/50 flex-shrink-0" />
              <span className="text-mu">
                <strong className="text-tx font-semibold">{bold}</strong> — {rest}
              </span>
            </div>
          ))}
        </div>
      )}

      {section.rights && (
        <div className="flex flex-col gap-2.5 mb-4">
          {section.rights.map(([bold, rest]) => (
            <div key={bold} className="flex items-start gap-3 text-[14px] leading-[1.65]">
              <span className="mt-[5px] w-1.5 h-1.5 min-w-[6px] rounded-full bg-ac/50 flex-shrink-0" />
              <span className="text-mu">
                <strong className="text-tx font-semibold">{bold}</strong>
                {rest}
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

export default function PrivacyPage() {
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
            Privatumo politika
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
