import React from 'react';
import { useState } from "react";
import Link from '../components/profil/Link';
import MesAnnonces from '../components/profil/MesAnnonces';
import MesCommandes from '../components/profil/MesCommandes';

const Profil = () => {

    const [toggle, setToggleState] = useState("1");

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='container'>
            hello
            
            <nav className="nav">
                <Link name="Mes annonces" number="1" className="nav-link active text-dark" href="#"  toggleTab={toggleTab}/>
                <Link name="Mes commandes" number="2" className="nav-link active text-dark" href="#"  toggleTab={toggleTab}/>
                <Link name="Mes informations" number="3" className="nav-link active text-dark" href="#" toggleTab={toggleTab} />
                <Link name="Mes méthodes de paiement" number="4" className="nav-link active text-dark" href="#" toggleTab={toggleTab} />
            </nav>
            
            {toggle === "1" && <MesAnnonces />}
            {toggle === "2" && <MesCommandes />}
            
        </div>
    );
};

export default Profil;