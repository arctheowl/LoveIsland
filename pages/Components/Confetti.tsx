import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadConfettiPreset } from "tsparticles-preset-confetti";

const Confetti = () => {
  const options: any = {
    // ...
    emitters: [
      {
        life: {
          duration: 5,
          count: 1,
        },
        position: {
          x: 0,
          y: 30,
        },
        particles: {
          move: {
            direction: "top-right",
          },
        },
      },
      {
        life: {
          duration: 5,
          count: 1,
        },
        position: {
          x: 100,
          y: 30,
        },
        particles: {
          move: {
            direction: "top-left",
          },
        },
      },
    ],
    preset: "confetti",
  };

  return <Particles options={options} />;
};

export default Confetti;
