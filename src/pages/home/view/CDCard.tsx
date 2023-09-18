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
} from "@mui/material";
import "../../../App.css";

interface Props {
  id: string;
  heading: string;
  price: number;
  stock: number;
  imgPath: string;
  handleOpen: () => void;
  deleteCard: (id: string) => void;
  handleEdit:()=>void;
}

function CDCard({
  id,
  heading,
  price,
  stock,
  imgPath,
  handleOpen,
  deleteCard,
  handleEdit, 
}: Props) {
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
                {"In Stock(" + stock + ")"}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {price + " USD"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleEdit} variant="contained" color="success">
                Update
              </Button>
              <IconButton aria-label="delete" size="large" color="error">
                <DeleteIcon
                  onClick={() => deleteCard(id)}
                  fontSize="inherit"
                />
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

export default CDCard;
