import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginImage from "../../pictures/fondLogin.png"



const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik ({
        initialValues: {
            email: "",
            password:""
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
            email:Yup.string()
            .required("Email requis"),
            password: Yup.string()
            .required("Mot de passe requis")
            .min(8, "Mot de passe trop court")
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
        font-family: "Gilda Display";
        color : white;
        z-index: 100;
        background: #fff;
        margin: auto;
        border-radius: 5px;
        max-width: 800px;
        max-height: 600px;
        height : 100%;
        width: 100%;
        padding: 1rem;
    }

    .logIn {
        display: flex;
        justify-content : space-between;
    }

    .logIn h4{
        text-align : center;
        width : 47%;
        font-size : 20px;
    }

    .modal-close-button {
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
        border: none;
        background: transparent;
    }

    .allForm {
        width : 45%;
        display : flex;
        flex-direction : column;
        align-items : center;
    }
    .allForm button {
        font-weight : bold;
    }
    
    .allForm div{
        width : 100%;
    }
    
    .account{
        width 45%;
    }
    .account h2{
        margin-top : 10%;
        text-align : center;
        font-size : 18px;
        padding : 10px;
    }
    
    .account h2 button{
        padding : 3%;
        margin-top : 10%;
        font-size : 20px;
        background : none;
        color : white;
        border : none;
        text-decoration : underline ;
    }

    .account h2 button:hover{
        font-weight : bold;
        text-decoration : none;
        background-color: white;
        color : black;

    }
    `

    return (
        <>
        <Modal>

        <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="AllModal" style={{background : `url(${loginImage}) no-repeat center/cover`}}>
                <div className="logIn">
                    <h4>CONNEXION OU INSCRIPTION</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">

                    <div>
                    <form 
                    onSubmit={formik.handleSubmit} 
                    className="allForm">
                        <div className="mb-3">
                            <label className="form-label">EMAIL</label>
                            <input
                            type="email" 
                            name="email"
                            placeholder="Email..."
                            value={formik.values.email}
                            onChange={formik.handleChange} 
                            className="form-control"
                            />
                        </div>

                        {/* {formik.errors.email && <p>{formik.errors.email}</p>} */}

                        <br />

                        <div className="mb-3">
                            <label className="form-label">MOT DE PASSE</label>
                            <input
                            type="password" 
                            name="password"
                            placeholder="Mot de passe..."
                            value={formik.values.password}
                            onChange={formik.handleChange} 
                            className="form-control"
                            />
                        </div>

                        {/* {formik.errors.password && <p>{formik.errors.password}</p>} */}

                        <br />

                        <button type="submit" className="btn btn-light">SE CONNECTER</button>
                        {/* <p>Pas encore de compte BikeSharing ? <Link>S'inscrire</Link></p> */}
                    </form>
                    <div className="account">
                        <h2>Pas encore de compte BikeSharing ? 
                            <button>
                                S'inscrire
                            </button>
                        </h2>
                    </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </Modal>
        </>

    )}

export default Login