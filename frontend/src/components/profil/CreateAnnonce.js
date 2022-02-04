import { Button, Form } from "react-bootstrap"


const CreateAnnonce = () => {
  return(
<>
<Form>
  <Form.Group className="mb-3 " style={{padding: 5}}>
    <Form.Label>Titre</Form.Label>
    <Form.Control placeholder="Titre..."/>
  </Form.Group>
  <Form.Group className="mb-3"style={{padding: 5}}>
    <Form.Label>Type</Form.Label>
    <Form.Select style={{padding: 5}}>
      <option>VTT</option>
      <option>VTC</option>
      <option>Vélo de ville</option>
      <option>Autres...</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" style={{padding: 5}} controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" placeholder="Description..." rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" style={{padding: 5}}>
    <Form.Label>Prix</Form.Label>
    <Form.Control placeholder="Prix..." />
  </Form.Group>
  <Form.Group className="mb-3" style={{padding: 5}}>
    <Form.Label>Ajouter une image</Form.Label>
    <br/>
    <input type="file" />
  </Form.Group>
  <Button  className= "mb-5" style={{padding: 5}} type="submit" variant="light">VALIDER</Button>
  </Form>
</>
  )
}
export default CreateAnnonce