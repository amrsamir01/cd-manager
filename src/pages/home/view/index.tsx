import "../../../App.css";
import FileDrop from "./DragDrop";
import {
  Button,
  Typography,
  Box,
  Grid,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Toolbar,
} from "@mui/material";
import CDCard from "./CDCard";
import fifa from "../../../images/fifa.jpeg";
import cod from "../../../images/cod.jpeg";
import spider from "../../../images/spider.jpg";
import box from "../../../images/box.jpeg";
import fort from "../../../images/fortnite.jpeg";
import wwe from "../../../images/wwe.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface Card {
  name: string;
  imageSource: string;
  price: string;
  stock: string;
  description: string;
  category: string;
}

function View() {
  const [category, setCategory] = useState("");
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 600,
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flow",
    padding: "10px",
  };
  const cards: Card[] = [
    {
      imageSource: fifa,
      name: "FIFA 2023",
      price: "50.99 USD",
      stock: "In Stock (13)",
      description:
        "FIFA 23 features the men's World Cup game mode and the women's World Cup game mode.",
      category: "Sport",
    },
    {
      imageSource: cod,
      name: "Call of Duty",
      price: "65.99 USD",
      stock: "In Stock (0)",
      description:
        "As a first-person shooter, Call of Duty places the player in control of an infantry soldier who makes use of various authentic World War II firearms in combat.",
      category: "War",
    },
    {
      imageSource: spider,
      name: "Spider Man",
      price: "65.99 USD",
      stock: "In Stock (0)",
      description:
        "Marvel's Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker, under his superhero identity Spider-Man, through Manhattan, New York City to fight crime.",
      category: "third-person action-adventure",
    },
    {
      imageSource: box,
      name: "Boxville",
      price: "40.99 USD",
      stock: "In Stock (20)",
      description:
        "Boxville is an award-winning adventure puzzle game about speechless cans living in the city of boxes and drawing doodles on cardboards to tell the stories. Boxville is 2-in-1: an animated film and a puzzle game.",
      category: "Adventure",
    },
    {
      imageSource: fort,
      name: "Fortnite",
      price: "39.99 USD",
      stock: "In Stock (0)",
      description:
        "Fortnite is a third-person shooter game where up to 100 players compete to be the last person or team standing. You can compete alone or join a team of up to four. You progress through the game by exploring the island, collecting weapons, building fortifications and engaging in combat with other players.",
      category: "Battle Royale",
    },
    {
      imageSource: wwe,
      name: "WWE",
      price: "69.99 USD",
      stock: "In Stock (9)",
      description:
        "The world of WWE is your battleground with over the top, arcade action as your favorite WWE Superstars and Legends battle in interactive environments around the world.",
      category: "Sports",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Card>({});

  const onSubmit = (data: Card) => {
    console.log(data);
  };

  return (
    <>
      <Typography variant="h2" component="h2" align="center" padding="20px">
        CDs List
      </Typography>
      <Box display={"flex"} justifyContent={"flex-end"} padding="30px">
        <Button variant="contained" color="success" onClick={handleOpen}>
          Create CD
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Toolbar variant="dense" sx={{ flexDirection: "row-reverse" }}>
            <IconButton sx={{ backgroundColor: "red" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Typography variant="h4" component="div" padding="20px">
            Create CD
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" gap="8%">
              <Box
                display="grid"
                gap="20px"
                padding="20px"
                sx={{ width: "300px" }}
              >
                <Controller
                  control={control}
                  rules={{
                    maxLength: 10,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      label="Name"
                      placeholder="Enter CD Name"
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                  name="name"
                />
                {errors.name && (
                  <Typography sx={{ color: "red" }}>
                    CD Name Not Valid
                  </Typography>
                )}

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Sports"}>Sports</MenuItem>
                    <MenuItem value={"Battle Royale"}>Battle Royale</MenuItem>
                    <MenuItem value={"War"}>War</MenuItem>
                  </Select>
                </FormControl>
                <Controller
                  control={control}
                  rules={{
                    maxLength: 3,
                    minLength: 0,
                    pattern: /^[0-9]*$/i
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      label="Price"
                      placeholder="Enter CD Price"
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                  name="price"
                />
                {errors.price && (
                  <Typography sx={{ color: "red" }}>
                    Invalid Price
                  </Typography>
                )}

                <Controller
                  control={control}
                  rules={{
                    maxLength: 2,
                    pattern: /^[0-9]*$/i
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      label="Stock"
                      placeholder="Enter The Number of Stock CDs"
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                  name="stock"
                />
                {errors.stock && (
                  <Typography sx={{ color: "red" }}>
                    Invalid Input
                  </Typography>
                )}

                <Controller
                  control={control}
                  rules={{
                    maxLength: 1000,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      label="Description"
                      multiline
                      rows={4}
                      placeholder="Descripe The CD"
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                  name="description"
                />
                {errors.description && (
                  <Typography sx={{ color: "red" }}>
                    Description Shouldn't Exceed 1000 
                  </Typography>
                )}
              </Box>
              <Box sx={{ width: "40%" }}>
                {/*<Box
                component="img"
                sx={{
                    height: 350,
                    width: 350,
                  }}
                alt="Create"
                src={create}
                display="flex"
                justifyContent="flex-end"
              />*/}
                <FileDrop />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ mt: 8, width: 370 }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ color: "white", backgroundColor: "green", right: 10 }}
                  >
                    Create
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{ color: "white", backgroundColor: "red" }}
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
      <Grid padding="60px">
        <Grid container spacing={4} gap="20px">
          {cards.map((card) => (
            <CDCard
              heading={card.name}
              price={card.price}
              stock={card.stock}
              imgPath={card.imageSource}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default View;
