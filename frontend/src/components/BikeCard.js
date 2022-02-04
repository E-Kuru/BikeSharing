import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
// import { AiFillStar } from "react-icons/ai";
import BikeImage from '../images/BikeImage.jpg'


const CardBox = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 110px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  border : 2px solid white;
  

  :hover {
    background-color: black;
  }
`;

const CardImage = styled.div`
  background-position: bottom;
  background-size: cover;
  width: 40%;
`;

const CardContent = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const CardText = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  h4  {
    font-family: 'Overpass', sans-serif;
  }
`;

const Div = styled.div`
display: flex; 
justify-content: space-between;
width: 100%;

`

// const BikeStars = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `;


const BikeCard = (props) => {
    const selectedBike = props.selectedBike;
    const ref = useRef();

    useEffect(() => {
        if (props.id === selectedBike._id) {
            ref.current.scrollIntoView({ behavior: "smooth" });
          }
        }, [selectedBike, props.id]);
      
        return (
          <>
            <CardBox
              ref={ref}
              style={{
                background: `${props.id === selectedBike._id ? "black" : "grey"}`,
              }}
            >
              <CardImage
                style={
                    {background : `url(${BikeImage}) no-repeat center/cover`}
                }
              />
              <CardContent>
                <Link
                  to={`/bikePage/${props.id}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: 'Overpass, sans-serif',
                    width: '100%',
                  }}
                >
                  <CardText>
                    <Div>
                    <h4>{props.name} </h4>
                    <h6>{props.price}€/h</h6>
                    <h5>{props.city}</h5>
                    </Div>
                    <h5>{props.description}</h5>
                    
                    {/* <BikeStars>
                      {[...Array(Math.floor(props.stars))].map((i) => (
                        <AiFillStar size={14} color={"yellow"} />
                      ))}
                    </BikeStars> */}
                  </CardText>
                </Link>
              </CardContent>
            </CardBox>
            </>
          );
        };
        
        export default BikeCard;
        