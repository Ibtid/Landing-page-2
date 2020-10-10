import React from 'react';
import NavBar from "./components/Navbar/NavBar"
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
    </Router>
  );
}

export default App;
