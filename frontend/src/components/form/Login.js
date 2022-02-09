import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { UserContext } from "../../context/User";
import { useContext } from "react";

import Button from "../Button";
import Input from "../Input";
import { white } from "../../style/colors";
import { FloatingLabel } from "react-bootstrap";
import { ModalContext } from "../../context/Modal";
import { MdOutlinePermIdentity } from 'react-icons/md';

const Form = styled.form`
  width: 320px;
  margin: 0 auto;
  font-family: Gilda Display;
  color: white;
`;
const Container = styled.div`
  width: 300px;
  height: 330px;
  margin-right: 550px;
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  size: 15px;
  font-family: "Gilda Display";
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  const { setVisible } = useContext(ModalContext);

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setFieldError }) => {
      try {
        const response = await login(values);
        setUser(response);
        setVisible(false);
        navigate("/");
      } catch (e) {
        setFieldError("submit", "Incorrect email/password");
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().required("Email requis"),
      password: Yup.string()
        .required("Mot de passe requis")
        .min(4, "Mot de passe trop court"),
    }),
  });
  // console.log(user);
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <h1
          style={{
            marginBottom: 30,
          }}
        >
          CONNEXION
        </h1>

        <FloatingLabel controlId="emailInput" label="EMAIL" className="mb-3">
          <Input
            placeholder="Email..."
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            error={errors.email}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="passwordInput"
          label="MOT DE PASSE"
          className="mb-3"
        >
          <Input
            placeholder="Mot de passe..."
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            error={errors.password}
          > 
          </Input>
        </FloatingLabel>

        <Button
          type="submit"
          width="100%"
          round
          background={white}
          color="black"
          hover={{
            background: white,
            color: "black",
          }}
        >
          SE CONNECTER
        </Button>

        {errors.submit && (
          <ErrorMessage marginTop>{errors.submit}</ErrorMessage>
        )}
      </Container>
    </Form>
  );
};

export default LoginForm;
