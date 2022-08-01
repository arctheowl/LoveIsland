import ReactECharts from "echarts-for-react";
import Typography from "@mui/material/Typography";
import { boysOptions, girlsOptions, everyBoysOptions, everyGirlsOptions } from "../../data/LineOptions";
import { useState } from "react";
import { FormControl, FormControlLabel, Switch } from "@mui/material";

type Props = {
  theme: string;
};

const LineGraph = (props: Props) => {
  const { theme } = props;
  const [boysSelection, setBoysSelection] = useState<boolean>(false);
  const [girlSelection, setGirlssSelection] = useState<boolean>(false);
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
        className={`${settings[number].themes} col-span-2 lg:col-span-1 backdrop-blur-xl rounded-2xl drop-shadow-lg grid-cols-3 grid justify-items-auto animate-fade-in-left`}
      >
        <FormControl
          component="fieldset"
          className="col-span-1 justify-self-start"
        >
          <FormControlLabel
            value="top"
            control={<Switch color="primary" size="small" />}
            label="Current/Out"
            labelPlacement="top"
            onChange={() => setBoysSelection(!boysSelection)}
          />
        </FormControl>
        <Typography sx={{ fontSize: 24 }} className="justify-self-start">
          Boys Timeline
        </Typography>
        <div className="col-span-3">{boysSelection ? (
            <ReactECharts
              option={everyBoysOptions}
              notMerge={true}
              lazyUpdate={true}
              theme={theme}
            />
          ) : (
            <ReactECharts
              option={boysOptions}
              notMerge={true}
              lazyUpdate={true}
              theme={theme}
            />
          )}</div>
      </div>

      <div
        className={`${settings[number].themes} col-span-2 lg:col-span-1 backdrop-blur-xl rounded-2xl drop-shadow-lg grid-cols-3 grid justify-items-auto animate-fade-in-right`}
      >
        <FormControl
          component="fieldset"
          className="col-span-1 justify-self-start"
        >
          <FormControlLabel
            value="top"
            control={<Switch color="primary" size="small" />}
            label="Current/Out"
            labelPlacement="top"
            onChange={() => setGirlssSelection(!girlSelection)}
          />
        </FormControl>
        <Typography sx={{ fontSize: 24 }} className="justify-self-start">
          Girls Timeline
        </Typography>
        <div className="col-span-3">{ girlSelection ? (
            <ReactECharts
              option={everyGirlsOptions}
              notMerge={true}
              lazyUpdate={true}
              theme={theme}
            />
          ) : (
            <ReactECharts
              option={girlsOptions}
              notMerge={true}
              lazyUpdate={true}
              theme={theme}
            />
          )}</div>
      </div>
    </div>
  );
};

export default LineGraph;
