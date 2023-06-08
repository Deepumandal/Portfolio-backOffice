import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import EditMenu from '../EditMenu/EditMenu'

const Editor = () => {
    return (
        <Box sx={{
            width: "80%",
            // paddingX: "6%",
            display: "flex",
            alignItems: 'flex-start',
            height: '100%'
        }}>
            <Navbar />
            <EditMenu />
        </Box>
    )
}

export default Editor