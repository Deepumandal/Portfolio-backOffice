import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const SideBar = () => {
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
    ]
    return (
        <Box sx={{
            width: '20%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
        }} >
            <Stack sx={{
                alignItems: 'center',
            }}>
                <Typography variant="h6" sx={{
                    margin: "1rem"
                }} component="h2">
                    Portfolio Details
                </Typography>
                <Avatar sx={{
                    width: "100px",
                    height: "100px",
                    cursor: "pointer"
                }} alt="UserName" src="" />
                <Typography sx={{
                    margin: "10px",
                    letterSpacing: "1px",
                }}>
                    {"name is here"}
                </Typography>
            </Stack>
            {
                RoutesList.map((route, routeIndex) => {
                    return <Box sx={{
                        padding: "1rem 7%"
                    }}>

                        <Typography sx={{
                            marginLeft: "1rem",
                            '&:hover': {
                                color: "#1d1d1d",
                                transition: "2s"
                            }
                        }}   >{
                                route.name
                            }</Typography>
                    </Box>
                })
            }
            <Typography sx={{
                textAlign: "center",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "18%",
                padding: "1.6rem 0%",
                margin: "10px",
                fontSize: "1.3rem",
            }}>Live</Typography>

        </Box >
    )
}

export default SideBar