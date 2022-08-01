import ReactECharts from "echarts-for-react";
import Typography from "@mui/material/Typography";
import { boysOptions, girlsOptions } from "../../data/SankeyOptions";

type Props = {
  theme: string;
};

const Sankey = (props: Props) => {
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
        className={`${settings[number].themes} col-span-2 lg:col-span-1 backdrop-blur-xl rounded-2xl drop-shadow-lg grid-cols-1 grid justify-items-auto animate-fade-in-left`}
      >
        <Typography sx={{ fontSize: 24 }} className="justify-self-center">
          Casa Amor Boys
        </Typography>

        <ReactECharts
          option={boysOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={theme}
        />
      </div>

      <div
        className={`${settings[number].themes} col-span-2 lg:col-span-1 backdrop-blur-xl rounded-2xl drop-shadow-lg grid-cols-1 grid justify-items-auto animate-fade-in-right`}
      >
        <Typography sx={{ fontSize: 24 }} className="justify-self-center">
          Casa Amor Girls
        </Typography>
        <ReactECharts
          option={girlsOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Sankey;
