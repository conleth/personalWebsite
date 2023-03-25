import React from 'react';
import { Typography, Divider } from '@mui/material';

const Education = ({ education }) => {
  return (
    <div>
      <Typography variant="h4">Education</Typography>
      <Divider />
      {education.map((edu, index) => (
        <div key={index}>
          <Typography variant="h6">{edu.degree}</Typography>
          <Typography variant="subtitle1">{edu.institution}</Typography>
          <Typography variant="subtitle2">{edu.date}</Typography>
          <Typography variant="body1">{edu.description}</Typography>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Education;
