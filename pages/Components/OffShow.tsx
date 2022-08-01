import Typography from "@mui/material/Typography";
import EveryBoy from "../../data/EveryTimeLineBoys.json";
import EveryGirl from "../../data/EveryTimeLineGirls.json";

type Props = {
  theme: string;
};

// const Singles = [
//   "Liam",
//   "Afia",
//   "Remi",
//   "Amber",
//   "Ikenna",
//   "Charlie",
//   "Billy",
//   "Danica",
//   "Paige",
//   "Jazmine",
//   "Cheyanne",
//   "Chyna",
//   "Coco",
//   "Jaques",
//   "Summer",
//   "Reece",
//   "Natalia",
//   "Adam",
//   "Antigoni",
//   "Jack",
//   "George",
//   "Samuel",
//   "Mollie",
//   "Jay",
//   "Deji",
//   "Lacy",
//   "Jaime",
// ]

const OffShow = (props: Props) => {
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
    <div
      className={`${settings[number].themes} col-span-12 backdrop-blur-xl rounded-2xl drop-shadow-lg grid-cols-1 grid justify-items-auto py-8`}
    >
      <Typography
        className="py-4 justify-self-center md:pb-10 pl-8"
        variant="h6"
        component="div"
      >
        Off The Show
      </Typography>

      <div className="flex flex-wrap list-none gap-5 flex-grow md:flex-col md:h-52 md:pl-10">
        {EveryBoy.map((single) => {
          return (
            <li key={single.name}>
              <p className="text-lg">{single.name}</p>
            </li>
          );
        })}
        {EveryGirl.map((single) => {
          return (
            <li key={single.name}>
              <p className="text-lg">{single.name}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default OffShow;
