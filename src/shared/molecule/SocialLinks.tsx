import { Avatar, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import AddLink from "../../components/AddLink";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/reduxStore";
import { homeReducerInitialState } from "../../redux/home_old/homeReducer";

const SocialLinks = () => {
  interface link {
    title: String;
    linkPath: String;
    avatarPath: string;
  }

  // const homeData = useSelector<RootState>(
  //   (state) => state.home
  // ) as homeReducerInitialState;

  return (
    <React.Fragment>
      <Grid item sm={12} mt={2}>
        <Typography variant="h6">Social links</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* {homeData.socialMediaLinks.map((link, index) => {
          return (
            <Grid item xs={5}>
              <Grid
                container
                spacing={2}
                sx={{
                  border: "1px solid #eaedf2",
                  margin: "8px",
                }}
              >
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 24, height: 24 }}
                    src={link.avatarPath}
                  />
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <Typography padding={0}> {link.name}</Typography>
                  <Typography padding={0}> {link.avatarPath}</Typography>
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
                  <Typography padding={0}>
                    {" "}
                    <RxCross1 />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })} */}

        <Grid item xs={6}>
          <AddLink />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SocialLinks;
