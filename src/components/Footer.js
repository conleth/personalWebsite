import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="body1">
          © {new Date().getFullYear()} Conleth Kennedy
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
