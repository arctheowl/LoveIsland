import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BoysTimeline from "../../data/TimeLineBoys.json";
import { useState } from "react";
import { Typography } from "@mui/material";

type Props = {
  theme: string;
};

export default function BoySoloTimeline({ theme }: Props) {
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

  const [selection, setSelection] = useState("Luca");

  let steps = ["-"];
  BoysTimeline.map((Boy) => {
    console.log(Boy);
    if (Boy.name === selection) {
        Boy.data.map((data) => {
        steps.push(data.partner);
      });
    }
  });

  return (
    <div
      className={`${settings[number].themes} col-span-12 md:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
    >
      <Typography
        variant="h6"
        component="div"
        className="list-none justify-self-center pt-4 md:p-0 pl-8"
      >
        Boys Journey
      </Typography>
      <Box sx={{ width: "100%", padding: 5 }}>
        {/* <Dropdown setSelection={setSelection} selection={selection} timeLine={BoysTimeline}/> */}
        <Stepper alternativeLabel sx={{ padding: 5 }}>
          {steps.map((label, index) => {
            if (label !== "-") {
              return (
                <Step key={index}>
                  <StepLabel key={label + index}>{label}</StepLabel>
                </Step>
              );
            }
          })}
        </Stepper>
      </Box>
    </div>
  );
}