import { useRef, useEffect } from "react";
import styled from "styled-components";
import BikeImage from "../images/BikeImage.jpg";


const BikeCardResearch = (props) => {
  const selectedBike = props.selectedBike;
  const ref = useRef();

  useEffect(() => {
    if (props.id === selectedBike) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedBike, props.id]);

  const CardBox = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 110px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  border: 2px solid white;

  :hover {
    background-color: black;
  }
`

const CardImage = styled.div`
  background-position: bottom;
  background-size: cover;
  width: 40%;
`

const CardContent = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 70%;
`

const CardText = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  h4 {
    font-family: "Overpass", sans-serif;
  }
`

const Div = styled.div`
  div{
    display: flex;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  color : ${props.id === selectedBike ? "black" : "white"};
   p {
     font-size: 22  px;
   }
`

  return (
          <>
            <CardBox
              ref={ref}
              style={{
                background: `${props.id === selectedBike ? "white" : "black"}`,
              }}
            >
              <CardImage
                style={
                    {background : `url(${BikeImage}) no-repeat center/cover`}
                }
              />
              <CardContent>
                {/* <Link
                  to={`/bikeDescription/${props.id}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: 'Overpass, sans-serif',
                    width: '100%',
                  }}
                > */}
                  <CardText>
                    <Div>
                    <div>
                      <h4>{props.name} </h4>
                      <h6>{props.price}€/h</h6>
                      <h5>{props.city}</h5>
                    </div>
                    <p>{props.description}</p>
                    </Div>
            </CardText>
          {/* </Link> */}
        </CardContent>
      </CardBox>
    </>
  );
};

export default BikeCardResearch;