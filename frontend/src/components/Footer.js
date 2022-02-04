import styled from "styled-components";

const Footer = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100%;
  `;
  const Info = styled.div`
    font-family: "Gilda Display", serif;
    text-align: center;
    padding: 40px;
  `;

  const Div = styled.div`
    display: flex;
    margin-top: 30px;
  `;

  return (
    <Container className="container">
      <Info className="row">
        <div className="col-6">
          <h4>EN SAVOIR PLUS</h4>
          <Div className="row">
            <div className="col-6">
              <p>Qui sommes-nous</p>
              <p>Comment ça marche ?</p>
              <p>Un service de confiance</p>
            </div>
            <div className="col-6">
              <p>Aide</p>
              <p>Contact</p>
            </div>
          </Div>
        </div>
        <div className="col-6">
          <h4>DECOUVRIR</h4>
          <Div>
            <div className="col-6">
              <p>Asssurance</p>
              <p>blog</p>
            </div>
            <div className="col-6">
              <p>Professionnels</p>
              <p>Applis mobile</p>
            </div>
          </Div>
        </div>
      </Info>
    </Container>
  );
};

export default Footer;
