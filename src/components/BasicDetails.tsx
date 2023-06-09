import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import AddLink from "./AddLink";
import SocialLinks from "../shared/molecule/SocialLinks";
import BasicInformation from "../shared/molecule/BasicInformation";

interface UserBasicInformation {
  Name: string;
  nickName: string;
  logoName?: string;
  Description: string;
}

const BasicDetails = () => {
  return (
    <Box
      sx={{
        paddingY: "10px",
        paddingX: "10px",
        height: "fit-content",
        marginY: "10px",
      }}
    >
      <Grid container rowGap={1}>
        <BasicInformation />
        <SocialLinks />
      </Grid>
    </Box>
  );
};

export default BasicDetails;
