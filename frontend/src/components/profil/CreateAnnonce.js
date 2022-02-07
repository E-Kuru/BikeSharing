import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { createAnnonce } from "../../api/annonce"

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: Gilda Display;
  border-radius: 10px;
  height: 360px;
  background-color: white;
`
const Content = styled.div`
    margin: 10px;
    width: 100%;
`

const CreateAnnonce = ({tabCreateAnnonce, fetchAnnonceUser}) => {
    
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            city: "",
            categorie: "",
            price: "",
        },
        onSubmit: async (values) => {
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
                <h1 className="text-dark">Créer une annonce</h1>
                
                <form onSubmit={formik.handleSubmit}>
                    <div className='col-8 ps-2'>
                        <input
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            placeholder="nom"
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>

                    <div className='col-8 ps-2'>
                        <select className="form-select border-dark border-3" aria-label="Default select example" 
                        value={formik.values.categorie}
                        name="categorie" 
                        onChange={formik.handleChange}
                        >
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>

                    <div className='col-8 ps-2'>
                        <input
                            type="text"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder="description"
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>

                    <div className='col-8 ps-2'>
                        <input
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            placeholder="ville"
                            className="form-control border border-dark border-3 my-1"
                        />
                    </div>
                    
                    <div className='col-8 ps-2'>
                        <input
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            placeholder="prix"
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>
                   

                    {/* <Input type="file" name="file" onChange={handleFileChange} /> */}
                    <button type="submit" className="btn btn-primary ms-2 my-2">
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
