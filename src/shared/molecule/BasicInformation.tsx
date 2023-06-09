import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import PopUpPrompt from "../atom/PopUpPrompt";
import { useDispatch, useSelector } from "react-redux";
import {
  addBasicInformations,
  homeReducerInitialState,
} from "../../redux/home/homeReducer";
import { RootState } from "../../redux/reduxStore";

const BasicInformation = () => {
  const debounceTimer = useRef<any>(null);
  const dispatch = useDispatch();

  const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      dispatch(addBasicInformations({ [name]: value }));
    }, 500);
  };
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const state = useSelector<RootState>(
    (state) => state.homeReducer
  ) as homeReducerInitialState;

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
                label={`${state.greeting.Name || "User Name"}`}
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
                    label={`${state.greeting.nickName || "Nick Name"}`}
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
                    label={`${state.greeting.logoName || "Logo Name"}`}
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
                label={`${state.greeting.Description || "Description"}`}
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
