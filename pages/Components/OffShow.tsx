import Typography from "@mui/material/Typography";


type Props = {
  theme: string;
};

const Singles = ["Liam", "Afia"];

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
        className={`${settings[number].themes} col-span-12 md:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography
          className="pt-4 justify-self-center md:p-0 pl-8"
          variant="h6"
          component="div"
        >
          Off The Show
        </Typography>
        <Typography
          className="pt-4 justify-self-center list-none"
          variant="h6"
          component="div"
        >
          {Singles.map((single)=>{
            return <li key={single}>{single}</li>
          })}
        </Typography>
      </div>

  );
};

export default OffShow;
