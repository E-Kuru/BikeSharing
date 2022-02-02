import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom' 

import Button from '../Button'
import Input from '../Input'
import { white } from '../../style/colors'
import { FloatingLabel } from 'react-bootstrap'


const Form = styled.form`
  width: 320px;
  margin: 0 auto;
  font-family: Gilda Display;
  color: white;
`
const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-right:550px;

`

const ErrorMessage = styled.div`
size: 15px;
font-family: "Gilda Display";
`

const LoginForm = () => {
  const navigate = useNavigate()

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: ''
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

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
      <h1>CONNEXION</h1>

      <FloatingLabel
        controlId="emailInput"
        label="EMAIL"
        className="mb-3"
      >
        <Input
            placeholder="Email..."
            name="Email"
            type="email"
            onChange={handleChange}
            value ={values.email}
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
          value ={values.password}
          error={errors.password}
        />
      </FloatingLabel>

      <Button
        type="submit"
        width='100%'
        round
        background={white}
        color="black"
        hover={{
          background: white,
          color: "black"
        }}
      >
        SE CONNECTER 

      </Button>
      
      {errors.submit && <ErrorMessage marginTop>{errors.submit}</ErrorMessage>}
      </Container>
    </Form>
  )
}

export default LoginForm

