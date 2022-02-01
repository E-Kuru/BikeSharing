import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../pictures/Logo.png"
import { ModalContext } from "../context/Modal";
// import LoginModal from "./form/LoginModal"
// import SignUp from './form/SignUp'

const linkStyle = {
    color: "white",
    fontSize: "15px",
    textAlign: "center",
    border : "none",
    background : "none"
}

const linkStyle2 = {
    // color: "white",
    textDecoration: "none",
    fontSize: "15px",
    textAlign: "center",
    backgroundColor: "white",
    padding: "10px",
    

}

const Navbar = () => {

    const { handleSignupClick, handleLoginClick } = useContext(ModalContext)
      
    const [ open, setOpen ] = useState(false)

    const List = styled.div`
    background-color: black;
    padding: 10px 10px 10px 30px ;
    height: ${open ? "100%" : "20vh"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${open ? "column" : "row"}; 
    
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
    ${open && "display: none"};

    @media (max-width: 280px) {
      font-size: 28px;
    }`
    const Burger = styled.button`
    display: none;

    @media (max-width: 376px) {
      display: flex;
      margin-left: ${open ? "0" : "30px"};
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
    flex-direction: ${open ? " column" : "row"};
    ${open && "text-align: center;"}
    
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
      ${open ? "display: flex" : "display: none"}
      ${open && "flex-direction: column" }
      ${open && "align-items: center"}
      
    }
  `
return (
    <>
    <List>
    <img src={logo}></img>
        <Burger onClick={() => setOpen(!open)} >☰</Burger>
        <Menu>
            <Li>
                <button style={linkStyle} onClick={() => handleLoginClick()}>
                    SE CONNECTER
                </button>
            </Li>
            <Li>
                <Link to="/annonce" style={linkStyle2}>
                    Louer un vélo
                </Link>
            </Li>
        </Menu>
    </List>

    </>
)
}
export default Navbar