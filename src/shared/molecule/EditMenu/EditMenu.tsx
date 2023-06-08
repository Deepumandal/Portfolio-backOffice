import { Box } from "@mui/material";
import React from "react";
import HomeEditPanel from "../../../view/HomeEditPanel";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/reduxStore";

const EditMenu = () => {
  // const SidBar = useSelector<RootState>((state) => state.sidebar);
  return (
    <Box
      sx={{
        marginTop: "7%",
        marginLeft: "2%",
        marginRight: "2%",
        width: "100%",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        height: "80vh",
        padding: "20px",
      }}
    >
      {/* todo  */}
      <HomeEditPanel />
    </Box>
  );
};

export default EditMenu;
