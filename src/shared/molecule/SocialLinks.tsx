import { Avatar, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import AddLink from "../../components/AddLink";

const SocialLinks = () => {
  interface link {
    title: String;
    linkPath: String;
    avatarPath: string;
  }

  const [links, setLinks] = useState<link[]>([]);

  useEffect(() => {
    console.log("Social Links", links);
  }, [links]);

  return (
    <React.Fragment>
      <Grid item sm={12} mt={2}>
        <Typography variant="h6">Social links</Typography>
      </Grid>
      <Grid item xs={12}>
        {links?.map((link, index) => {
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
                  <Typography padding={0}> {link.title}</Typography>
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
                  <Typography padding={0}>
                    {" "}
                    <RxCross1 />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}

        <Grid item xs={6}>
          <AddLink links={links} setLinks={setLinks} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SocialLinks;
