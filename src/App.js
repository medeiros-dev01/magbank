import React, {useState} from "react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import CreditCard from "./componentes/CreditCard";
import CardList from "./componentes/CardList";
import CenteredButton from "./componentes/CenteredButton";
import Institutional from "./componentes/Institutional";
import Faq from "./componentes/Faq";
import Footer from "./componentes/Footer";
import AccountModal from "./componentes/AccountModal";

import "./App.scss";

import posts from "./data/posts";

const App = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
  <div className="App">
    <Navbar handleCreateAcc={() => setShowModal(true)} />
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton onClick={() => setShowModal(true)}>
      Abra sua conta
    </CenteredButton>

    <Institutional />
    <Faq />
    <Footer />
    <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
  </div>
);
};

export default App;
