import { Link } from "react-router-dom";
import styled from "styled-components";

const BikeCard = (props) => {

    const Card = styled.div`
    background-color:black;
    border-radius: 1.5rem;
    width: 405px;
    height: 250px;
    margin: 20px;
    text-align: center;

    // :hover {
    //   background-color: #0091AD;
    //   box-shadow: 0 0 10px #ADE8F4;
    // }

    @media (max-width: 812px) {
        margin: 5% 6%;
    }

    div {
        height: 75%;
        width: 100%;
        background-position: center;
        border-radius: 1.5rem 1.5rem 0 0;    
    }

    @media (max-width: 376px) {
        height: 50%;
        width: 90%;

    }

    p {
      font-size: 1.25rem;
      fontfamily: "Gilda Display";;
      margin-top: 10px;

      @media (max-width: 812px) {
        margin-top: 0px;
    }
    }
  `;
    return(
        <>
        <Card>
            <p>
                <Link
                to={`/Bikes/${props.name}`}
                style={{
                    color:"white",
                    padding:"20px",
                    textDecoration: "none",
                    fontSize: "25px"
                }}
                >
                {props.name}
                {props.image}
                {props.price}€/h
                {props.stars}
                {props.adress}
                {props.coment}
                </Link>
            </p>
        </Card>
        </>
    )
    
}

export default BikeCard
