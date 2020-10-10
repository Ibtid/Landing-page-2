import React from 'react';
import NavBar from "./components/Navbar/NavBar"

import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar/>
      <NavBar/>
    </Router>
  );
}

export default App;
