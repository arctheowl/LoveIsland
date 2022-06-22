import ReactECharts from "echarts-for-react";
import Typography from "@mui/material/Typography";
import {HeatMapOptions} from "../../data/HeatMap"

type Props = {
  theme: string;
};

const HeatMap = (props: Props) => {
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
    <div className={`grid grid-cols-2 gap-4 col-span-12`}>
      <div
        className={`${settings[number].themes} col-span-2 lg:col-span-1 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography sx={{ fontSize: 24 }} className="justify-self-center">
          Boys Bar
        </Typography>

        <ReactECharts
          option={HeatMapOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default HeatMap;
