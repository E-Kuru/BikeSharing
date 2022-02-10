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
  height: 150px;
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

  return (
    <Container>
      <div className="container my-5">
        {locations.length === 0 && (
          <p className="text-white my-3">Vous avez 0 locations</p>
        )}
        {locations.map((location) => (
          <CardBox>
            <CardImage
              src="https://levelomad.com/644-large_default/l-urbain.jpg"
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
            </CardContent>
          </CardBox>
        ))}
      </div>
    </Container>
  );
};

export default MesLocations;
