'use client';

import { useEffect, useRef, useState } from 'react';

const TESTIMONIALS = [
  {
    quote: '„Pagaliau aiškiai supratau, kas vyksta kiekvieną dieną. Ramybė neįkainojama!"',
    avatar: '👩',
    name: 'Eglė, 34 m.',
    role: 'Implantacija, Vilnius',
  },
  {
    quote: '„Priminimai labai padeda nepamirški vaistų. Viskas vienoje vietoje 👍"',
    avatar: '👨',
    name: 'Mantas, 42 m.',
    role: 'Implantacija, Kaunas',
  },
  {
    quote: '„Labai patogu turėti visus dokumentus ir nuotraukas savo telefone."',
    avatar: '👩',
    name: 'Rasa, 29 m.',
    role: 'Implantacija, Klaipėda',
  },
  {
    quote: '„Po sinuso pakėlimo labai bijojau kiekvieno jutimo. App\'as kiekvieną dieną paaiškino kas normalu."',
    avatar: '👨',
    name: 'Tomas, 51 m.',
    role: 'Sinuso pakėlimas, Šiauliai',
  },
  {
    quote: '„Antibiotikų priminimai išgelbėjo — tikrai būčiau pamiršęs. O laiko linija iki protezavimo labai padeda."',
    avatar: '👨',
    name: 'Mindaugas, 38 m.',
    role: '2 implantai, Panevėžys',
  },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setCur((c) => (c + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const cardW = track.children[0].offsetWidth + 18;
    track.style.transform = `translateX(-${cur * cardW}px)`;
  }, [cur]);

  return (
    <>
      <div className="overflow-hidden relative reveal">
        <div ref={trackRef} className="flex gap-[18px] transition-transform duration-500 ease-out">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-bg3 border border-bd rounded-[18px] p-6 flex-shrink-0"
            >
              <div className="text-yw text-[13px] tracking-[2px] mb-[10px]">★★★★★</div>
              <div className="text-sm text-tx leading-[1.6] mb-4 italic">{t.quote}</div>
              <div className="flex items-center gap-[10px]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[15px] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #5b7fff, #8b5fff)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[13px] font-semibold">{t.name}</div>
                  <div className="text-[11px] text-mu">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-1.5 justify-center mt-6 reveal">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === cur ? 'bg-ac w-5' : 'bg-mu2 w-1.5'
            }`}
          />
        ))}
      </div>
    </>
  );
}
