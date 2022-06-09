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
    {name: 'dark', themes: 'text-white bg-[#100C2A] col-span-6 text-center flex items-stretch backdrop-blur-xl rounded drop-shadow-lg'},
    {name: 'light', themes: 'text-black col-span-6 text-center flex items-stretch bg-white bg-opacity-80 backdrop-blur-xl rounded drop-shadow-lg'}
  ]
  
  let number = 0
  if (theme === 'light' ){
    number = 1
  }
  return (
    <>
      <Card className={settings[number].themes}>
        <CardActionArea>
          <CardContent className="">
            <Typography gutterBottom variant="h6" component="div">
              Currently Vulnerable
            </Typography>
            <Typography variant="h6">Liam :(</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Vulnerable;
