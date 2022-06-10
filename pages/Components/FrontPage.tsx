import Typography from "@mui/material/Typography";
import Vulnerable from "./Vulnerable";
import CountDown from "./CountDown";
import CurrentCouples from "./CurrentCouples";
import LineGraph from "./LineGraph";
import ThemeSwitch from "./ThemeSwitch";

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
            My GF Watches Love Island
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
          My GF Watches Love Island
        </Typography>
        <div className="col-start-11">
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </div>
      )}

      <div className="grid grid-cols-12 gap-4 lg:px-24 lg:py-10 p-4 ">
        <LineGraph theme={theme} />
        <Vulnerable theme={theme} />
        <CountDown theme={theme} />
        <CurrentCouples theme={theme} />
      </div>
    </>
  );
};

export default FrontPage;
