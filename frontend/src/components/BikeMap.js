import GoogleMapReact from "google-map-react";
import BikeMarker from "./BikeMarker";

const BikeMap = (props) => {
<<<<<<< HEAD
    const setSelectedBike =props.setSelectedBike
    const bikes = props.bikes
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
          {/* {bikes.map(bike => (
=======
  const setSelectedBike = props.setSelectedBike;
  const bikes = props.bikes;
  let center = props.center;

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={{
        lat: center.lat,
        lng: center.lon,
      }}
      defaultZoom={12}
    >
      {/* {bikes.map(bike => (
>>>>>>> 4eab688f3663c036f1e7eefa8c1d850424f02754
              <BikeMarker
              bike={bike}
              lat={bike.location.lat}
              lng={bike.location.lon}
              setSelectedBike={setSelectedBike}
              price={bike.price}
              map={props.map}
              >
                  {props.map === "list" ? 
                  <p>{bike.price}€</p>
                  :
                  <div>
                      <p>{bike.name}</p>
                      <p>{bike.adress}</p>
                      <p>{bike.price} €</p>
                  </div>
                  }
              </BikeMarker>
          ))} */}
    </GoogleMapReact>
  );
};

BikeMap.defaultProps = {
  setSelectedBike: () => {},
  bikes: [],
  center: {
    lat: 48.856614,
    lon: 2.3522219,
  },
};

export default BikeMap;
