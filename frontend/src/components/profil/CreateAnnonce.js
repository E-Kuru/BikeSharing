import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useState } from "react";

import { createAnnonce } from "../../api/annonce"
// import PlacesAutocomplete, { geocodeByAddress, getLatLng} from "react-places-autocomplete";
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBJIeo6IGX39PtiojU7LIc4Vq1zYlzj4pQ");

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: 'Overpass', sans-serif;
  border-radius: 10px;
<<<<<<< HEAD
  height: 440px;
  background-color: black;
  border: solid 2px white
=======
  height: 360px;
  border : 1px solid white;
  padding : 20px;
>>>>>>> 43ce9bfd5a5e64e4952b8164cf1aa57641d5bdff
`
const Content = styled.div`
    margin: 10px;
    width: 100%;
`

const CreateAnnonce = ({tabCreateAnnonce, fetchAnnonceUser}) => {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
      lat: null,
      lng: null
    });
    
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            city: "",
            categorie: "",
            price: "",
            address: ""
        },
        onSubmit: async (values) => {
            const { results } = await Geocode.fromAddress(values.address) // Get latitude & longitude from address.
            values.location = {
                type: "Point",
                coordinates:[
                    results[0].geometry.location.lat,
                    results[0].geometry.location.lng
                ]
            }
            console.log(values)

            const response = await createAnnonce(values)
            fetchAnnonceUser(response)
            tabCreateAnnonce()
        },

        // validationSchema: Yup.object().shape({
        //   name: Yup.string()
        //     .min(4, "nom trop court")
        //     .required("le nom est requis"),
        // }),
    });
    
    //   const handleFileChange = (e) => {
    //     console.log(e.target.files[0]);
    //     formik.setFieldValue("file", e.target.files[0]);
    //   };

    // const handleSelect = async value => {
    //     const results = await geocodeByAddress(value);
    //     const latLng = await getLatLng(results[0]);
    //     setAddress(value);
    //     setCoordinates(latLng);
    //   };
    
    return (
        <Container>
            <Content>
                <h1 className="text-light">Créer une annonce</h1>
                
                <form onSubmit={formik.handleSubmit}>
                    <div className='col-8 ps-2'>
                        <input
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            placeholder="NOM"
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>

                    <div className='col-8 ps-2'>
                        <select className="form-select border-dark border-3" aria-label="Default select example" 
                        value={formik.values.categorie}
                        name="categorie" 
                        onChange={formik.handleChange}
                        >
                            <option>VTT</option>
                            <option>VTC</option>
                            <option>Vélo de ville</option>
                            <option>Autre...</option>
                        </select>
                    </div>

                    <div className='col-8 ps-2'>
                        <input
                            type="text"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder="DESCRIPTION"
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>

                    <div className='col-8 ps-2'>
                        <input
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            placeholder="VILLE"
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>
                    
                    <div className='col-8 ps-2'>
                        <input
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            placeholder="PRIX"
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>
                    
                    <div className='col-8 ps-2'>
                        <input
                            type="text"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            placeholder="address"
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>
                 
                    {/* <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <p> {coordinates.lat}</p>
                            <p> {coordinates.lng}</p>
                            
                            <div className='col-8 ps-2'>
                                <input className="form-control border border-dark border-3 my-1" 
                                {...getInputProps 
                                ({ placeholder: "Emplacement actuel ..." })}
                            />
                            </div>
                            

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
                    </PlacesAutocomplete> */}

                    {/* <Input type="file" name="file" onChange={handleFileChange} /> */}
                    <button type="submit" className="btn btn-light ms-2 my-2">
                        Valider
                    </button>
                    <button type="submit" className="btn btn-danger ms-2 my-2" onClick={tabCreateAnnonce}>
                        Annuler
                    </button>
                </form>
            </Content>
        </Container>
    );
};

export default CreateAnnonce;
