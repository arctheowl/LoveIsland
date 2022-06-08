import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Vulnerable() {
  return (
    <Card className="col-span-6 text-center">
      <CardActionArea>
        <CardMedia
          component="img"
          height="40"
          image="/image/LiamVulnerable.jpeg"
          alt="Liam"
          className="w-1/2 lg:ml-56 md:ml-32 sm:ml-20 ml-10"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Currently Vulnerable
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Liam :(
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
