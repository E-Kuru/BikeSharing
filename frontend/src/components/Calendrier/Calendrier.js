import React from "react";
import { Button } from "react-bootstrap";
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from "react-places-autocomplete";

import styled from "styled-components";

const Container = styled.div`
border: 2px solid white;
font-family: Gilda Display;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-content: center;
padding: 200px;
flex-direction: column;

h1 {
  font-size: 20px;
}

h2 {
    font-size: 20px;
  }

`
const Input = styled.input`
 width: 20rem;
  border-radius: 5px;
  font-size: 14px;
  background-color: white;
  padding: 10px 24px;
  justify-content: center;

  // display: block;
  // margin-right: auto;
  // margin-left: auto;
  // border: 2px solid white;
  // padding: 20px;
  // border-radius: 10px;
  // width: 60%;
`
const Box = styled.div`
display: flex;
margin : 100px;
align-items: flex-start;
justify-content: space-between;


  .date{
    display: flex;
    justify-content: space-around;
    width: 45%;
    align-items: center;
  }



`


function Calendrier() {
     
     const [address, setAddress] = React.useState("");
     const [coordinates, setCoordinates] = React.useState({
       lat: null,
       lng: null
     });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <Container>
      <div className="date"> 
      <h1>LOUER VOTRE VÉLO EN <br/>
      QUELQUES CLICKS
      </h1>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p> {coordinates.lat}</p>
            <p> {coordinates.lng}</p>

             <Input className="input-style" style={{width: "35rem"}}
            {...getInputProps
            ({ placeholder: "Emplacement actuel ..." })}
             />

            <div className="style">
             {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "black"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
      <Box>
        <div className="box">
        <div className="date">
      <h2>DE </h2>
       <Input type="datetime-local"
        id="meeting-time"
        name="meeting-time"
       value="2022-02-02T21:30"
       />
       </div>
       <div className="date">
     <h2>À </h2>
     <Input type="datetime-local"
      id="meeting-time"
      name="meeting-time"
     value="2022-02-02T21:30"

     />
     </div>
     </div>
      </Box>
      <button type="submit" class="btn btn-light">RECHERCHER</button>
    </Container>
   
  );
}

export default Calendrier







