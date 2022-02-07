import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from "styled-components";
import { useParams } from "react-router-dom";


const ConfirmationLender = () => {

  useEffect( () => {
    // Fonction qui récupère les données de l'annonce 
  }, [])

  const {id} = useParams()

    const AllContent =  styled.div `
    // border : 4px solid white;
      margin: 1% 0 4% 0%;
      display : flex;
      justify-content : space-around;
    `

    const Location = styled.div `
        border-right : 1px white solid;
        width : 45%;
        font-family: "Gilda Display";
        display : flex ; 
        flex-direction : column;

        ol{
          font-size : 24px;
          line-height : 3;
        }
        ol li{
          list-style : none;
        }
        .all-buttons{
          width : 90%;
          display : flex ; 
          justify-content : space-between;
          // border : 4px solid white;
        }

        .all-buttons button{
          font-weight : bold;
          text-align : center ;
          font-size : 20px;
          height : 45px;
          width : 200px;
          border : none;
          border-radius : 5px;
        }
    `

    const Messagerie = styled.div `
        width : 45%;

        .mess-head {
          font-family: "Gilda Display";
          display : flex ;
          justify-content : center ;
          align-items : center;
          border-radius : 10px  10px 0 0;
          height : 12%;
          background-color : #494949 ;
          width : 80% ;
          text-align : center;
        }

        .message-content{
          width : 80% ;
          height : 70%;
          background-color : #ffff;
        }

        form{
          height : 25%;
          width : 80%;
          display : flex;
          justify-content : space-between;
          align-items : center;
          flex-direction : column;
      }
      
      form button{
          border-radius : 5px;
          background-color : #000;
          color : #fff;
          border : 1px solid white;
          height : 30%;
          width : 70%;
          margin-top : 2%;
      }
      
      input{
        width : 100%;
        height : 40%;
        border : none;
        border-top : 1px solid black;
        border-radius : 0 0 10px 10px;
        text-align : center;
      }
  `

  return(
    <>
    <Navbar/>
  
    <AllContent>
      <Location>
          <h1>Confirmez votre location</h1>
          <div className="all-list">
            <ol>
              <li>Client : </li>
              <li>Date : </li>
              <li>Lieu : </li>
              <li>Prix : </li>
              <li>Frais de service : </li>
              <li>Total : </li>
            </ol>
          </div>
          <div className="all-buttons">
            <button>Accepter</button>
            <button>Refuser</button>
          </div>
      </Location>

      <Messagerie> 
        <div className="mess-head">
          <h1>Messagerie</h1>
        </div>
        <div className="message-content">
          {/* Les messages */}
        </div>
        <form>
        <input type="text" placeholder="Message..." />
        <button type="submit">Envoyer</button>
        </form>
      </Messagerie>

    </AllContent>

    <Footer/>
    </>
  )

};

export default ConfirmationLender;
