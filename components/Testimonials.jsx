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
    quote: '„Priminimai labai padeda nepamiršti vaistų. Viskas vienoje vietoje 👍"',
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
    quote:
      '„Po sinuso pakėlimo labai bijojau kiekvieno jutimo. App\'as kiekvieną dieną paaiškino kas normalu."',
    avatar: '👨',
    name: 'Tomas, 51 m.',
    role: 'Sinuso pakėlimas, Šiauliai',
  },
  {
    quote:
      '„Antibiotikų priminimai išgelbėjo — tikrai būčiau pamiršęs. O laiko linija iki protezavimo labai padeda."',
    avatar: '👨',
    name: 'Mindaugas, 38 m.',
    role: '2 implantai, Panevėžys',
  },
];

const IDLE_MS = 8000;
const AUTO_MS = 5000;

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const scrollerRef = useRef(null);
  const curRef = useRef(0);
  const programmaticRef = useRef(false);
  const userTouchedAt = useRef(0);

  useEffect(() => {
    curRef.current = cur;
  }, [cur]);

  const snapToIndex = (i, smooth = true) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[i];
    if (!scroller || !card) return;
    programmaticRef.current = true;
    scroller.scrollTo({ left: card.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    window.setTimeout(() => {
      programmaticRef.current = false;
    }, 700);
  };

  const goTo = (i) => {
    userTouchedAt.current = Date.now();
    setCur(i);
    snapToIndex(i);
  };

  // Track active card from scroll position
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let timer;
    const onScroll = () => {
      if (!programmaticRef.current) userTouchedAt.current = Date.now();
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        // At end of scroll → always treat last card as current
        if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4) {
          setCur(TESTIMONIALS.length - 1);
          return;
        }
        const cards = scroller.children;
        let nearest = 0;
        let minDiff = Infinity;
        for (let i = 0; i < cards.length; i++) {
          const diff = Math.abs(cards[i].offsetLeft - scroller.scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            nearest = i;
          }
        }
        setCur(nearest);
      }, 80);
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  // Auto-rotate
  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() - userTouchedAt.current < IDLE_MS) return;
      const next = (curRef.current + 1) % TESTIMONIALS.length;
      snapToIndex(next);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, []);

  // Click-drag for mouse, wheel-to-horizontal for desktop
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;
    let activePointerId = null;

    const onPointerDown = (e) => {
      if (e.pointerType === 'touch') return; // native handles touch
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startScrollLeft = scroller.scrollLeft;
      activePointerId = e.pointerId;
      userTouchedAt.current = Date.now();
      scroller.style.scrollSnapType = 'none';
      try {
        scroller.setPointerCapture(e.pointerId);
      } catch {}
    };

    const onPointerMove = (e) => {
      if (!dragging || e.pointerId !== activePointerId) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      if (moved) {
        e.preventDefault();
        scroller.scrollLeft = startScrollLeft - dx;
      }
    };

    const endDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      scroller.style.scrollSnapType = '';
      try {
        scroller.releasePointerCapture(activePointerId);
      } catch {}
      if (moved) {
        const cards = scroller.children;
        let nearest = 0;
        let minDiff = Infinity;
        for (let i = 0; i < cards.length; i++) {
          const diff = Math.abs(cards[i].offsetLeft - scroller.scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            nearest = i;
          }
        }
        snapToIndex(nearest);
        setCur(nearest);
      }
      activePointerId = null;
    };

    const onClick = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const onWheel = (e) => {
      // Trackpad horizontal — let browser handle natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.deltaY === 0) return;
      e.preventDefault();
      userTouchedAt.current = Date.now();
      scroller.scrollLeft += e.deltaY;
    };

    scroller.addEventListener('pointerdown', onPointerDown);
    scroller.addEventListener('pointermove', onPointerMove);
    scroller.addEventListener('pointerup', endDrag);
    scroller.addEventListener('pointercancel', endDrag);
    scroller.addEventListener('click', onClick, true);
    scroller.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      scroller.removeEventListener('pointerdown', onPointerDown);
      scroller.removeEventListener('pointermove', onPointerMove);
      scroller.removeEventListener('pointerup', endDrag);
      scroller.removeEventListener('pointercancel', endDrag);
      scroller.removeEventListener('click', onClick, true);
      scroller.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div className="reveal">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar max-w-[560px] mx-auto cursor-grab active:cursor-grabbing select-none overscroll-x-contain"
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-full bg-bg3 border border-bd rounded-[18px] p-6"
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
      <div className="flex gap-1.5 justify-center mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === cur ? 'bg-ac w-5' : 'bg-mu2 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
