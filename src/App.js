import React from "react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import CreditCard from "./componentes/CreditCard";
import CardList from "./componentes/CardList";
import CenteredButton from "./componentes/CenteredButton";
import Institutional from "./componentes/Institutional";
import Faq from "./componentes/Faq";
import Footer from "./componentes/Footer";

import "./App.scss";

import posts from "./data/posts";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton>Abra sua conta</CenteredButton>

    <Institutional />
    <Faq />
    <Footer />
  </div>
);

export default App;
