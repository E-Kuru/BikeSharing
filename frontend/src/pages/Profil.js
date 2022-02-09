import React from "react";
import { useState } from "react";
import Link from "../components/profil/Link";
import MesAnnonces from "../components/profil/MesAnnonces";
import MesCommandes from "../components/profil/MesCommandes";
import MesInformations from "../components/profil/MesInformations";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { UserContext } from '../context/User'
import { useContext } from 'react'
import '../App.css'
import "../App.css";
import CreateAnnonce from "../components/profil/CreateAnnonce";
import Paiement from "../components/profil/Paiement";
import MesCommentaire from "../components/profil/MesCommentaire";
import MesLocations from "../components/profil/MesLocations";
import Footer from "../components/Footer"

const Vertical = styled.div`
  border-left: 4px solid white;
  height: 10px;
  display: inline-block;
`

const color = {
  color: "pink",
};

const Profil = () => {
  const { user } = useContext(UserContext)
  const [toggle, setToggle] = useState("");
  
  const toggleTab = (index) => {
  setToggle(index);
  };

  return (
    <>
    <Navbar />
      <div className="container ">
        <nav className="nav my-4">
          <Link
            name="Mes annonces"
            number="1"
            className={toggle === "1" ? "nav-link active text-secondary ": "nav-link active text-light"}
            href="#"
            toggleTab={toggleTab}
          />
          <Vertical className="my-3" />
          <Link
            name="Mes commandes"
            number="2"
            className={toggle === "2" ? "nav-link active text-secondary": "nav-link active text-light"}
            href="#"
            toggleTab={toggleTab}
          />
           <Vertical className="my-3" />
          <Link
            name="Mes locations"
            number="7"
            className={toggle === "7" ? "nav-link active text-secondary": "nav-link active text-light"}
            href="#"
            toggleTab={toggleTab}
          />
          <Vertical className="my-3" />
          <Link
            name="Mes informations"
            number="3"
            className={toggle === "3" ? "nav-link active text-secondary": "nav-link active text-light"}
            href="#"
            toggleTab={toggleTab}
          />
          <Vertical className="my-3" />
          <Link
            name="Mes méthodes de paiement"
            number="4"
            className={toggle === "4" ? "nav-link active text-secondary": "nav-link active text-light"}
            href="#"
            toggleTab={toggleTab}
          />
          {/* <Vertical className="my-3" />
          <Link
            name="Mes commentaires"
            number="6"
            className={toggle === "6" ? "nav-link active text-primary": "nav-link active text-light"}
            href="#"
            toggleTab={toggleTab}
          /> */}
         
          
        </nav>

        {toggle === "" && <MesAnnonces toggle={toggle} toggleTab={toggleTab} />}
        {toggle === "1" && <MesAnnonces toggle={toggle} toggleTab={toggleTab} />}
        {toggle === "2" && <MesCommandes />}
        {toggle === "3" && <MesInformations />}
        {toggle === "4" && <Paiement />}
        {toggle === "5" && <CreateAnnonce />}
        {/* {toggle === "6" && <MesCommentaire />} */}
        {toggle === "7" && <MesLocations />}
      </div> 
    <Footer />
    </>
  
  );
};

export default Profil;
