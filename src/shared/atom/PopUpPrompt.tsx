import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";

interface PopUpPromptProps {
  name: string;
  handleChange: (url: string) => void;
}

const PopUpPrompt: React.FC<PopUpPromptProps> = ({ name, handleChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  const [link, setLink] = useState("");

  const handleAddLink = () => {
    // Handle adding the link
    handleChange(link);
    setLink("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {name || "Open alert dialog"}
        <span
          style={{
            fontSize: "17px",
            color: "red",
          }}
        >
          {" "}
          &#42;{" "}
        </span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onKeyDown={handleKeyDown}
      >
        <DialogTitle id="alert-dialog-title">{name} here</DialogTitle>
        <DialogContent
          sx={{
            width: "400px",
          }}
        >
          <TextField
            type="link"
            fullWidth
            label="Add Link"
            variant="outlined"
            value={link}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddLink} autoFocus>
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUpPrompt;
