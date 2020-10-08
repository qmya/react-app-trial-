import React from "react";
import logo from "./assets/pocket.svg";
import Button from "@material-ui/core/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Button variant="contained" color="primary">
        Qandeel Mya
      </Button>
    </div>
  );
}

export default App;
