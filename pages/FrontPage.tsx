import Typography from "@mui/material/Typography";
import Vulnerable from "../Components/Vulnerable";
import CountDown from "../Components/CountDown";
import CurrentCouples from "../Components/CurrentCouples";
import LineGraph from "../Components/LineGraph";
import ThemeSwitch from "../Components/ThemeSwitch";
import OffShow from "../Components/OffShow";

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
        <OffShow theme={theme} />
      </div>
    </>
  );
};

export default FrontPage;
