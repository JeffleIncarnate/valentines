import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import type { TSize } from "../core/interface/size";
import { PHRASES } from "../core/constants/phrases";
import { INCREMENT_SIZE } from "../core/constants/consts";

export const Home = () => {
  const navigate = useNavigate();

  const [size, setSize] = useState<TSize>({
    x: 80,
    y: 40,
  });
  const [displayText, setDisplayText] = useState<string>("NO");

  useEffect(() => {
    const random = PHRASES[Math.floor(Math.random() * PHRASES.length)];

    if (size.x !== 80) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayText(random);
    }
  }, [size]);

  return (
    <div className="flex h-lvh w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[url(/background.png)] bg-cover text-white">
      <h1 className="text-4xl font-bold">Will 🫵 be my valentine?</h1>

      <div className="flex items-center gap-4">
        <button
          style={{
            height: `${size.y}px`,
            width: `${size.x}px`,
          }}
          className="rounded-md bg-green-600 px-4 py-2 font-bold text-white"
          onClick={() => {
            navigate({
              to: "/yes",
            });
          }}
        >
          YES
        </button>

        {size.x < 1100 && (
          <button
            className="h-10 min-w-20 rounded-md bg-red-600 px-4 py-2 font-bold text-white"
            onClick={() => {
              setSize((s) => {
                return {
                  x: (s.x += INCREMENT_SIZE),
                  y: (s.y += INCREMENT_SIZE),
                };
              });
            }}
          >
            {displayText}
          </button>
        )}
      </div>
    </div>
  );
};
