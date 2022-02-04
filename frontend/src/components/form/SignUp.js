import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { signUp, login } from "../../api/auth";
import { UserContext } from "../../context/User";
import { useContext } from "react";

import Button from "../Button";
import Input from "../Input";
import { white } from "../../style/colors";
import { FloatingLabel } from "react-bootstrap";
import { ModalContext } from "../../context/Modal";

const Form = styled.form`
  width: 300px;
`;

const ErrorMessage = styled.div`
  size: 15px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 49%;
  padding-left: 10%;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { setVisible } = useContext(ModalContext);

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      adress: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, { setFieldError }) => {
      const { firstName, lastName, adress, phoneNumber, email, password } =
        values;
      const user = {
        firstName,
        lastName,
        adress,
        phoneNumber,
        email,
        password,
      };

      const response = await signUp(user);

      if (response.error) {
        setFieldError("submit", response.error);
      } else {
        const user = await login({ email, password });
        setUser(user);
        setVisible(false);
        navigate("/profil");
      }
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Adresse requise")
        .min(4, "Nom trop court")
        .max(10, "Nom trop long"),
      lastName: Yup.string()
        .required("Adresse requise")
        .min(4, "Nom trop court")
        .max(10, "Nom trop long"),
      adress: Yup.string().required("Adresse requise"),
      phoneNumber: Yup.string().required("Numéro de téléphone requis"),
      email: Yup.string().required("Email requis"),
      password: Yup.string()
        .min(4, "password trop court")
        .required("Password est requis"),
      passwordConfirmation: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Les deux mot de passe doivent être identiques"
        ),
      }),
    }),
  });
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: 30, textAlign: "center" }}>INSCRIPTION</h1>
        <FloatingLabel controlId="firstnameInput" label="NOM" className="mb-3">
          <Input
            placeholder="Nom..."
            name="firstName"
            type="text"
            onChange={handleChange}
            value={values.firstName}
            error={errors.firstName}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="lastNameInput"
          label="Prénom"
          className="mb-3"
        >
          <Input
            placeholder="Prénom..."
            name="lastName"
            type="text"
            onChange={handleChange}
            value={values.lastName}
            error={errors.lastName}
          />
        </FloatingLabel>
        <FloatingLabel controlId="adressInput" label="Adresse" className="mb-3">
          <Input
            placeholder="Adresse..."
            name="adress"
            type="text"
            onChange={handleChange}
            value={values.adress}
            error={errors.adress}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="phoneInput"
          label="Numéro de téléphone"
          className="mb-3"
        >
          <Input
            placeholder="Numéro de téléphone..."
            name="phoneNumber"
            type="text"
            onChange={handleChange}
            value={values.phone}
            error={errors.phone}
          />
        </FloatingLabel>
        <FloatingLabel controlId="emailInput" label="Email" className="mb-3">
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
          label="Mot de passe"
          className="mb-3"
        >
          <Input
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            error={errors.password}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="confirmPasswordInput"
          label="Confirmation du mot de passe"
          className="mb-3"
        >
          <Input
            placeholder="Confirmer votre mot de passe..."
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={values.confirmPassword}
            error={errors.confirmPassword}
          />
        </FloatingLabel>

        <Button
          type="submit"
          width="100%"
          round
          background={white}
          color="black"
        >
          S'INSCRIRE
        </Button>

        {errors.submit && (
          <ErrorMessage marginTop>{errors.submit}</ErrorMessage>
        )}
      </Form>
    </Container>
  );
};

export default SignUp;
