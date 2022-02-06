import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import styled from "styled-components";

const Container = styled.div`

  font-family: Gilda Display;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 200px 400px;
  flex-direction: column;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 20px;
  }
  .emplacement {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }
  .containerInput {
    display: flex;
    flex-direction: column;
    width: 100%;
    
  }
`;
const Input = styled.input`
  width: 20rem;
  border-radius: 5px;
  font-size: 14px;
  background-color: white;
  padding: 10px 24px;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  margin: 100px 0;
  align-items: flex-start;
  justify-content: space-between;

  .date {
    display: flex;
    justify-content: space-around;
    width: 45%;
    align-items: center;
  }
`;

function Calendrier() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <Container>
      <div className="containerInput">
      <div className="emplacement">
        <h1>
          LOUER VOTRE VÉLO EN <br />
          QUELQUES CLICKS
        </h1>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
          style={{
            width: "100%",
          }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <p> {coordinates.lat}</p>
              <p> {coordinates.lng}</p>

              <Input
                className="input-style"
                style={{ width: "44.7rem" }}
                {...getInputProps({ placeholder: "Emplacement..." })}
              />

              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "black",
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
        <div className="date">
          <h2 style={{   marginRight: "10px"}}>DE </h2>
          <Input
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            value=""
            min=""
            max=""
          />
        </div>
        <div className="date">
          <h2 style={{   marginRight: "10px"}}>À </h2>
          <Input
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            value=""
            min=""
            max=""
          />
        </div>
      </Box>
      <button
        type="submit"
        class="btn btn-light"
        style={{ width: "350px", margin: "0 auto" }}
      >
        RECHERCHER
      </button>
      </div>
    </Container>
  );
}

export default Calendrier;
