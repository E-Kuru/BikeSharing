import styled from "styled-components";
import Carte from "../../images/paiement.png"
import { Button, Form } from "react-bootstrap"


const CardBox = styled.div`
margin: 30px;
padding: 50px;
height: 100%;
font-family: 'Gilda Display', serif;
border: 2px solid white;
`;


const CardImage = styled.div`
height: 100px;
width: 500px;
`;




const Paiement = () => {
  
    return(

        <CardBox>
          <div style = {{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <h1>Payer en ligne</h1>
            {/* <CardImage
          style={{ background: `url(${Carte}) no-repeat center/cover` }}
        /> */}
        </div>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email :</Form.Label>
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