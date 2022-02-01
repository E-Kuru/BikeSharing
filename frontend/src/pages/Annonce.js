// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import styled from "styled-components";
// import BikesMap from "../components/BikeMap"
// import BikeCard from "../components/BikeCard"

// const Annonce = () => {
// const [selectedBike, setSelectedBike] = useState({});
// const [bikes, setBikes] = useState(null);
// const [center, setCenter] = useState(null);
// const [page,setPage] = useState(1)
// let { categorie } = useParams();

// useEffect(() => {
//     fetch(`http://localhost:3000/annonce`)
//     .then((res) => res.json())
//     .then((data) => {
//         setBikes(data.results);
//         setCenter(data.center);
//     }, [categorie, page]);

// if (!center) {
//     return <p>Chargement...</p>
// }

// return (
//     <>
//     <div>annonce</div>
//     <TitlePage> Vélo de {categorie}</TitlePage>
//     <Container>
//         <BikesList>
//         {bikes == null ? (
//             <p>En cours de chargement...</p>
//         ) : (
//             bikes.map((bike, index) => (
//                 <BikeCard
//                 key={index}
//                 name={bike.name}
//                 price={bike.price}
//                 starts={bike.starts}
//                 image={bike.pictures}
//                 id={bike._id}
//                 selectedBike={selectedBike}
//                 />
//             ))
//         )}
//         </BikesList>
//         <BikesMap>
//             <BikesMap
//             map="list"
//             center={center}
//             bikes={bikes}
//             selectedBike={selectedBike}
//             setSelectedBike={setSelectedBike}
//             />
//         </BikesMap>
//     </Container>
//     <CenterPages>
//         <Pages onClick={() => setPage(1)}>1</Pages>
//         <Pages onClick={() => setPage(2)}>2</Pages>
//         <Pages onClick={() => setPage(3)}>3</Pages>
//         <Pages onClick={() => setPage(4)}>4</Pages>
//     </CenterPages>
//     </>
// )
// })
// }

// export default Annonce