import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../images/Logo.png";
import { ModalContext } from "../context/Modal";
import { UserContext } from '../context/User'
import { logout } from "../api/auth"
import { useNavigate } from "react-router-dom"

const linkStyle = {
  color: "white",
  fontSize: "15px",
  textAlign: "center",
  border: "none",
  background: "none",
  textDecoration: "none",
};

const linkStyle2 = {
  color: "black",
  textDecoration: "none",
  fontSize: "15px",
  textAlign: "center",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "15px"
};

const Navbar = () => {
  

    const { handleSignupClick, handleLoginClick } = useContext(ModalContext)
    const [ openBurger, setOpenBurger ] = useState(false)
    const { setUser, user } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = async () => {
        await logout()
        setUser(null)
        navigate('/')  
      }


  const List = styled.div`
    background-color: black;
    padding: 10px 10px 10px 30px;
    height: ${openBurger ? "100%" : "20vh"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${openBurger ? "column" : "row"}; 

    @media (max-width: 376px) {
      justify-content: flex-end;
      padding-right: 30px;
    }
    img {
      height: 100%;
    }
  `;

  const Title = styled.h1`
    font-family: "Gilda Display";
    font-size: 10px;
    ${openBurger && "display: none"};

    @media (max-width: 280px) {
      font-size: 28px;
    }
  `;
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
    }
  `;

  const Menu = styled.ul`
    font-family: "Gilda Display", serif;
    list-style: none;
    display: flex;
    flex-direction: ${openBurger ? " column" : "row"};
    ${openBurger && "text-align: center;"}

    button {
      font-family: "Gilda Display", serif;
    }
  `;

  const Li = styled.li`
    padding: 20px;
    :hover {
      font-weight: bold;
    }

    @media (max-width: 376px) {
      padding: 10px;
      ${openBurger ? "display: flex" : "display: none"}
      ${openBurger && "flex-direction: column"}
      ${openBurger && "align-items: center"}
    }
  `;
  return (
    <>

    <List>
    <img src={logo}></img>
        <Burger onClick={() => setOpenBurger(!openBurger)} >☰</Burger>
        {!user ? 
        <>

        <Menu>
          <Li>
            <Link to="/" style={linkStyle}>
              HOME
            </Link>
          </Li>
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
            <Link to="/bikePage/tous" style={linkStyle2}>
              Louer un vélo
            </Link>
          </Li>
        </Menu>

        </> :
            <>
            <Menu>
            <Li>
                <Link to="/" style={linkStyle}>
                    HOME
                </Link>
                </Li>
                <Li>
                    <Link to="/profil" style={linkStyle}>
                        PROFIL
                    </Link>
                </Li>
                <Li>
                    <button style={linkStyle} onClick={logoutUser}>
                        SE DECONNECTER
                    </button>
                </Li>
                <Li>
                    <Link to="/bikePage/tous" style={linkStyle2}>
                        Louer un vélo
                    </Link>
                </Li>
            </Menu>
            </>
}
    </List>

  </>

    
  );
};
export default Navbar;
