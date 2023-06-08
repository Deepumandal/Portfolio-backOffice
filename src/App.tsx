import React from "react";
import { Box, Button } from "@mui/material";
import SideBar from "./shared/molecule/sidebar/SideBar";
import Editor from "./shared/molecule/editor/Editor";

const App = () => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <SideBar />
      <Editor />
    </Box>
  );
};

export default App;
