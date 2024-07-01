import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Box } from '@mui/material';

const App = () => {
    return (
        <Box>
            <Header />
           
                <Home />
                <About />
                <Projects />
                <Contact />
        </Box>
    );
};

export default App;
