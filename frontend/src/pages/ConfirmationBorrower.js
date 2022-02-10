import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { options } from "../api/config";
import moment from "moment";

const ConfirmationBorrower = () => {

  const {id} = useParams()

  const navigate = useNavigate()
  
  const [borowwerRental, setBorrowerRental] = useState({})
  const [Messages, setMessages] = useState([])

  useEffect( () => {
    getOneBorrowerRental()
    // postConversation()
  }, [])

  const getOneBorrowerRental = async () => {

    const response = await fetch(`http://localhost:5000/location/borrower/${id}`,{
        ...options,
    })

    const data = await response.json()
      
    setBorrowerRental(data)

    postConversation(data._id)
  }

  const postConversation = async (rentalId) => {

    const response = await fetch(`http://localhost:5000/conversation/${id}`, {
      method : "post",
      ...options,
    })

    const res = await response.json()

    console.log(res);

    const messages = await fetch(`http://localhost:5000/message/${res._id}`,{
      ...options
    })

    const allMessages = await messages.json()

    setMessages(allMessages)
  }

  const submit = () => {
    alert('Félicitation votre location est confirmée !!')
    navigate('/')
  }

    const AllContent =  styled.div `
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
          justify-content : center;
        }

        .all-buttons button{
          font-weight : bold;
          text-align : center ;
          font-size : 20px;
          height : 45px;
          width : 80%;
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
          height : 62%;
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
              <li>Date de début : {moment(borowwerRental.dateBegin).format("DD-MM-YYYY")}</li>
              <li>Date de fin : {moment(borowwerRental.dateEnd).format("DD-MM-YYYY")}  </li>
              <li>Prix : {borowwerRental.price}</li>
              <li>Frais de service : 4€ </li>
              <li>Total : {borowwerRental.price + 4}€ </li>
            </ol>
          </div>
          <div className="all-buttons">
            <button>Payer</button>
          </div>
      </Location>

      <Messagerie> 
        <div className="mess-head">
          <h1>Messagerie</h1>
        </div>
        <div className="message-content">
          {/* {!Messages ? (
            <h1>Loadding...</h1>
          ) : (
            Messages.map(e => (
              <div className="message">
                <p>{e.content}</p>
              </div>
            ))
          )} */}
        </div>
        <form >
        <input type="text" placeholder="Message..." />
        <button onClick={() => submit()}>Envoyer</button>
        </form>
      </Messagerie>

    </AllContent>

    <Footer/>
    </>
  )

};

export default ConfirmationBorrower;
