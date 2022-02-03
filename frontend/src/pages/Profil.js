import React from 'react';
import { useState } from "react";
import Link from '../components/profil/Link';
import MesAnnonces from '../components/profil/MesAnnonces';
import MesCommandes from '../components/profil/MesCommandes';
import MesInformations from '../components/profil/MesInformations';
import Navbar from "../components/Navbar"
import styled from "styled-components";
import '../App.css'

const Vertical = styled.div`
    border-left: 4px solid white; 
    height: 10px; 
    display: inline-block;
`

const Profil = () => {

    const [toggle, setToggleState] = useState("1");

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
    <Navbar/>
        <div className='container '>
            
            <nav className="nav my-4">
                <Link name="Mes annonces" number="1" className="nav-link active text-light" href="#"  toggleTab={toggleTab}/>
                <Vertical className='my-3' />
                <Link name="Mes commandes" number="2" className="nav-link active text-light" href="#"  toggleTab={toggleTab}/>
                <Vertical  className='my-3'/>
                <Link name="Mes informations" number="3" className="nav-link active text-light" href="#" toggleTab={toggleTab} />
                <Vertical  className='my-3' />
                <Link name="Mes méthodes de paiement" number="4" className="nav-link active text-light" href="#" toggleTab={toggleTab} />
            </nav>

            {toggle === null && <MesAnnonces />}
            {toggle === "1" && <MesAnnonces />}
            {toggle === "2" && <MesCommandes />}
            {toggle === "3" && <MesInformations />}
            
        </div>
        </>
    );
};

export default Profil;