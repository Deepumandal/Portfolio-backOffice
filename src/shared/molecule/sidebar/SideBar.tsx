import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../../redux/reduxStore";
import { SideBarInitialStateType } from "../../../redux/SideBarNav_old/SideBarReducers";
import RouteTextFormater from "../../../utils/RouteTextFormater";
// import { PageChangeEvent } from "../../../redux/SideBarNav/Actions";
import { SideBarPayloadPageNameEnum } from "../../../types/enums";
import { PageChangeEvent } from "../../../redux/SideBarNav/SideBarReducer";
import { RootState } from "../../../redux/reduxStore";

const SideBar: React.FC = () => {
  const RoutesList = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Education",
    },
    {
      id: 3,
      name: "Experience",
    },
    {
      id: 4,
      name: "Projects",
    },
    {
      id: 5,
      name: "Open Source",
    },
    {
      id: 6,
      name: "Contact Me",
    },
  ];

  const SideBar: SideBarInitialStateType = useSelector<RootState>(
    (state) => state.sideBarReducer
  ) as SideBarInitialStateType;
  const dispatch = useDispatch();

  const handlePageChange = (pageName: SideBarPayloadPageNameEnum) => {
    dispatch(PageChangeEvent(pageName)); // todo
  };

  return (
    <Box
      sx={{
        width: "20%",
        height: "100%",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            margin: "1rem",
          }}
          component="h2"
        >
          Portfolio Details
        </Typography>
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            cursor: "pointer",
          }}
          alt="UserName"
          src=""
        />
        <Typography
          sx={{
            margin: "10px",
            letterSpacing: "1px",
          }}
        >
          {"name is here"}
        </Typography>
      </Stack>
      {SideBar.pageName.map((route, routeIndex) => {
        return (
          <Box
            sx={{
              padding: "0.5rem 7%",
            }}
            key={routeIndex}
          >
            <Typography
              onClick={() => handlePageChange(route)}
              sx={{
                cursor: "pointer",
                marginLeft: "1rem",
                "&:hover": {
                  color: "#1d1d1d",
                  transition: "2s",
                },
                backgroundColor: `${
                  route === SideBar.selectedPageName ? "#eeeeee" : "#eeeeee52"
                }`,
                borderRadius: "10px",
                padding: "13px",
              }}
            >
              {RouteTextFormater(route)}
            </Typography>
          </Box>
        );
      })}
      <Typography
        sx={{
          textAlign: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "18%",
          padding: "1.6rem 0%",
          margin: "10px",
          fontSize: "1.3rem",
        }}
      >
        Live
      </Typography>
    </Box>
  );
};

export default SideBar;
