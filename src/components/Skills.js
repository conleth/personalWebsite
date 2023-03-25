import React from 'react';
import { Typography, Divider } from '@mui/material';

const Skills = ({ skills }) => {
  return (
    <div>
      <Typography variant="h4">Skills</Typography>
      <Divider />
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <Typography variant="body1">{skill}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
