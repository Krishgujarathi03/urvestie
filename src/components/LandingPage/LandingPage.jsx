import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Introduction from "../Introduction/Introduction";
import StopItShareIt from "../StopItShareIt/StopItShareIt";
import TopStylists from "../TopStylists/TopStylists";
import How from "../How/How";
import CustomerReview from "../CustomerReview/CustomerReview";
import Footer from "../Footer/Footer";
import FashionSlider from "../FashionSlider/FashionSlider";
import Evaluate from "../Evaluate/Evaluate";

const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Fashion Slider */}
      <FashionSlider />
      {/* Introduction */}
      <Introduction />
      {/* StopItShareIt */}
      <StopItShareIt />
      {/* How */}
      <How />
      {/* Top Stylists */}
      <TopStylists />
      {/* Customer Reviews */}
      <CustomerReview />
      {/* Evaluate */}
      <Evaluate />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
