import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import { Grid } from '@material-ui/core';
import Footer from './Components/footer/Footer';
import Dashboard from './Components/dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <Grid>
        <Header></Header>
        <Dashboard></Dashboard>
        <Footer></Footer>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </Grid>
    </div>
  );
}

export default App;
