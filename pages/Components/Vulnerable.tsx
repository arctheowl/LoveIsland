import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Vulnerable() {
  return (
    <Card className="col-span-6" >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        ></CardMedia> */}
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
