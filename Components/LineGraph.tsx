import ReactECharts from "echarts-for-react";
import Typography from "@mui/material/Typography";
import {boysOptions, girlsOptions} from "./LineOptions"

type Props = {
  theme: string;
};

const LineGraph = (props: Props) => {
  const { theme } = props;

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
    <>
      <div
        className={`${settings[number].themes} col-span-12 lg:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography sx={{ fontSize: 24 }} className="justify-self-center">
          Boys Timeline
        </Typography>

        <ReactECharts
          option={boysOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={theme}
        />
      </div>

      <div
        className={`${settings[number].themes} col-span-12 lg:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography sx={{ fontSize: 24 }} className="justify-self-center">
          Girls Timeline
        </Typography>
        <ReactECharts
          option={girlsOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={theme}
        />
      </div>
    </>
  );
};

export default LineGraph;