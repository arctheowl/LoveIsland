import Typography from "@mui/material/Typography";
import Vulnerable from "./Vulnerable";
import CountDown from "./CountDown";
import CurrentCouples from "./CurrentCouples";
import LineGraph from "./LineGraph";
import ThemeSwitch from "./ThemeSwitch";
import OffShow from "./OffShow";
import StackChart from "./StackChart";
import PreCasaCouples from "./PreCasaCouples";
import Sankey from "./Sankey";
import Winners from "./Winners";
import Confetti from "./Confetti";

type Props = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const FrontPage = (props: Props) => {
  const { theme, setTheme } = props;

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
        <Confetti />
        <Winners theme={theme} />
        <StackChart theme={theme} />
        <LineGraph theme={theme} />
        <Sankey theme={theme} />
        <CurrentCouples theme={theme} />
        <PreCasaCouples theme={theme} />
        {/* <CountDown theme={theme} /> */}
        <Vulnerable theme={theme} />
        <OffShow theme={theme} />
      </div>
    </>
  );
};

export default FrontPage;
