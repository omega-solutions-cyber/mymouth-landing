'use client';

import { useState } from 'react';

const ITEMS = [
  {
    q: 'Ar programėlė nemokama?',
    a: 'Taip, MyMouth yra visiškai nemokama pacientams. Atsisiųskite iš App Store arba Google Play ir pradėkite nemokamai — jokios kreditinės kortelės nereikia.',
  },
  {
    q: 'Kokioms procedūroms skirta?',
    a: 'Danties traukimas (paprastas ir chirurginis), implantacija (vienas ar keli implantai), sinuso dugno pakėlimas ir viso žandikaulio atstatymas implantais. Kiekvienai procedūrai — atskiras personalizuotas planas.',
  },
  {
    q: 'Kiek laiko trunka gijimo stebėjimas?',
    a: 'Kasdieniai klausimynai trunka 10 dienų po implantacijos, traukimo ir sinuso pakėlimo. Po viso žandikaulio atstatymo — 14 dienų. Laiko linija iki galutinio protezavimo trunka iki 6 mėnesių.',
  },
  {
    q: 'Ar gydytojas mato mano duomenis?',
    a: 'Ne, jūsų gijimo duomenys yra privatūs. Galite patys pasirinkti dalintis informacija su gydytoju per eksporto funkciją arba siunčiant PDF.',
  },
  {
    q: 'Ar reikia įvesti gydytojo rekomendacijas?',
    a: 'Ne. Įvedus procedūros tipą, programėlė automatiškai sugeneruoja personalizuotą gijimo planą su standartinėmis rekomendacijomis. Galite papildyti savo gydytojo specifiniais nurodymais.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div className="reveal">
      {ITEMS.map((item, i) => (
        <div
          key={i}
          onClick={() => setOpen(open === i ? null : i)}
          className={`border-b border-bd cursor-pointer ${i === 0 ? 'border-t' : ''}`}
        >
          <div className="flex justify-between items-center py-[18px] text-[15px] font-semibold gap-5">
            <span>{item.q}</span>
            <span
              className={`text-lg flex-shrink-0 transition-transform duration-[250ms] ${
                open === i ? 'rotate-45 text-ac' : 'text-mu'
              }`}
            >
              ＋
            </span>
          </div>
          <div
            className={`text-sm text-mu leading-[1.65] overflow-hidden transition-all duration-[350ms] ${
              open === i ? 'max-h-[200px] pb-4' : 'max-h-0'
            }`}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}
