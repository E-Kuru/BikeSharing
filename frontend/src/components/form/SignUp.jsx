import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import styled from 'styled-components'



const SignUp = () => {
    const navigate = useNavigate()

    const formik = useFormik ({
        initialValues: {
            firstName: "",
            lastname: "",
            adress: "",
            phone: "",
            email: "",
            password:"",
            confirmPassword: "",

        },
        onSubmit: values => {
            fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(values)
            })
            .then(response => {
                if (response.status >= 400) {
                    alert(response.statusText)
                }else {
                    navigate('/admin')
                }
            })
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            firstName: Yup.string()
            .required("Adresse requise")
            .min (4, "Nom trop court")
            .max (10, "Nom trop long"),
            lastName: Yup.string()
            .required("Adresse requise")
            .min (4, "Nom trop court")
            .max (10, "Nom trop long"),
            adress:Yup.string()
            .required("Adresse requise"),
            phone: Yup.string()
            .required("Numéro de téléphone requis"),
            email:Yup.string()
            .required("Email requis"),
            password: Yup.string()
            .min(4, "password trop court")
            .required("Password est requis"),
            passwordConfirmation: Yup.string()
            .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
            )})
        })
    })


    const Modal = styled.div `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1040;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1050;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        outline: 0;
        display: flex;
        align-items: center;
    }
    
    .AllModal {
        z-index: 100;
        background: #fff;
        margin: auto;
        border-radius: 5px;
        max-width: 800px;
        max-height: 400px;
        height : 100%;
        width: 100%;
        padding: 1rem;
    }

    .logIn {
        display: flex;
        justify-content : space-between;
    }

    .logIn button,h4{
            width : 10%;
    }

    .modal-close-button {
        font-size: 1.4rem;
        font-weight: 700;
        color: #000;
        cursor: pointer;
        border: none;
        background: transparent;
    }

    .allForm {
        width : 50%;
    }
    `

    return (
        <>
        <Modal>

        <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="AllModal">
                <div className="logIn">
                    <h4>S'INSCRIRE</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    

                    <div>
                    <form onSubmit={formik.handleSubmit} className="allForm">
                    <div class="mb-3">
                            <input
                            type="text" 
                            name="name"
                            placeholder="Nom..."
                            value={formik.values.fisrtName}
                            onChange={formik.handleChange} 
                            class="form-control"
                            />
                        </div>
                        <div class="mb-3">
                            <input
                            type="text" 
                            name="lastname"
                            placeholder="Prénom..."
                            value={formik.values.lastName}
                            onChange={formik.handleChange} 
                            class="form-control"
                            />
                        </div>
                        <div class="mb-3">
                            <input
                            type="text" 
                            name="adress"
                            placeholder="Adresse..."
                            value={formik.values.adress}
                            onChange={formik.handleChange} 
                            class="form-control"
                            />
                        </div>
                        <div class="mb-3">
                            <input
                            type="number" 
                            name="phone"
                            placeholder="Numéro de téléphone..."
                            value={formik.values.phone}
                            onChange={formik.handleChange} 
                            class="form-control"
                            />
                        </div>
                        {formik.errors.phone && <p>{formik.errors.phone}</p>}
                        <div class="mb-3">
                            <input
                            type="email" 
                            name="email"
                            placeholder="Email..."
                            value={formik.values.password}
                            onChange={formik.handleChange} 
                            class="form-control"
                            />
                        </div>

                        {formik.errors.email && <p>{formik.errors.email}</p>}

                        <br />

                        <div class="mb-3">
                            <input
                            type="password" 
                            name="password"
                            placeholder="Mot de passe..."
                            value={formik.values.password}
                            onChange={formik.handleChange} 
                            class="form-control"
                            />
                        </div>

                        {formik.errors.password && <p>{formik.errors.password}</p>}

                        <br />
                        <div class="mb-3">
                            <input
                            type="password" 
                            name="confirmPassword"
                            placeholder="Confirmation de votre mot de passe..."
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange} 
                            class="form-control"
                            />
                        </div>

                        {formik.errors.confirmPassword && <p>{formik.errors.confirmPassword}</p>}

                        <br />

                        <button type="submit" class="btn btn-primary">Submit</button>
                        {/* <p>Pas encore de compte BikeSharing ? <Link>S'inscrire</Link></p> */}
                    </form>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </Modal>
        </>

    )}

export default SignUp