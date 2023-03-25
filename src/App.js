import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/styles';
import theme from './themes/Theme';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#1877f2',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        {/* <Toolbar> */}
        <NavBar></NavBar>
          {/* <Typography variant="h6" className={classes.title}>
            My professional Profile
          </Typography> */}
        {/* </Toolbar> */}
      </AppBar>
      {/* <div style={{ padding: '20px' }}>
        <Typography variant="h4">Welcome to My Facebook Clone!</Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          This is a work in progress. Check back soon for updates.
        </Typography>
      </div> */}
      <div>
      <ThemeProvider theme={theme}>
        <MainPage></MainPage>
      </ThemeProvider>
        </div>
    </div>
  );
}

export default App;
