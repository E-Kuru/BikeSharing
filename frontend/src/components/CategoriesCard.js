import { Link } from "react-router-dom";
import styled from "styled-components";
import autre from "../images/autre.jpeg";
import velodeville from "../images/velodeville.png";
import vtc from "../images/vtc.jpeg";
import vtt from "../images/vtt.jpeg";

const CategoriesCard = (props) => {
  const Card = styled.div`
    width: 300px;
    height: 200px;
    margin: 20px;

    @media (max-width: 812px) {
      margin: 5% 6%;
    }

    p {
      font-size: 40px;
      font-family: "Oswald", sans-serif;
      padding-top: 60px;

      @media (max-width: 812px) {
        margin-top: 0px;
      }
    }
  `;

  // console.log(props)

  return (
    <>
    <div class="container">
  <div class="row">
    <div class="col-3">
    <Link
            to={`/bikepage`}
            style={{
              color: "white",
              padding: "20px",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bolder",
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${velodeville}) no-repeat center/cover`,
        opacity: 0.8
      }}
      >
        <p>VELO DE VILLE</p>
      </Card>
      </Link>
    </div>
    <div class="col-3">
    <Link
            to={`/bikepage`}
            style={{
              color: "white",
              padding: "20px",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bolder",
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${vtt}) no-repeat center/cover`,
        opacity: 0.8,
      }}
      >
        <p>VTT</p>
      </Card>
      </Link>
    </div>
    <div class="col-3">
    <Link
            to={`/bikepage`}
            style={{
              color: "white",
              padding: "20px",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bolder",
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${vtc}) no-repeat center/cover`,
        opacity: 0.8,
      }}
      >
        <p>VTC</p>
      </Card>
      </Link>
    </div>
    <div class="col-3">
    <Link
            to={`/bikepage`}
            style={{
              color: "white",
              padding: "20px",
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bolder",
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${autre}) no-repeat center/cover`,
        opacity: 0.8,
      }}
      >
        <p>AUTRE...</p>
      </Card>
      </Link>
    </div>
  </div>
</div>     
    </>
  );
};
export default CategoriesCard;
