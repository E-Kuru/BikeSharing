import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../images/Logo.png";
import { ModalContext } from "../context/Modal";
import Modals from "./Modals";
import LoginForm from "./form/Login";


const linkStyle = {
    color: "white",
    fontSize: "15px",
    textAlign: "center",
    border : "none",
    background : "none"
}

const linkStyle2 = {
    color: "black",
    textDecoration: "none",
    fontSize: "15px",
    textAlign: "center",
    backgroundColor: "white",
    padding: "10px",
    

}

const Navbar = () => {

    const { handleSignupClick, handleLoginClick, open, visible, setVisible } = useContext(ModalContext)
      
    const [ openBurger, setOpenBurger ] = useState(false)

    const List = styled.div`
    background-color: black;
    padding: 10px 10px 10px 30px ;
    height: ${openBurger ? "100%" : "20vh"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${openBurger ? "column" : "row"}; 
    
    border-bottom: 1px solid white;

    @media (max-width: 376px) {
      justify-content: flex-end;
      padding-right: 30px;
    }
    img{
        height : 100%;
    }
    `

    const Title = styled.h1`
    font-family: "Gilda Display";
    font-size: 10px;
    ${openBurger && "display: none"};

    @media (max-width: 280px) {
      font-size: 28px;
    }`
    const Burger = styled.button`
    display: none;

    @media (max-width: 376px) {
      display: flex;
      margin-left: ${openBurger ? "0" : "30px"};
      border: none;
      background: none;
      font-size: 40px;
      color: white;
      cursor: pointer;   
    }`

  const Menu = styled.ul`
    font-family: 'Gilda Display', serif;
    list-style: none;
    display: flex;
    flex-direction: ${openBurger ? " column" : "row"};
    ${openBurger && "text-align: center;"}
    
    button{
        font-family: 'Gilda Display', serif;
    }
  `

  const Li = styled.li`
    padding: 20px;
    :hover {
        font-weight: bold; 
    }

    @media (max-width: 376px) {
      padding: 10px;
      ${openBurger ? "display: flex" : "display: none"}
      ${openBurger && "flex-direction: column" }
      ${openBurger && "align-items: center"}
      
    }
  `
return (
    <>
    <List>
    <img src={logo}></img>
        <Burger onClick={() => setOpenBurger(!openBurger)} >☰</Burger>
        <Menu>
            <Li>
                <button style={linkStyle} onClick={handleLoginClick}>
                    SE CONNECTER
                </button>
            </Li>
            <Li>
                <button style={linkStyle} onClick={handleSignupClick}>
                    S'INSCRIRE
                </button>
            </Li>
            <Li>
                <Link to="/bikePage" style={linkStyle2}>
                    Louer un vélo
                </Link>
            </Li>
        </Menu>
    </List>
    </>
)
}
export default Navbar