import React from "react";
import { useEffect, useState } from "react";
import { getLocationUser } from "../../api/location";
import styled from "styled-components";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import moment from "moment";

const Container = styled.div`
  height: 600px;
  width: 100%;
  
`;
const CardBox = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 5px;
  height: 200px;
  display: flex;
  overflow: hidden;
  background-color: white;
`;
const CardImage = styled.img`
  background-position: bottom;
  background-size: cover;
  height: 110%;
  width: 30%;
`;

const CardContent = styled.div`
  margin: 10px;
  // display: flex;
  // justify-content: space-between;
  width: 100%;
  font-family: Gilda Display;

`;
const P = styled.p`
  font-size: 20px;
`;


const MesLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const locations = await getLocationUser();
    setLocations(locations);
  };

  let imageRamdon= ["https://levelomad.com/644-large_default/l-urbain.jpg",
  "https://www.cleanrider.com/wp-content/uploads/2021/07/essai-velomad-0001_271220.jpg",
  "https://dyw7ncnq1en5l.cloudfront.net/gallery/15/15441/5ae1694d-decathlon-elops-920-e-connect.jpeg",
  "https://www.journaldugeek.com/content/uploads/2022/01/pipop.jpg",
  "https://www.velo-cyclisme.com/wp-content/uploads/2017/10/le-velo-electrique.jpg",
"https://www.veloderoute.com/photos/news/zooms/2022-01-13-170923_cannondale-supersix-evo-cx[7a15f3a5f358a9202862429281bcc24c164209023234].jpg",
"https://www.veloderoute.com/photos/news/zooms/8a32172586f2e9dd75eb0d040c1692f5163646666513.jpg",
"https://www.cleanrider.com/wp-content/uploads/2022/01/essai-velo-electrique-swapfiets0019.jpg",
"https://caminade.eu/img/velos.route.et.vtt.fabriques.en.france/1610274124.21120.jpg"]

  return (
    <Container>
      <div className="container my-5">
        {locations.length === 0 && (
          <p className="text-white my-3">Vous avez 0 locations</p>
        )}
        {locations.map((location,i) => {
          for ( i = 0; i<=imageRamdon.length; i++){
            var test = imageRamdon[Math.floor(Math.random()*imageRamdon.length)]
          }
          return(
          <CardBox>
            <CardImage
              src={test}
              alt=""
            ></CardImage>
            <CardContent className=" h-100">
              <P className="mb-1 my-1 text-dark">{location.price}€/h</P>
              <P className="mb-1 my-1 text-dark">
                Date début: {moment(location.dateBegin).format("DD-MM-YYYY")}
              </P>
              <P className="text-dark">
                Date fin: {moment(location.dateEnd).format("DD-MM-YYYY")}
              </P>
              <P className="mb-2 my-1 text-dark">{location.status}</P>
            </CardContent>
          </CardBox>)
})}
      </div>
    </Container>
  );
};

export default MesLocations;
