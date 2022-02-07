// import { useFormik } from "formik";
// import * as Yup from "yup";
// import styled from "styled-components";

// import { Annonce, files } from "../../api/annonce";

// const Container = styled.div`
// border: 2px solid white;
// font-family: Gilda Display;
// width: 100%;
// height: 80vh;
// display: flex;
// justify-content: center;
// align-content: center;
// padding: 200px;
// flex-direction: column;

// `
// const Form = styled.form`
// display: flex;
// flex-direction: column;
// `

// const Select = styled.select`
// width: 20rem ;

// `
// const Input = styled.input`
//  width: 20rem;
//   border-radius: 5px;
//   font-size: 14px;
//   background-color: white;
//   padding: 10px 24px;
//   justify-content: center;
//   margin: 20px auto;
// `
// const CreateAnnonce = () => {
//   const formik = useFormik({
//     initialValues: {
//       titre: "",
//       type: "",
//       adress: "",
//       description: "",
//       price: "",
//       picture: "",
//     },
//     onSubmit: async (values, { setFieldError }) => {
//       try {
//         const response = await Annonce(values);
//         Annonce(response);
//       } catch (e) {
//         setFieldError("submit", "Incorrect");
//       }
//     },

//     onSubmit: async (values, { setFieldError }) => {
//       try {
//         const response = await Annonce(values);
//         Annonce(response);
//         files(response);
//       } catch (e) {
//         setFieldError("submit", "Incorrect");
//       }
//     },

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
//         <button type="submit" className="btn btn-light" style={{width:"20rem"}}>
//           Valider
//         </button>
//       </Form>
//     </Container>
//   );
// };

// export default CreateAnnonce;
