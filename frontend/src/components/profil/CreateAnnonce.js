// import { useFormik } from "formik";
// import * as Yup from "yup";
// import styled from "styled-components";

import { annonce, files } from "../../api/annonce";

// const Container = styled.div`
//   width: 320px;
//   margin: 0 auto;
//   font-family: Gilda Display;
//   color: white;
//   border: red 2px solid;

// `
// const Form = styled.form`
// `

const Select = styled.form`
`
const Button = styled.form`
`

const Input = styled.input`
height: 20px;
`
const CreateAnnonce = () => {
  const formik = useFormik({
    initialValues: {
      titre: "",
      type: "",
      adress: "",
      description: "",
      price: "",
      picture: "",
    },
    onSubmit: async (values, { setFieldError }) => {
      try {
        const response = await annonce(values);
        annonce(response);
      } catch (e) {
        setFieldError("submit", "Incorrect");
      }
    },

    onSubmit: async (values, { setFieldError }) => {
      try {
        const response = await annonce(values);
        annonce(response);
        files(response);
      } catch (e) {
        setFieldError("submit", "Incorrect");
      }
    },

//     validationSchema: Yup.object().shape({
//       titre: Yup.string()
//         .min(4, "titre trop court")
//         .required("titre est requis"),
//     }),
//   });

//   const handleFileChange = (e) => {
//     console.log(e.target.files[0]);
//     formik.setFieldValue("file", e.target.files[0]);
//   };

//   return (
//     <Container>
//       <h1>Créer une annonce</h1>

//       <Form onSubmit={formik.handleSubmit}>
//         <Input
//           type="text"
//           name="titre"
//           value={formik.values.titre}
//           onChange={formik.handleChange}
//           placeholder="titre"
//         />

//         <Input
//           type="text"
//           name="adress"
//           value={formik.values.adress}
//           onChange={formik.handleChange}
//           placeholder="adresse"
//         />

//         <Select class="form-select" aria-label="Default select example">
//           <option selected>Open this select menu</option>
//           <option value="1">One</option>
//           <option value="2">Two</option>
//           <option value="3">Three</option>
//         </Select>

//         <Input
//           type="text"
//           name="description"
//           value={formik.values.description}
//           onChange={formik.handleChange}
//           placeholder="description"
//         />

//         <Input
//           type="price"
//           name="price"
//           value={formik.values.price}
//           onChange={formik.handleChange}
//           placeholder="prix"
//         />

//         <Input type="file" name="file" onChange={handleFileChange} />
//         <Button type="submit" class="btn btn-light">
//           Valider
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default CreateAnnonce;
