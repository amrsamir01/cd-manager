import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import "../../../App.css";
import React from "react";

interface Props {
  id: string;
  heading: string;
  price: number;
  stock: number;
  imgPath: string;
  handleOpen: () => void;
  deleteCard: (id: string) => void;
  handleEdit: () => void;
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                <DeleteIcon onClick={/*() => deleteCard(id)*/handleClickOpen} fontSize="inherit" />
              </IconButton>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Do you want to delete this card?"}
                </DialogTitle>
                <DialogActions>
                  <Button onClick={handleClose} sx={{ color: "white", backgroundColor: "red", right: "15px"}}>No</Button>
                  <Button onClick={() => deleteCard(id)} sx={{ color: "white", backgroundColor: "green", right: 10 }} autoFocus>
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
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
