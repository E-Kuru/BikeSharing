import React from "react";
import { useEffect, useState } from "react";
import { getCommandeUser, confirmLocation } from "../../api/location";
import { getAnnonce } from "../../api/annonce";
import styled from "styled-components";
import moment from "moment";

const CardBox = styled.div`
  border-radius: 5px;
  height: 230px;
  display: flex;
  overflow: hidden;
  background-color: white;
  width: 100%;
`;
const CardImage = styled.img`
  background-position: bottom;
  background-size: cover;
  height: 110%;
  width: 30%;
`;
const CardContent = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  
`;
const P = styled.p`
  font-size: 20px;
`;
const Container = styled.div`
  height: 1500px;
  width: 100%;
`;

const MesCommandes = () => {
  const [commandes, setCommandes] = useState([]);
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetchCommandes();
  }, []);

  useEffect(() => {
    fetchAnnonces();
  }, []);

  const fetchCommandes = async () => {
    const commandes = await getCommandeUser();
    setCommandes(commandes);
  };

  const fetchAnnonces = async () => {
    const annonces = await getAnnonce();
    setAnnonces(annonces);
  };

  const confirmLocations = async (id) => {
    const response = await confirmLocation(id);
    fetchCommandes();
  };


  return (
    <Container>
      <div className="container my-5">
        {commandes.length === 0 && (
          <p className="text-white my-3">Vous avez 0 commandes</p>
        )}
        {commandes.map((commande, i) => {
          let findAnnonce = annonces.find((e) => e._id === commande.annonce);
          if (findAnnonce === undefined) {
            return <p>erreur</p>;
          } else {
            return (
              <CardBox className="col-8 mb-4">
                <CardImage
                  src="https://levelomad.com/644-large_default/l-urbain.jpg"
                  alt=""
                ></CardImage>
                <CardContent className=" h-100">
                  <div>
                    <P className="mb-1 my-1 text-dark">{findAnnonce.name}</P>
                    <P className="mb-1 my-1 text-dark">{commande.price}€/h</P>
                    <P className="mb-1 my-1 text-dark">
                      Date début:{" "}
                      {moment(commande.dateBegin).format("DD-MM-YYYY")}
                    </P>
                    <P className="text-dark">
                      Date fin: {moment(commande.dateEnd).format("DD-MM-YYYY")}
                    </P>
                    {commande.status === "En attente" ?
                    <button className="btn btn-secondary" onClick={()=>confirmLocations(commande._id)}> En attente</button>:
                    <button className="btn btn-success "> Confirmé</button>}
                  </div>
                </CardContent>
              </CardBox>
            );
          }
        })}
      </div>
    </Container>
  );
};

export default MesCommandes;
