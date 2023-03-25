import React from "react";
import { Container, Typography } from "@mui/material";

function Projects() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Typography variant="body1" component="p" sx={{ mb: 2 }}>
        Here are some of my recent projects:
      </Typography>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </Container>
  );
}

export default Projects;
