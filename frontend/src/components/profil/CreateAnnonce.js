import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { createAnnonce } from "../../api/annonce";
import Geocode from "react-geocode";
import { grey, red } from "../../style/colors";

Geocode.setApiKey("AIzaSyBJIeo6IGX39PtiojU7LIc4Vq1zYlzj4pQ");

const Container = styled.div`
  width: 100%;
  font-family: "Overpass", sans-serif;
  border-radius: 5px;
  height: 700px;
  background-color: black;
  padding: 0 60px;

  .button{
    display: flex;
    flex-direction: row;
    margin: 10px 30px;
  }
`;
const Content = styled.div`
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 30px;
  border: solid 1px ${(props) => (props.error ? red : grey)};
`;
const CreateAnnonce = ({ tabCreateAnnonce, fetchAnnonceUser }) => {

  const { values, errors, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        location: "",
        city: "",
        categorie: "VTT",
        price: "",
        dateBegin: "",
        dateEnd: "",
      },

      onSubmit: async (values) => {
        console.log(values);
        const { results } = await Geocode.fromAddress(values.location); // Get latitude & longitude from address.
        values.location = {
          type: "Point",
          coordinates: [
            results[0].geometry.location.lat,
            results[0].geometry.location.lng,
          ],
        };
        console.log(values);

        const response = await createAnnonce(values);
        fetchAnnonceUser(response);
        tabCreateAnnonce();
      },

      validateOnChange: false,
      validationSchema: Yup.object({
        name: Yup.string().min(3, "nom trop court").required("nom requis"),
        categorie: Yup.string().required("Catégorie requise"),
        description: Yup.string().required("Description requise"),
        city: Yup.string().required("Ville requise"),
        price: Yup.string().required("Prix requis"),
        dateBegin: Yup.string().required("date de début requise"),
        dateEnd: Yup.string().required("date de fin requise"),
      }),
    });

  // const handleFileChange = (e) => {
  //   console.log(e.target.files[0]);
  //   setFieldValue("file", e.target.files[0]);
  // };


  return (
    <Container>
      <Content>
        <h1 className="text-light ps-4">Créer une annonce</h1>

        <form onSubmit={handleSubmit}>
          <div className="col-10 ps-4 pt-2">
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Nom..."
              className="form-control border border-dark border-3 my-1"
            />
            {errors.name}
          </div>

          <div className="col-10 ps-4 pt-2">
            <select
              className="form-select border-dark border-3"
              aria-label="Default select example"
              value={values.categorie}
              name="categorie"
              onChange={handleChange}
            >
              <option >VTT</option>
              <option >VTC</option>
              <option >Vélo de ville</option>
              <option >Autre...</option>
            </select> 
            {errors.categorie}
          </div>

          <div className="col-10 ps-4 pt-2">
            <Input
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Description..."
              className="form-control border border-dark border-3 my-1"
            />
            {errors.description}
          </div>
          <div className="col-10 ps-4 pt-2">
            <input
              type="text"
              name="location"
              value={values.location}
              onChange={handleChange}
              placeholder="address"
              className="form-control border border-dark border-3 my-1"
            />
          </div>
          <div className="col-10 ps-4 pt-2">
            <Input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="Ville..."
              className="form-control border border-dark border-3 my-1"
            />
          </div>

          <div className="col-10 ps-4 pt-2">
            <Input
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
              placeholder="Prix..."
              className="form-control border border-dark border-3 my-1"
            />
            {errors.price}
          </div>

          <div className="d-flex">
            <div className="col-5 ps-4 pt-2">
              <input
                type="date"
                name="dateBegin"
                value={values.dateBegin}
                onChange={handleChange}
                className="form-control border border-dark border-3 my-1"
              />
              {errors.dateBegin}
            </div>

            <div className="col-5 ps-4 pt-2">
              <input
                type="date"
                name="dateEnd"
                value={values.dateEnd}
                onChange={handleChange}
                className="form-control border border-dark border-3 my-1"
              />
              {errors.dateEnd}
            </div>
          </div>

          <div className=" button col-4 ps-4 pt-2">
            {/* <Input type="file" name="file" onChange={handleFileChange} /> */}
            <button type="submit" className="btn btn-light col-12 ms-3 my-2">
              Valider
            </button>
            <button
              type="submit"
              className="btn btn-danger col-12 ms-3 my-2"
              onClick={tabCreateAnnonce}
            >
              Annuler
            </button>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default CreateAnnonce;
