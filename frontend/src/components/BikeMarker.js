// import { Marker } from "google-maps-react";
// import styled from "styled-components";

// const Marker = styled.div`
//   height: 20px;
//   background: #b7094c;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 5px;
//   border: 1px solid white;

//   :hover {
//     background-color: #892b64
//   }

// `;


// const BikeMarker = (props) => {
//     return (
//         <Marker
//         onMouseEnter={() => {
//             props.setSelectedBike(props.bike);
//         }}
//         onMouseLeave={() => {
//             props.setSelectedBike({});
//         }}
//         style={{
//             width: `${props.map === 'list'? '40px' : '120px' }`,
//             height: `${props.map === 'list'? '25px' : '70px' }`,
//             padding: '5px',
//         }}
//         lat={props.lat}
//         lng={props.lng}
//         >
//             {props.children}
//         </Marker>
//     )
// }

// export default BikeMarker