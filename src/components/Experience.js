import React from 'react';
import { Typography, Divider } from '@mui/material';

const Experience = ({ experience }) => {
  return (
    <div>
      <Typography variant="h4">Experience</Typography>
      <Divider />
      {experience.map((exp) => (
        <div key={exp.id}>
          <Typography variant="h6">{exp.company}</Typography>
          <Typography variant="subtitle1">{exp.title}</Typography>
          <Typography variant="subtitle2">{exp.employmentDate}</Typography>
          <Typography variant="body1">{exp.description}</Typography>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Experience;
