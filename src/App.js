import React from "react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Credit from "./componentes/Credit";
import Card from "./componentes/Card";
import "./App.scss";


const App = () => (
  
    <div className="App"> 
      <Navbar />
      <Hero />
      <Credit />
      <Card />
    </div>
  );


export default App;
