import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import PopUpPrompt from "../atom/PopUpPrompt";

const InsertLineBreakRegex = /(\r\n|\r|\n)/;

interface UserBasicInformation {
  Name: string;
  nickName: string;
  logoName?: string;
  Description: string;
}

interface BasicInformationProps {
  getBasicInformation: (props: UserBasicInformation) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  getBasicInformation,
}) => {
  //   basic information useState
  const [basicInformation, setBasicInformation] =
    useState<UserBasicInformation>({
      Name: "",
      nickName: "",
      logoName: "",
      Description: "",
    });

  const debounceTimer = useRef<any>(null);

  const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      setBasicInformation((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }, 500);
  };
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);
  useEffect(() => {
    getBasicInformation(basicInformation);
  }, [basicInformation]);

  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Typography variant="h6">Basic information</Typography>
      </Grid>

      <Grid item xs={12}>
        <Stack direction={"row"} gap={3} margin={"auto"} width={"95%"}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                required
                id="Name"
                name="Name"
                label="Portfolio Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleOnChangeName(event)
                }
              />
            </Grid>
            <Grid item sm={12}>
              <Grid container columnGap={2}>
                <Grid item sm={5.5}>
                  <TextField
                    required
                    id="Nickname"
                    name="nickName"
                    label="Nick Name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleOnChangeName(event)
                    }
                  />
                </Grid>
                <Grid item sm={5.5}>
                  <TextField
                    id="LogoName"
                    name="logoName"
                    label="Logo Name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleOnChangeName(event)
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                required
                multiline
                id="Description"
                name="Description"
                label="Description"
                fullWidth
                autoComplete="given-name"
                placeholder="Click enter for new line"
                variant="outlined"
                rows={4}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleOnChangeName(event)
                }
              />
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </React.Fragment>
  );
};

export default BasicInformation;
