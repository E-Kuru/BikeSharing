import GoogleMapReact from "google-map-react";
import BikeMarker from "./BikeMarker";

const BikeMap = (props) => {
    let center = props.center
    
    return (
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: center.lat,
          lng: center.lon,
        }}
        defaultZoom={12}
      >
          {props.children}
                  {/* {props.map === "list" ? 
                  <p>{bike.price}€</p>
                  :
                  <div>
                      <p>{bike.name}</p>
                      <p>{bike.adress}</p>
                      <p>{bike.price} €</p>
                  </div>
                  } */}
    </GoogleMapReact>
  );
};


export default BikeMap;
