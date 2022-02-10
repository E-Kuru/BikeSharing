import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import BikeMarker from "../components/BikeMarker";
import styled from "styled-components";
import BikesMap from "../components/BikeMap";
import BikeCard from "../components/BikeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from '../context/User'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px;
  height: calc(125vh - 240px);

  @media (max-width: 376px) {
    flex-direction: column-reverse;
  }
`;

const BikesList = styled.div`
  margin: 0 10px 0 0px;
  width: 50%;
  padding-right: 10px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: lightgray;
  }

  @media (max-width: 376px) {
    width: 100%;
    height: calc(100vh - 400px);
  }
`;

const BikeMap = styled.div`
  width: 50%;

  @media (max-width: 376px) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
`;

const Pages = styled.button`
  width: 25px;
  height: 25px;
  background: white;
  border: none;
  border-radius: 5px;
  margin: 10px 15px;
  color: black;
  font-family: "Abel", sans-serif;

  :hover {
    background: grey;
    border: none;
  }
`;

const CenterPages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 30px;
`;

const Input = styled.input`
  margin: 50px 40px;
  border-radius: 5px;
  padding: 5px 40px;
  text-align: left;
  width: 500px;
`;
const Div = styled.form`
  display: flex;
  justify-content: center;
`;

const Categorie = styled.div `
    display : flex;
    justify-content : center;
    align-items : center;
    font-family: "Gilda Display";
     
    .all{
      width : 50%;
      display : flex;
      justify-content : space-around;
      align-items : center;
    }

    .all h4{
      padding : 5px;
    }

    .all button{
      border-radius : 5px;
      background-color : #000;
      color : #fff;
      border : 1px solid white;
      width : 15%;
      margin-bottom : 1%;
    }
`

const BikeReseach = () => {
  const { annonce} = useContext(UserContext)
  const [selectedBike, setSelectedBike] = useState({});
  const [center, setCenter] = useState({ lat: 48.8646434, lon: 2.3714107 });
  const [page, setPage] = useState(1);
  
  console.log(annonce)

  if (!annonce){
      return <p>loading...</p>
  }

  return (
    <>
      <Navbar />
      <Link to={"/"} 
        style={{
          color: "white",
          textDecoration: "none",
          fontFamily: 'Overpass, sans-serif',
          width: '100%',
          paddingLeft: '30px'
        }}> Retour à la recherche </Link>
      <Container>
        <BikesList >
          {!annonce ? (
            <p>En cours de chargement...</p>
          ) : (
            annonce.map((bike, index) => (
              <BikeCard
                key={index}
                id = {bike._id}
                name={bike.name}
                price={bike.price}
                city={bike.city}
                starts={bike.starts}
                image={bike.pictures}
                description={bike.description}
                selectedBike={selectedBike}
              />
            ))
          )}
        </BikesList>
        <BikeMap>
          <BikesMap
            map="list"
            center={center}
            >
            {annonce.map((e , i) => (
                <BikeMarker 
                selectedBike={selectedBike}
                setSelectedBike={setSelectedBike}
                key={e.name + e.description + i} 
                bike = {e._id}
                lat={e.location.coordinates[0]} 
                lng={e.location.coordinates[1]} 
                />
            ))}
            </BikesMap>
        </BikeMap>
      </Container>
      <CenterPages>
        <Pages onClick={() => setPage(1)}>1</Pages>
        <Pages onClick={() => setPage(2)}>2</Pages>
        <Pages onClick={() => setPage(3)}>3</Pages>
        <Pages onClick={() => setPage(4)}>4</Pages>
      </CenterPages>
      <Footer />
    </>
  );
};
export default BikeReseach;
