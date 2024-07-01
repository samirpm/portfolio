import React from 'react';
import { Box } from '@mui/material';
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import mysqlLogo from "../assets/sql.png";
import mongoLogo from "../assets/mongo.png";

const logos = [
  { src: reactLogo, alt: "React" },
  { src: nodeLogo, alt: "Node.js" },
  { src: mysqlLogo, alt: "MySQL" },
  { src: mongoLogo, alt: "MongoDB" }
];

const Bubbles = () => {
  const bubbleArray = new Array(20).fill(0); // Create an array with 20 bubbles
  const randomSize = () => Math.random() * 20 + 30; // Random size between 30px and 50px
  const randomPosition = () => Math.random() * 100; // Random position between 0% and 100%
  const randomDuration = () => Math.random() * 5 + 5; // Random duration between 5s and 10s

  return (
    <Box sx={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
      {bubbleArray.map((_, index) => {
        const isLogo = Math.random() < 0.5; // 50% chance to include a logo
        const logo = isLogo ? logos[Math.floor(Math.random() * logos.length)] : null;
        const size = randomSize();

        return (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              bottom: '-30px',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: isLogo ? 'transparent' : 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              left: `${randomPosition()}%`,
              animation: `float ${randomDuration()}s infinite`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '@keyframes float': {
                '0%': {
                  transform: 'translateY(0)',
                  opacity: 1
                },
                '100%': {
                  transform: 'translateY(-100vh)',
                  opacity: 0
                }
              }
            }}
          >
            {logo && (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Bubbles;
