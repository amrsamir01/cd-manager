import {
  Modal,
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Toolbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useForm, Controller, FieldErrors } from "react-hook-form";
import { cardData, cards } from "../../../data/data";
import "../../../App.css";
import DragDrop from "./DragDrop";

function Model() {
  const { v4: uuidv4 } = require("uuid");
  const [open, setOpen] = useState<boolean>(false);
  const [cardList, setCardList] = useState<cardData[]>(cards);

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<cardData>({
    defaultValues: {
      id: uuidv4,
      name: "",
      imageSource: "",
      stock: 0,
      price: 0,
      description: "",
      category: "",
    },
  });
  const onSubmit = (data: cardData) => {
    console.log(data);
    setCardList((prev) => [...prev, data]);
    console.log(cardList);
    handleClose();
  };
  const onError = (errors: FieldErrors<FormData>) => {
    console.log("Form Errors", errors);
  };
  const onImageUpload = (base64: string) => {
    setValue("imageSource", base64);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flow",
    padding: "10px",
  };
  return (
    <>
      <Box>
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

            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
                      required: true,
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

                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={value}
                          label="Category"
                          onChange={onChange}
                          onBlur={onBlur}
                        >
                          <MenuItem value={"Sports"}>Sports</MenuItem>
                          <MenuItem value={"Battle Royale"}>
                            Battle Royale
                          </MenuItem>
                          <MenuItem value={"War"}>War</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    name="category"
                  />
                  {errors.category && (
                    <Typography sx={{ color: "red" }}>
                      Category Type Not Valid
                    </Typography>
                  )}

                  <Controller
                    control={control}
                    rules={{
                      maxLength: 5,
                      minLength: 0,
                      pattern: /^[0-9]*$/i,
                      required: true,
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
                    <Typography sx={{ color: "red" }}>Invalid Price</Typography>
                  )}

                  <Controller
                    control={control}
                    rules={{
                      maxLength: 2,
                      pattern: /^[0-9]*$/i,
                      required: true,
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
                    <Typography sx={{ color: "red" }}>Invalid Input</Typography>
                  )}

                  <Controller
                    control={control}
                    rules={{
                      maxLength: 1000,
                      value: "",
                      required: true,
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
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({}) => <DragDrop onSubmitImage={onImageUpload} />}
                    name="imageSource"
                  />
                  {errors.imageSource && (
                    <Typography sx={{ color: "red" }}>
                      Image is not Valid
                    </Typography>
                  )}
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    sx={{ mt: 8, width: 370 }}
                  >
                    <Button
                      type="submit"
                      variant="outlined"
                      sx={{
                        color: "white",
                        backgroundColor: "green",
                        right: 10,
                      }}
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
      </Box>
    </>
  );
}

export default Model;
