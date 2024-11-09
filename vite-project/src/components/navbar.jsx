import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    return (
        <Box marginBottom="20px">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hello, {user?.email}
                    </Typography>

                    <Button variant='contained' color='error' onClick={logout}>
                        Logout
                    </Button>
                </Toolbar>

            </AppBar>
        </Box>
    )
}