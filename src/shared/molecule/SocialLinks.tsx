import { Avatar, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import AddLink from "../../components/AddLink";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";
import {
  deleteSocialLink,
  homeReducerInitialState,
} from "../../redux/home/homeReducer";
import { SocialMediaRecord } from "../../redux/home/homeReducer";
import dummyImageUrl from "../../utils/dummyImage";

const SocialLinks = () => {
  interface link {
    title: String;
    linkPath: String;
    avatarPath: string;
  }

  const homeData = useSelector<RootState>(
    (state) => state.homeReducer
  ) as homeReducerInitialState;
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Grid container marginTop={"10px"}>
        <Grid
          item
          sm={6}
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "fles-start",
            gap: "2rem",
          }}
        >
          <Typography variant="h6">Social links</Typography>
          <AddLink />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "200px",
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "&::-webkit-scrollbar-track ": {
            backgroundColor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-track:hover": {
            backgroundColor: "#d4d4d4",
          },
        }}
        columnGap={3}
      >
        {homeData.socialMediaLinks.map((link, index) => {
          return (
            <Grid item xs={3} key={index}>
              <Grid
                container
                spacing={1}
                sx={{
                  border: "1px solid #eaedf2",
                  margin: "5px",
                }}
              >
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 25, height: 25 }}
                    src={link.avatarPath || dummyImageUrl}
                  />
                </Grid>
                <Grid
                  item
                  xs={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <Typography padding={0} fontSize={"0.7rem"}>
                    {" "}
                    {link.name}
                  </Typography>
                  <Typography padding={0}> {link.linkPath}</Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    padding={0}
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      dispatch(deleteSocialLink(link.id));
                    }}
                  >
                    {" "}
                    <RxCross1 />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default SocialLinks;
