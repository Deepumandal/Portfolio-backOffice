import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import { PostSocialAvatar } from "../api/PostSocialAvatar";

interface link {
  title: String;
  linkPath: String;
  avatarPath: string;
}

const AddLink: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // image upload
  let dummyImageUrl =
    "data:image/jpeg;base64,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";
  const inputFileRef = useRef<HTMLInputElement>(null);

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     setImageUrl(e.target?.result as string);
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  // data fill here

  const [querry, setQuerry] = useState<link>({
    title: "",
    linkPath: "",
    avatarPath: dummyImageUrl,
  });

  // const dispatch = useDispatch();

  const onchangelinks = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type == "file") {
      // file saves here
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files?.[0];
        PostSocialAvatar(file).then((response) => {
          console.log("response", response);
          setQuerry((prev) => {
            return {
              ...prev,
              avatarPath: response.fileUrl,
            };
          });
        });
        // make a function here that once image
        //  is uploaded then setQuerry should be occur so
        // make the backend first to got from here
      }
    } else {
      // title and url here
      const { name, value } = event.target;
      setQuerry((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = () => {
    // setLinks((prev)=>  [...prev, ] )
    // setLinks((prev) => {
    //   return [
    //     ...prev,
    //     {
    //       _id: prev?.length + 1 || 0,
    //       ...querry,
    //     },
    //   ];
    // });
    // setQuerry((prev) => {
    //   return {
    //     ...prev,
    //     avatarPath: dummyImageUrl,
    //     linkPath: "",
    //     title: "",
    //   };
    // });
    // dispatch event to say that okay i have my full dataset
    handleClose();
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            paddingX: 4,
            paddingY: 2,
            paddingBottom: 1,
          }}
        >
          <Stack direction={"row"}>
            <Typography variant="h5" textAlign={"center"} width={"100%"}>
              {" "}
              Add Link{" "}
            </Typography>
          </Stack>
          <FormControl
            sx={{
              marginY: "20px",
              width: "100%",
            }}
          >
            <TextField
              required
              type="link"
              id="Name"
              name="linkPath"
              label="Link Address"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={onchangelinks}
            />
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <TextField
                required
                id="Name"
                name="title"
                label="Link Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={onchangelinks}
              />
              {/* image here */}
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  {querry.avatarPath === dummyImageUrl ? (
                    <Avatar
                      src={querry.avatarPath}
                      onClick={() => inputFileRef.current?.click()} // Trigger file input click
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <Avatar src={querry.avatarPath} />
                  )}
                  <input
                    type="file"
                    name="avatarPath"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={inputFileRef}
                    // onChange={handleFileChange}
                    onChange={onchangelinks}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography fontSize={"14px"}>
                    {querry.avatarPath === dummyImageUrl
                      ? "No image selected"
                      : "Image uploaded"}
                  </Typography>
                </Grid>
              </Grid>

              {/* image here */}
            </Stack>
            <Button
              sx={{
                marginY: "10px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default AddLink;
