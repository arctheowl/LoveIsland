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
  return (
    <>
      {theme === "dark" ? (
        <Card className="col-span-6 text-center flex items-stretch text-white bg-[#100C2A] backdrop-blur-xl rounded drop-shadow-lg">
          <CardActionArea>
            <CardContent className="">
              <Typography gutterBottom variant="h6" component="div">
                Currently Vulnerable
              </Typography>
              <Typography variant="h6">
                Liam :(
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <Card className="col-span-6 text-center  flex items-stretch bg-white bg-opacity-80 backdrop-blur-xl rounded drop-shadow-lg">
          <CardActionArea>
            <CardContent className="">
              <Typography gutterBottom variant="h6" component="div" >
                Currently Vulnerable
              </Typography>
              <Typography variant="h6">
                Liam :(
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default Vulnerable;
