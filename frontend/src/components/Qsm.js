import img from "../images/bike.png";
import styled from "styled-components";

const Qsm = () => {
  const Container = styled.div`
    width: 100%;
  `;
  const Info = styled.div`
    font-family: "Gilda Display", serif;
    text-align: center;
    padding: 40px;
    font-family: 'Overpass', sans-serif;

    p {
      margin: 30px;
      font-size: 18px;

    }
  `;

  return (
    <Container
      style={{
        background: `url(${img}) no-repeat center/cover`,
        height: 400,
      }}
    >
      <Info>
        <h2 style={{fontWeight:"bold"}}>Qui sommes-nous ?</h2>
        <p>
          Envie de louer ou prêter un vélo ? BikeSharing est le site
          <br />
          leader dans le domaine. En tant que plateforme d’auto-
          <br />
          partage, notre site permet de vous mettre en contact de
          <br />
          particulier à particulier.
        </p>
        <p>
          Rouler à vélo ou vélo électrique est plus rapide et plus
          <br />
          facile, surtout en ville. Mais aussi meilleur pour la santé
          <br />
          et l’environnement.
        </p>
      </Info>
    </Container>
  );
};

export default Qsm;
