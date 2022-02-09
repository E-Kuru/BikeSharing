import Navbar from "../components/Navbar";
import Calendrier from "../components/Calendrier/Calendrier";
import CategoriesCard from "../components/CategoriesCard";
import Qsm from "../components/Qsm";
import Footer from "../components/Footer";
import {  useState } from "react";




const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Calendrier/>
      <CategoriesCard />
      <Qsm />
      <Footer />
    </div>
  );
};
export default Home;
