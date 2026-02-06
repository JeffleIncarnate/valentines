import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import type { TSize } from "../core/types/size";
import { PHRASES } from "../core/constants/phrases";
import { INCREMENT_SIZE } from "../core/constants/consts";
import { randomIntFromInterval } from "../core/utils/rand";

export const Home = () => {
  const navigate = useNavigate();

  // size of yes button
  const [size, setSize] = useState<TSize>({
    x: 80,
    y: 40,
  });

  // text for the no button
  const [displayText, setDisplayText] = useState<string>("NO");

  // new position for the no buttons
  const [pos, setPos] = useState<TSize>({
    x: 0,
    y: 0,
  });

  // set a random phrase to the no button.
  useEffect(() => {
    const random = PHRASES[Math.floor(Math.random() * PHRASES.length)];

    if (size.x !== 80) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayText(random);
    }
  }, [size]);

  // choose a random position for the no button to move to
  useEffect(() => {
    const randY = randomIntFromInterval(-400, 400);
    const randX = randomIntFromInterval(-400, 400);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPos({
      x: randX,
      y: randY,
    });
  }, [size]);

  return (
    <div className="flex h-lvh w-full flex-col items-center justify-center gap-4 overflow-x-hidden bg-[url(/background.png)] bg-cover text-white">
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
            style={{
              top: `${pos.y}px`,
              left: `${pos.x}px`,
            }}
            className="relative h-10 min-w-20 rounded-md bg-red-600 px-4 py-2 font-bold text-white"
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
