import React from "react";

import Hero from "../componentes/Hero";
import CreditCard from "../componentes/CreditCard";
import CardList from "../componentes/CardList";
import CenteredButton from "../componentes/CenteredButton";
import Institutional from "../componentes/Institutional";
import Faq from "../componentes/Faq";


import posts from "../data/posts";

const Home = ({ handleClick }) => (
    <>
    
      <Hero />

      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={ handleClick }>
        Abra sua conta
      </CenteredButton>

      <Institutional />
      <Faq />
      
      
    </>
  );

export default Home;
