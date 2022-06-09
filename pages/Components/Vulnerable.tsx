import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Vulnerable() {
  return (
    <Card className="col-span-6 text-center flex items-stretch bg-white bg-opacity-80 backdrop-blur-xl rounded drop-shadow-lg">
      <CardActionArea>
        <CardContent className="">
          <Typography gutterBottom variant="h6" component="div">
            Currently Vulnerable
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Liam :(
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
