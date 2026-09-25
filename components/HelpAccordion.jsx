"use client";

import { useState } from "react";

export default function HelpAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.q}
          onClick={() => setOpen(open === i ? null : i)}
          className={`border-b border-bd cursor-pointer ${
            i === 0 ? "border-t" : ""
          }`}
        >
          <div className="flex justify-between items-center py-[18px] text-[15px] font-semibold gap-5">
            <span>{item.q}</span>
            <span
              className={`text-lg flex-shrink-0 transition-transform duration-[250ms] ${
                open === i ? "rotate-45 text-ac" : "text-mu"
              }`}
            >
              ＋
            </span>
          </div>
          <div
            className={`text-sm text-mu leading-[1.65] overflow-hidden transition-all duration-[350ms] ${
              open === i ? "max-h-[300px] pb-4" : "max-h-0"
            }`}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}
