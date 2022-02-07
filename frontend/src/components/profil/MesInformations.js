import React, { useState, useEffect } from "react";
import { UserContext } from '../../context/User'
import { useContext } from 'react'
import styled from "styled-components";
import { MdOutlineEdit } from "react-icons/md";
import { getUser } from "../../api/user";
import EditInfosUser from "./EditInfosUser";
import { getAnnonceUser } from "../../api/annonce";

const Container = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 360px;
  background-color: white;
`

const Content = styled.div`
    margin: 10px;
    width: 100%;
    font-family: Gilda Display;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`

const Icon = styled.div`
  margin-right: 30px;
  margin-bottom: 40px;
`

const MesInformations = () => {
    const { user, setUser } = useContext(UserContext)
    const [toggle, setToggle] = useState(false)
    const [ userId, setUserId] = useState(null)

    useEffect(() => {
        fetchUser()
    }, [])
    
    const fetchUser = async () => {
        const annonces = await getUser()
        setUserId(annonces)
    }

    if (!userId){
        return <p>chargement...</p>
    }

    const toggleTab = () => {
        setToggle(false);
    };


    return (
        <>
            <Container>
                {!toggle ? 
                <Content>
                    <Title>
                        <h2 className='mb-5 ms-4 pt-3 text-dark'>Mes informations</h2>
                        <Icon>
                            <MdOutlineEdit color="black" fontSize="35px" onClick={()=>setToggle(true)} type="button"/>
                        </Icon>
                    </Title>
                    <p className='ms-2 text-dark'><span className="fw-bolder">Nom :</span> {userId.lastName}</p>
                    <p className='ms-2 text-dark'><span className="fw-bolder">Prénom :</span> {userId.firstName}</p>
                    <p className='ms-2 text-dark'><span className="fw-bolder">Email :</span> {userId.email}</p>
                    <p className='ms-2 text-dark'><span className="fw-bolder">Numéro de téléphone :</span> {userId.phoneNumber}</p>
                    <p className='ms-2 text-dark'><span className="fw-bolder">Adresse :</span> {userId.adress}</p>
                </Content>:
                <EditInfosUser toggleTab={toggleTab} userId={userId._id}  user={userId} fetchUser={fetchUser} />
                }
            </Container>
        </>
    );
};

export default MesInformations;
