import React from "react";
import ResultPage from "./ResultPage";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search";
import "../../../src/App.css";

function LandingPage() {
  return (
    <div className='App'>
      <Search />
      <ResultPage />
    </div>
  );
}

export default LandingPage;
