import React from "react";
import { useEffect, useState } from "react";
import { getAnnonce } from "../../api/annonce";
import styled from "styled-components";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const Container = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 360px;
  background-color: white;
`;
const Content = styled.div`
  margin: 10px;

  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  margin-right: 30px;
  margin-bottom: 40px;
`;

const MesInformations = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>
            <h2 className="mb-5 ms-4 text-dark">Mes informations</h2>
            <Icon>
              <MdOutlineEdit color="black" fontSize="35px" />
            </Icon>
          </Title>
          <p className="ms-2 text-dark">Nom:</p>
          <p className="ms-2 text-dark">Prénom:</p>
          <p className="ms-2 text-dark">Email:</p>
          <p className="ms-2 text-dark">Numéro de téléphone:</p>
          <p className="ms-2 text-dark">Adresse:</p>
        </Content>
      </Container>
    </>
  );
};

export default MesInformations;
