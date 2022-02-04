import React from "react";
import { UserContext } from '../../context/User'
import { useContext } from 'react'

import styled from "styled-components";
import { MdOutlineEdit } from "react-icons/md";

const Container = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 360px;
  background-color: white;
`;
const Content = styled.div`
    margin: 10px;
    width: 100%;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  margin-right: 30px;
  margin-bottom: 40px;
`;

const MesInformations = () => {
    const { user } = useContext(UserContext)

    if (!user){
        return <p>pas d'infos</p>
    }

    return (
        <>
            <Container>
                <Content>
                    <Title>
                        <h2 className='mb-5 ms-4 text-dark'>Mes informations</h2>
                        <Icon>
                            <MdOutlineEdit color="black" fontSize="35px" />
                        </Icon>
                    </Title>
                    <p className='ms-2 text-dark'>Nom: {user.lastName}</p>
                    <p className='ms-2 text-dark'>Prénom: {user.firstName}</p>
                    <p className='ms-2 text-dark'>Email: {user.email}</p>
                    <p className='ms-2 text-dark'>Numéro de téléphone: {user.phoneNumber}</p>
                    <p className='ms-2 text-dark'>Adresse: {user.adress}</p>
                </Content>
                
            </Container>
        </>
    );
};

export default MesInformations;
