import React from 'react';
import { useFormik } from "formik"
import { modifyInfosUser } from "../../api/user"
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 360px;
  background-color: white;
`
const Content = styled.div`
    margin: 10px;
    width: 100%;
    font-family: Gilda Display;
`

const EditInfosUser = ({ fetchUser, user, toggleTab}) => {

    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            adress: user.adress
        },
        onSubmit: async (values) => {
            
            const response = modifyInfosUser(values)
            console.log(response)
            fetchUser(response)
            toggleTab()
        },
    })


    return (
        <Container>
            <Content>
                <h2 className='text-dark ps-2'>Modifier mes informations</h2>
                <form onSubmit={formik.handleSubmit}>
                        <div className='col-4 ps-2'>
                            <input 
                                type='text'
                                value={formik.values.firstName}
                                name="firstName"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3"
                            />
                        </div>
                        <div className='col-4 ps-2'>
                            <input
                                type='text'
                                value={formik.values.lastName}
                                name="lastName"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3 my-1"
                            />
                        </div>
                        <div className='col-4 ps-2'>
                            <input
                                type='email'
                                value={formik.values.email}
                                name="email"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3 my-1"
                            />
                        </div>
                        <div className='col-4 ps-2'>
                            <input
                            type='text'
                            value={formik.values.phoneNumber}
                            name="phoneNumber"
                            onChange={formik.handleChange}
                            className="form-control border border-dark border-3 my-1"
                            />
                        </div>
                        <div className='col-4 ps-2'>
                            <input
                                type='adress'
                                value={formik.values.adress}
                                name="adress"
                                onChange={formik.handleChange}
                                className="form-control border border-dark border-3 my-1"
                            />
                        </div>
                        <button
                        type="submit"
                        className='btn btn-primary ms-2 my-2'
                        >
                        Valider
                        </button>
                        <button
                        className='btn btn-danger ms-2 my-2'
                        onClick={toggleTab}
                        >
                        Annuler
                        </button>
                    </form>
            </Content>
        </Container>                                
    );
};

export default EditInfosUser;