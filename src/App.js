import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/styles';
import theme from './themes/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Projects from './pages/Projects';
import Overview from './pages/Overview';
// import Contact from './pages/Contact';


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
    <ThemeProvider theme={theme}>
    <div>
      <AppBar className={classes.appBar} position="static">
      <Router>
      <div>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
      </AppBar>
      <div>

          <MainPage></MainPage>
       
      </div>
    </div>
    <Footer />
    </ThemeProvider>
  );
}

export default App;
