import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import velodeville from "../images/velodeville.png";
import { useEffect, useState } from "react";
import { options } from "../api/config";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const BikeDescription = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [annonce, setAnnonce] = useState({});

  useEffect(() => {
    fetchAnnonce();
  }, []);

  const fetchAnnonce = async () => {
    const bike = await fetch(`http://localhost:5000/annonce/${id}`, {
      ...options,
    });

    const res = await bike.json();

    setAnnonce(res);
  };

  const fetchRental = async () => {
    //      const PostRental = await fetch(`http://localhost:5000/location/`, {
    //           method : "post",
    //      ...options
    // })

    //      const res = await PostRental.json()
    navigate(`/location-borrower/5`);
  };
  const Box = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const Info = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    vertical-align: middle;
    padding: 50px 30px;
    font-family: "Gilda Display", serif;
    align-items: center;

    /* div {
      text-align: center;
    } */

    button {
      margin-top: 4%;
      color: black;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      border: 2px solid white;
      background-color: white;
      padding: 5px;
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const Div = styled.div`
    color: rgb(250, 250, 145);
    display: block;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: space-around;
    padding-top: 12px;
  `;

  const Stars = styled.div`
    margin-top: 10px;
    color: #fdef17;
    display: flex;

    h3 {
      color: white;
      font-size: 15px;
      padding-left: 10px;
    }
  `;

  const Commentaire = styled.div`
    margin: auto;
    width: 80%;
    padding: 20px;
    border-radius: 5px;
    background-color: white;

    .star {
      margin-top: 10px;
      color: #fdef17;
      display: flex;
    }

    .comment {
         display: flex;
         justify-content: space-between;
    }
  `;

  const DvToo = styled.div`
    margin: auto;
    width: 80%;
    padding: 20px;
    border-radius: 5px;
    background-color: white;

    .star {
      margin-top: 10px;
      color: #fdef17;
      display: flex;
    }
    .comment {
         display: flex;
         justify-content: space-between;
    }
  `;

  const DivThree = styled.div`
    margin: auto;
    width: 80%;
    padding: 20px;
    border-radius: 5px;
    background-color: white;

    .star {
      margin-top: 10px;
      color: #fdef17;
      display: flex;
    }
    .comment {
         display: flex;
         justify-content: space-between;
    }
  `;

  const H5 = styled.div`
    color: black;
  `;

  const Card = styled.div`
    width: 550px;
    height: 300px;
    margin: 80px;

    .info {
      display: flex;
      justify-content: space-between;
      font-family: "Overpass", sans-serif;
      flex-wrap: wrap-reverse;
      margin-top: 310px;
    }
  `;

  const Box2 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px 50px;
    margin: 0 auto;

    p {
      font-size: 20px;
      margin-left: 148px;
    }
  `;
       
  return (
    <>
      <Navbar />
      <Box>
        <Card
          style={{
            background: `url(${velodeville}) no-repeat center/cover`,
          }}
        >
          <div className="info">
            <h4>{annonce.categorie} Vélo de ville</h4>
            <h5>{annonce.price}21€/h</h5>
          </div>

          <Stars>
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <h3>(35 commentaires)</h3>
          </Stars>
        </Card>
        <Info>
          <div className="description">
            <h3>Description : </h3>
            <p>
              {annonce.description}
              {/* Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. */}
            </p>
          </div>
          <button onClick={() => fetchRental()}>RESERVER</button>
        </Info>
      </Box>
      <Box2>
        <p>Commentaires :</p>
        <Commentaire>
             <div className="comment">
          <H5>Evan D. </H5>
          <div className="star">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          </div>
          <br />
          <H5>Trop bien !!!!!</H5>
        </Commentaire>
        <br />
        <br />
        <DvToo>
        <div className="comment">
          <H5>Ahmed E. </H5>
          <Stars>
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </Stars>
          </div>
          <br />
          <H5>Super !!! </H5>
        </DvToo>
        <br />
        <br />
        <DivThree>
        <div className="comment">
          <H5>Hanaa W. </H5>
          <Stars>
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </Stars>
          </div>
          <br />
          <H5>Loueur au top ! Adorable</H5>
        </DivThree>
      </Box2>

      <Footer />
    </>
  );
};

export default BikeDescription;
