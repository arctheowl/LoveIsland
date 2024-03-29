import Typography from "@mui/material/Typography";
import Singles from "../data/2022/CurrentSingles.json";

type Props = {
  theme: string;
};

const Vulnerable = (props: Props) => {
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
      {Singles[0].name !== " " ? (
        <div
          className={`${settings[number].themes} col-span-12 md:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto py-8`}
        >
          <Typography
            className="pt-4 justify-self-center md:p-0 pl-8"
            variant="h6"
            component="div"
          >
            Currently Single
          </Typography>
          <Typography
            className="pt-4 justify-self-center list-none"
            variant="h6"
            component="div"
          >
            {Singles.map((single) => {
              return <li key={single.name}>{single.name}</li>;
            })}
          </Typography>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Vulnerable;
