import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Routing from "../src/Routing";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar bg='dark'>
        <Navbar.Brand href='/'>
          <img src='./yuuvis.svg' width='80' height='30'></img>
          Yuuvis Project
        </Navbar.Brand>
        <Navbar.Brand href='/upload'>Upload</Navbar.Brand>
      </Navbar>
      <Routing />
    </div>
  );
}

export default App;
