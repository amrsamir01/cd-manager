import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  colors,
} from "@mui/material";
import "../../../App.css";

interface Props {
  heading: string;
  price: string;
  stock: string;
  imgPath: string;
}

function createCard({ heading, price, stock, imgPath }: Props) {
  return (
    <>
      <Card sx={{ width: 500, padding: 2 }}>
        <Box display="flex">
          <Box display="flow" gap={3} width="40%" align-items="flex-start">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {heading}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {stock}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success">
                Update
              </Button>
              <IconButton aria-label="delete" size="large" color="error">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </CardActions>
          </Box>
          <CardActionArea>
            <CardMedia
              component="img"
              width="100"
              sx={{ objectFit: "contain", maxHeight: "300px" }}
              image={imgPath}
              alt={heading}
            />
          </CardActionArea>
        </Box>
      </Card>{" "}
    </>
  );
}

export default createCard;
