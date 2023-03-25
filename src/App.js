import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MainPage from './components/MainPage';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/styles';
import theme from './themes/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





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
        <Router>
          <Routes>
            <Route exact path="/projects" component={Projects} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
        <NavBar></NavBar>
      </AppBar>
      <div>
        <ThemeProvider theme={theme}>
          <MainPage></MainPage>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
