import { Link } from "react-router-dom";
import styled from "styled-components";
import autre from "../images/autre.png";
import velodeville from "../images/velodeville.png";
import vtc from "../images/vtc.png";
import vtt from "../images/vtt.png";

const CategoriesCard = (props) => {
  const Card = styled.div`
    width: 300px;
    height: 200px;
    margin: 20px;

    @media (max-width: 812px) {
      margin: 5% 6%;
    }

    p {
      font-size: 35px;
      font-family: Gilda Display;
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
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${velodeville}) no-repeat center/cover`,
        
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
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${vtt}) no-repeat center/cover`,
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
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${vtc}) no-repeat center/cover`,
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
              textAlign: "center",
              
            }}
          >
      <Card
      style={{
        background : `url(${autre}) no-repeat center/cover`,
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
