import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ height: '64px', background: 'linear-gradient(120deg, #1b1e26 0%, #3a1c71 50%, #23272e 100%)' }}>
            <Toolbar sx={{ minHeight: '64px !important' }}>
                <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                    Samir P M
                </Typography>
                <Box>
                    <Button href="#home" sx={{ color: 'white', mx: 1 }}>Home</Button>
                    <Button href="#about" sx={{ color: 'white', mx: 1 }}>About</Button>
                    <Button href="#projects" sx={{ color: 'white', mx: 1 }}>Projects</Button>
                    <Button href="#contact" sx={{ color: 'white', mx: 1 }}>Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
