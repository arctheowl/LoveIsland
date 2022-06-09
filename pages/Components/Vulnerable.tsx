import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  theme: string;
};

const Vulnerable = (props: Props) => {
  const { theme } = props;

  const settings = [
    {
      name: "dark",
      themes: "bg-[#100C2A] text-white ",
      bg: "bg-[#100C2A]",
      text: "text-white"
    },
    {
      name: "light",
      themes: "text-black bg-white bg-opacity-80",
      bg: "bg-opacity-80",
      text: "text-slate-900"
    },
  ];

  let number = 0;
  if (theme === "light") {
    number = 1;
  }
  return (
    <>
      <Card
        className={`${settings[number].themes} col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography
          className={`${settings[number].bg} ${settings[number].text} pt-4 justify-self-center`}
          variant="h6"
          component="div"
        >
          Currently Vulnerable
        </Typography>
        <Typography
          className={`${settings[number].bg} ${settings[number].text} pt-4 justify-self-center`}
          variant="h6"
          component="div"
        >
          Liam :(
        </Typography>
      </Card>
    </>
  );
};

export default Vulnerable;
