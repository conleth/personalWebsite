import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@material-ui/core/Button';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Personal Profile
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Skills</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
