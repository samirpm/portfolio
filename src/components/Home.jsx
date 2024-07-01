import React from "react";
import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import Bubbles from "./Bubble"; 
import image from "../assets/file.png";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "linear-gradient(120deg, #0d0f14 0%, #23114a 50%, #14161b 100%)",
        padding: "0 5%",
        overflow: "hidden",
        position: "relative" // Add position relative to contain the bubbles
      }}
    >
      <Bubbles /> {/* Add the Bubbles component */}
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h2" component="h1" sx={{ color: "white" }}>
          I'm{" "}
          <span style={{ 
            fontWeight: "bold", 
            display: "inline-block",
            color: "goldenrod", // Highlight color for text
            padding: "5px"
          }}>
            <Typewriter
              words={["Samir P M"]}
              loop={1} // Ensure the effect only happens once
              cursor
              cursorStyle="."
              typeSpeed={500}
              deleteSpeed={500}
              delaySpeed={1000}
            />
          </span>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mt: 2, color: "#b0b3b8", maxWidth: "400px" }}
        >
          MERN Stack Developer passionate about building dynamic and responsive web applications. With a solid foundation in MongoDB, Express.js, React, and Node.js, I strive to deliver seamless user experiences and efficient backend solutions. Explore my portfolio to see how I bring innovative ideas to life.
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: '10%',
            padding: '10px',
            background: 'linear-gradient(120deg, #0d0f14, #23114a, #14161b)', // Matching the gradient theme
            boxShadow: '0 0 20px 5px rgba(75, 0, 130, 0.7)', // Glowing effect with violet color
            zIndex: 999,
          }}
        >
          <img
            src={image}
            alt="Samir P M"
            style={{
              borderRadius: '50%',
              height: '100vh',
            //   width: '300px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
