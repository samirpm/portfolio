import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Box id="about" sx={{ padding: '5%', background: 'linear-gradient(120deg, #1b1e26 0%, #3a1c71 50%, #23272e 100%)', color: 'white', minHeight: '100vh' }}>
            <Typography variant="h3" component="h2">
                About Me
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: '#b0b3b8' }}>
                Welcome to my portfolio. I am a web developer with a passion for creating beautiful and functional websites.
            </Typography>
        </Box>
    );
};

export default About;
