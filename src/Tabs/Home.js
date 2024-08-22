import React from 'react'
import Header from "../layouts/partials/header";
import ContactUs from  "../layouts/partials/ContactUs";
import Footer from "../layouts/partials/footer";
import HeroImages from './Home/HeroImages';
import NewCarBooking from "./Home/NewCarBooking";
import ServicesWeOffer from "./Home/ServicesWeOffer";
import ValueTime from "./Home/ValueTime";
import  ClientsLove from "./Home/ClientsLove";
import ChooseUs from "./Home/ChooseUs";
import OneClickAway from "./Home/OneClickAway";
import ExpertTeam from "./Home/ExpertTeam";
import MapSection from "./Home/MapSection";
const Home = () => {
  return (
    <div>
      <Header/>
      <HeroImages/>
      <NewCarBooking/>
      <ServicesWeOffer/>
      <ValueTime/>
      <ClientsLove/>
      <ChooseUs/>
      <OneClickAway/>
      <ExpertTeam/>
      <ContactUs/>
      <MapSection/>
      <Footer/>
    </div>
  )
}

export default Home;
