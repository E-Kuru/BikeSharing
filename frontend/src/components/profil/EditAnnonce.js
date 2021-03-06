import React from 'react';
import { useFormik } from "formik"
import { modifyAnnonce } from "../../api/annonce"
import styled from "styled-components";

const Box = styled.div`
    background: white;
    border-radius: 5px;
    transition: 1s;
    font-family: Gilda Display;
`
const Image = styled.img`
    height: 250px;
    width: 50px;
    min-width: 100%;
`

const EditAnnonce = ({annonce, annuler, fetchAnnonceUser, index, test}) => {

    const formik = useFormik({
        initialValues: {
            name: annonce.name,
            description: annonce.description,
            categorie: annonce.categorie,
            price: annonce.price,
            city: annonce.city
        },
        onSubmit: async (values) => {
            
            const response = modifyAnnonce(index, values)
            fetchAnnonceUser(response)
            console.log(response)
            annuler()
        },
    })


    return (
        // <div className="row">
            <div className="col-3 my-3" key={annonce.name} >
                <Box className="my-1 h-100 " >
                    <Image className="image mb-3 rounded-top"
                    src="https://levelomad.com/644-large_default/l-urbain.jpg" alt="" 
                    >
                    </Image>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='col-8 ps-2'>
                            <input 
                                type='text'
                                value={formik.values.name}
                                name="name"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3"
                            />
                        </div>
                        <div className='col-8 ps-2'>
                            <input
                                type='text'
                                value={formik.values.categorie}
                                name="categorie"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3 my-1"
                            />
                        </div>
                        <div className='col-8 ps-2'>
                            <input
                                type='text'
                                value={formik.values.description}
                                name="description"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3 my-1"
                            />
                        </div>
                        <div className='col-8 ps-2'>
                            <input
                            type='text'
                            value={formik.values.city}
                            name="city"
                            onChange={formik.handleChange}
                            className="form-control border border-dark border-3 my-1"
                            />
                        </div>
                        <div className='col-8 ps-2'>
                            <input
                                type='number'
                                value={formik.values.price}
                                name="price"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3 my-1"
                            />
                        </div>

                        <div className="d-flex">
                    <div className='col-4 ps-2 '>
                        <input
                            type="date"
                            name="dateBegin"
                            value={formik.values.dateBegin}
                            onChange={formik.handleChange}
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>

                    <div className='col-4 ps-2 '>
                        <input
                            type="date"
                            name="dateEnd"
                            value={formik.values.dateEnd}
                            onChange={formik.handleChange}
                            className="form-control border border-dark border-3 my-1"
                            />
                    </div>
                    </div>
                        <button
                        type="submit"
                        className='btn btn-primary ms-2 mb-2 '
                        >
                        Valider
                        </button>
                        <button
                        className='btn btn-danger ms-2 mb-2 '
                        onClick={annuler}
                        >
                        Annuler
                        </button>
                    </form>
                </Box>
            </div>
        // </div>
    );
};

export default EditAnnonce;