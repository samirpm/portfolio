import React from 'react';
import { Box, Typography } from '@mui/material';

const Projects = () => {
    return (
        <Box id="projects" sx={{ padding: '5%', background: 'linear-gradient(120deg, #1b1e26 0%, #3a1c71 50%, #23272e 100%)', color: 'white', minHeight: '100vh' }}>
            <Typography variant="h3" component="h2">
                Projects
            </Typography>
            <Box sx={{ my: 4 }}>
                <Typography variant="h5">Project 1</Typography>
                <Typography variant="body1" sx={{ color: '#b0b3b8' }}>Description of project 1.</Typography>
            </Box>
            <Box sx={{ my: 4 }}>
                <Typography variant="h5">Project 2</Typography>
                <Typography variant="body1" sx={{ color: '#b0b3b8' }}>Description of project 2.</Typography>
            </Box>
        </Box>
    );
};

export default Projects;
