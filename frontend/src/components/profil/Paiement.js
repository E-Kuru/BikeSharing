import styled from "styled-components";
import Carte from "../../images/paiement.png"
import { Button, Form } from "react-bootstrap"
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";


const CardBox = styled.div`
margin: 30px;
padding: 50px;
height: 100%;
/* border-radius: 10px;
height: 500px;
display: flex;
justify-content: flex-start;
overflow: hidden; */
border: 2px solid white;

/* :hover {
  background-color: black;
} */
`;

const Icon = styled.div`
  margin-left: 170px;
`;

const CardImage = styled.div`
background-position: bottom;
background-size: cover;
width: 40%;
`;

const CardText = styled.div`
margin-top: 0;
display: flex;
flex-direction: column;
h1 {
  font-family: "Overpass", sans-serif;
}
`;


const Paiement = () => {
    return(
        <CardBox>
            <h1>Payer en ligne</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText" >
    <Form.Label>Numéro de carte bancaire :</Form.Label>
    <Form.Control type="text" placeholder="**** **** **** **** ***" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Nom sur la carte :</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Button variant="light" type="submit">
    VALIDER
  </Button>
      </CardBox>
    )
}

export default Paiement