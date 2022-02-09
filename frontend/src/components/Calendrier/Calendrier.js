import React from "react";
import { useState, useContext } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from "react-places-autocomplete";
import {getAnnonceDate } from "../../api/annonce";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { useFormik } from "formik";
import moment from "moment"
import { UserContext } from '../../context/User'

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
`

const Input = styled.input`
  width: 20rem;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px 24px;
`

const Box = styled.div`
  display: flex;
  margin: 100px 0;
  justify-content: space-between;

  .date {
    display: flex;
    justify-content: space-around;
    width: 45%;
    align-items: center;
  }
  .date h2{
    margin-top: 5%;
    width: 15%;
  }
`

const Calendrier = () => {
  const { setAnnonceDate, annonceDate } = useContext(UserContext)
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState({ lat: 48.8646434, lon: 2.3714107 });
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      dateBegin: "",
      dateEnd: "",
    },
    onSubmit: async (values) => {
        console.log(values)

        const response = await getAnnonceDate(moment(values.dateBegin).format("YYYY-MM-DD"),moment(values.dateEnd).format("YYYY-MM-DD"))
        console.log(response)
        setAnnonceDate(response)
        navigate("/BikeResearch")         
    },
  });

   
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const changeBeginDate = (e) => {
    setBeginDate(e.target.value);
    console.log(beginDate)
  };

  const changeEndDate = (e) => {
    setEndDate(e.target.value);
    console.log(endDate)
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

             <Input className="input-style" style={{width: "44.7rem"}}
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
    
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <div className="date">
          <h2>DE</h2>

          <Input 
            type="datetime-local"
            id="meeting-time"
            name="dateBegin"
            onChange={formik.handleChange}
            value={formik.values.dateBegin}
          />
        </div>

        <div className="date">
          <h2>À</h2>
            <Input 
              type="datetime-local"
              id="meeting-time"
              name="dateEnd"
              onChange={formik.handleChange}
              value={formik.values.dateEnd}
            />
        </div>
      </Box>

      <button type="submit" class="btn btn-light" style={{width : "350px", margin : "0 auto"}} 
       >RECHERCHER</button>
    </form>
  </Container>
  );
}

export default Calendrier