import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { createAnnonce } from "../../api/annonce"
import Geocode from "react-geocode"

Geocode.setApiKey("AIzaSyBJIeo6IGX39PtiojU7LIc4Vq1zYlzj4pQ")

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: 'Overpass', sans-serif;
  border-radius: 10px;
  height: 540px;
  background-color: black;
  border: solid 2px white;
`
const Content = styled.div`
    margin: 0 auto;
    width: 100%;
`
const Input = styled.input`
    margin-bottom: 30px;
`
const CreateAnnonce = ({tabCreateAnnonce, fetchAnnonceUser}) => {
    
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            city: "",
            categorie: "",
            price: "",
            location: "",
            dateBegin: "",
            dateEnd: ""
        },
        onSubmit: async (values) => {
            console.log(values)
            const { results } = await Geocode.fromAddress(values.location) // Get latitude & longitude from address.
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
    
    return (
        <Container>
            <Content>
                <h1 className="text-light pt-4 ps-4">Créer une annonce</h1>
                
                <form onSubmit={formik.handleSubmit}>
                    <div className='col-4 ps-4 pt-2'>
                        <Input
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            placeholder="Nom..."
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>

                    <div className='col-4 ps-4 pt-2'>
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

                    <div className='col-4 ps-4 pt-2'>
                        <Input
                            type="text"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder="Description..."
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>

                    <div className='col-4 ps-4 pt-2'>
                        <Input
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            placeholder="Ville..."
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>
                    
                    <div className='col-4 ps-4 pt-2'>
                        <Input
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            placeholder="Prix..."
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>
                    
                    <div className='col-4 ps-4 pt-2'>
                        <input
                            type="text"
                            name="location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            placeholder="address"
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>

                    <div className="d-flex">
                    <div className='col-2 ps-4 pt-2'>
                        <input
                            type="date"
                            name="dateBegin"
                            value={formik.values.dateBegin}
                            onChange={formik.handleChange}
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>

                    <div className='col-2 ps-4 pt-2'>
                        <input
                            type="date"
                            name="dateEnd"
                            value={formik.values.dateEnd}
                            onChange={formik.handleChange}
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>
                    </div>


                    {/* <Input type="file" name="file" onChange={handleFileChange} /> */}
                    <button type="submit" className="btn btn-light ms-4 my-2">
                        Valider
                    </button>
                    <button type="submit" className="btn btn-danger ms-3 my-2" onClick={tabCreateAnnonce}>
                        Annuler
                    </button>
                </form>
            </Content>
        </Container>
    );
};

export default CreateAnnonce;
