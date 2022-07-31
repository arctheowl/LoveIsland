import React from "react";
import { FaCrown, FaMedal } from "react-icons/fa";
import { RiNumber4, RiNumber5 } from "react-icons/ri";
import Firework from "./Fireworks";
import Confetti from "./Confetti";

type IProps = {
  theme: string;
};

interface IListofWinners {
  boy: string;
  girl: string;
}

const ListofWinners = new Map<number, IListofWinners>([
  [
    1,
    {
      boy: "Davide",
      girl: "Ekin-Su",
    },
  ],
  [
    2,
    {
      boy: "Dami",
      girl: "Indiyah",
    },
  ],
  [
    3,
    {
      boy: "Luca",
      girl: "Gemma",
    },
  ],
  [
    4,
    {
      boy: "Andrew",
      girl: "Tasha",
    },
  ],
  [
    5,
    {
      boy: "Adam",
      girl: "Paige",
    },
  ],
]);

const Winners = ({ theme }: IProps) => {
  const settings = [
    {
      name: "dark",
      themes: "bg-[#100C2A] text-white",
      bg: "bg-[#100C2A]",
      text: "text-white",
    },
    {
      name: "light",
      themes: "bg-white text-black bg-opacity-80 ",
      bg: "bg-[#100C2A]",
      text: "text-black",
    },
  ];

  let number = 0;
  if (theme === "light") {
    number = 1;
  }
  return (
    <div className={`gap-4 col-span-12`}>
      <div
        className={`${settings[number].themes} lg:col-span-1 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto animate-fade-in-left p-5`}
      >
        <div className="flex flex-col justify-center items-center text-4xl py-5">
          Winners
        </div>
        <div className="flex flex-col justify-center items-center text-4xl  gap-3 ">
          <div className="flex gap-3">
            <div className="flex gap-3 text-[#ffd700] hover:animate-wiggle">
              <FaCrown />
            </div>
            <h1>{ListofWinners.get(1)?.boy}</h1>
            <div className="flex flex-col justify-center items-center text-lg  gap-3">
              <Confetti />
            </div>
            <h1>{ListofWinners.get(1)?.girl}</h1>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3 text-[#d4d2cf] hover:animate-spin">
              <FaCrown />
            </div>
            <h1>{ListofWinners.get(2)?.boy}</h1>
            <h1>{ListofWinners.get(2)?.girl}</h1>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3 text-[#cd7f32] hover:animate-bounce">
              <FaCrown />
            </div>
            <h1>{ListofWinners.get(3)?.boy}</h1>
            <h1>{ListofWinners.get(3)?.girl}</h1>
          </div>
          <div className="flex gap-3">
            <RiNumber4 /> <h1>{ListofWinners.get(4)?.boy}</h1>
            <h1>{ListofWinners.get(4)?.girl}</h1>
          </div>
          <div className="flex gap-3">
            <RiNumber5 /> <h1>{ListofWinners.get(5)?.boy}</h1>
            <h1>{ListofWinners.get(5)?.girl}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
