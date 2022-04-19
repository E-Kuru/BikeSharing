import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { AiFillStar } from "react-icons/ai";
import BikeImage from "../images/BikeImage.jpg";

// const BikeStars = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `;

const BikeCard = (props) => {
  const selectedBike = props.selectedBike;
  const ref = useRef();

  let imageRamdon= ["https://levelomad.com/644-large_default/l-urbain.jpg",
  "https://www.cleanrider.com/wp-content/uploads/2021/07/essai-velomad-0001_271220.jpg",
  "https://dyw7ncnq1en5l.cloudfront.net/gallery/15/15441/5ae1694d-decathlon-elops-920-e-connect.jpeg",
  "https://www.journaldugeek.com/content/uploads/2022/01/pipop.jpg",
  "https://www.velo-cyclisme.com/wp-content/uploads/2017/10/le-velo-electrique.jpg",
"https://www.veloderoute.com/photos/news/zooms/2022-01-13-170923_cannondale-supersix-evo-cx[7a15f3a5f358a9202862429281bcc24c164209023234].jpg",
"https://www.veloderoute.com/photos/news/zooms/8a32172586f2e9dd75eb0d040c1692f5163646666513.jpg",
"https://www.cleanrider.com/wp-content/uploads/2022/01/essai-velo-electrique-swapfiets0019.jpg",
"https://caminade.eu/img/velos.route.et.vtt.fabriques.en.france/1610274124.21120.jpg"]

  useEffect(() => {
    if (props.id === selectedBike) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedBike, props.id]);

  const CardBox = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 200px;
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
                    {background : `url(${props.test}) no-repeat center/cover`}
                }
              />
              <CardContent>
                <Link
                  to={`/bikeDescription/${props.id}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: 'Overpass, sans-serif',
                    width: '100%',
                  }}
                >
                  <CardText>
                    <Div>
                    <div>
                      <h4>{props.name} </h4>
                      <h6>{props.price}€/h</h6>
                      <h5>{props.city}</h5>
                    </div>
                    <p>{props.description}</p>
                    </Div>
                    
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
