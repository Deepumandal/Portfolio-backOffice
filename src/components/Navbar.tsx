import { Box, Typography } from '@mui/material'
import React from 'react'
import { IoSettings } from "react-icons/io5"
const Navbar = () => {
    return (
        <Box sx={{
            width: '80%',
            height: '10%',
            position: 'fixed',
            top: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'rgba(0, 0, 0, 0.24) 17px 2px 62px'
        }}>
            <Typography variant='h5' sx={{ marginLeft: '3rem', letterSpacing: "1px" }}>hello {"user"}</Typography>
            <Box sx={{
                position: 'absolute',
                right: 27,
                cursor: "pointer",
            }}>
                <IoSettings style={{
                    fontSize: '26px'
                }} />
            </Box>
        </Box>
    )
}

export default Navbar