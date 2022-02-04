import React from "react";
import { useEffect, useState } from "react";
import { getAnnonce } from "../../api/annonce";
import styled from "styled-components";

const CardImage = styled.div`
  background-position: bottom;
  background-size: cover;
  width: 40%;
`;

const Box = styled.div`
  background: white;
  border-radius: 5px;
  transition: 1s;
`;
const Image = styled.img`
  height: 250px;
  width: 50px;
  min-width: 100%;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid white;
  border-radius: 50px;
  color: black;
  font-weight: bold;
  font-size: 0.7em;
  font-size: 14px;
  padding: 0.6em 4.2em;
  cursor: pointer;
  margin-top: 20px;
`;

const MesAnnonces = ({ toggle, toggleTab }) => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetchAnnonce();
  }, []);

  const fetchAnnonce = async () => {
    const annonces = await getAnnonce();
    setBikes(annonces);
  };

  return (
    <div className="container my-5">
      <Button onClick={() => toggleTab("5")}>+ Ajouter une annonce</Button>
      <div className="row">
        {bikes.map((bike, index) => (
          <div className="col-3 my-3" key={bike.name}>
            <Box className="my-1 h-100 ">
              <Image
                className="image mb-3 rounded-top"
                src="https://www.courte-focale.fr/wp-content/uploads/2012/07/The-Dark-Knight-Rises_0.jpg"
                alt=""
              ></Image>
              <h3 className="text-dark ps-2">{bike.name}</h3>
              <p className="text-dark ps-2">{bike.price}</p>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MesAnnonces;
