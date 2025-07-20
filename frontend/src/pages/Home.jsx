import React from "react";
import Hero from "../components/Hero";
import SpecialitySearch from "../components/SpecialitySearch";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <SpecialitySearch />
      <TopDoctors />
      <SpecialityMenu />
      <Footer/>
    </>
  );
};

export default Home;
