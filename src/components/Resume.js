import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
  const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#fff",
        padding: theme.spacing(4),
        borderRadius: 8,
        boxShadow: theme.shadows[2],
      },
  }));

const Resume = ({ resumeData }) => {
  const classes = useStyles();

  const { experience, education, skills } = resumeData;

  return (
    <Container maxWidth="md">
      <Box className={classes.container}>
        <Typography variant="h4" gutterBottom>
          {resumeData.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {resumeData.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {resumeData.summary}
        </Typography>
        <Experience experience={experience} />
        <Education education={education} />
        <Skills skills={skills} />
      </Box>
    </Container>
  );
};

export default Resume;
