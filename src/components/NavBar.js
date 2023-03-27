import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@material-ui/core/Button';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Personal Profile
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/overview" color="inherit">Overview</Button>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
        {/* <Button component={Link} to="/contact" color="inherit">Contact</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

