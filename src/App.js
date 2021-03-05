import React from "react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Credit from "./componentes/Credit";
import Card from "./componentes/Card";
import Card2 from "./componentes/Card2";
import Card3 from "./componentes/Card3";
import Button from "./componentes/Button";
import CardDesktop from "./componentes/CardsDesktop";



import "./App.scss";

const App = () => (
  
    <div className="App"> 
      <Navbar />
      <Hero />
      <Credit />
      <Card />
      <Card2 />
      <Card3 />
      <CardDesktop />
      <Button />
    </div>
  );


export default App;
