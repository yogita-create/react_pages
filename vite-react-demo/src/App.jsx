import React from "react";
import Headerbar from "./components/Headerbar.jsx";
import Hero from "./components/Hero.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Keybenefits from "./components/Keybenefit.jsx";
import Chooseus from "./components/Chooseus.jsx";
import Itworks from "./components/itworks.jsx";
import Card from "./components/Card.jsx";
import Features from "./components/Features.jsx";
import AddressForm from "./components/AddressForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Headerbar/>
      <Hero />
      <section className="aboutus"></section>
      <Aboutus/>
      <Keybenefits/>
      <Chooseus/>
      <Itworks/>
      <Card/>
      <Features/>
      <AddressForm/>
      <Footer/>
      </div>

  );
}

export default App;
