// import { Marker } from "google-maps-react";
import styled from "styled-components";
import { GrBike } from 'react-icons/gr'


const MarkerContainer = styled.div`
  position : relative;  
  width: 40px;
  height: 40px;

`;

const BikeMarker = (props) => {
    return (
  
        <MarkerContainer>
        <GrBike
            onMouseEnter={() => {
                props.setSelectedBike(props.bike);
            }}
            onMouseLeave={() => {
                props.setSelectedBike({});
            }}
            style={{
              color : `${props.color}`,
                width: `${props.map === 'list'? '20px' : '25px' }`,
                height: `${props.map === 'list'? '10px' : '25px' }`,
            }}
            lat={props.lat}
            lng={props.lng}
        />
        </MarkerContainer>
    )
}

export default BikeMarker