import Typography from "@mui/material/Typography";

import { useState } from "react";
import Select from "./Select";
import StackChart from "./StackChart";
import ThemeSwitch from "./ThemeSwitch";
import ContestantImages from "../data/2023/ContestantImages.json";
import CurrentCouples from "../data/2023/CurrentCouples.json";
import Bio from "./Bio";

type Props = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const FrontPage = (props: Props) => {
  const { theme, setTheme } = props;
  const [selection, setSelection] = useState("");

  return (
    <>
      {theme === "dark" ? (
        <div className="grid grid-cols-12 gap-4 p-4 ">
          <Typography
            sx={{ fontSize: 24 }}
            className="text-slate-100 text-center underline font-bold md:col-start-5 md:col-span-4 col-span-10"
          >
            Love Island Tracker
          </Typography>
          <div className="col-start-11">
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4 p-4 ">
          <Typography
            sx={{ fontSize: 24 }}
            className="text-slate-900 text-center underline font-bold md:col-start-5 md:col-span-4 col-span-10"
          >
            Love Island Tracker
          </Typography>
          <div className="col-start-11">
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-12 gap-4 lg:px-24 lg:py-10 p-4 ">
        <Select setSelection={setSelection} />
        <Bio selection={selection} />
        <StackChart theme={theme} />
        {/* <LineGraph theme={theme} />
        <Sankey theme={theme} />
        <CurrentCouples theme={theme} />
        <PreCasaCouples theme={theme} />
        {/* <CountDown theme={theme} /> 
        <Vulnerable theme={theme} />
        <OffShow theme={theme} /> */}
      </div>
    </>
  );
};

export default FrontPage;
