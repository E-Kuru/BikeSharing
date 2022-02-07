import React from "react";
import { useEffect, useState } from "react";
import { getLocationUser } from "../../api/location";
import { getAnnonceUser } from "../../api/annonce";
import styled from "styled-components";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const CardBox = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 150px;
  display: flex;
  overflow: hidden;
  background-color: white;
`;
const CardImage = styled.img`
  background-position: bottom;
  background-size: cover;
  height: 110%;
  width: 30%;
`;

const CardContent = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Gilda Display;
`;
const P = styled.p`
  font-size: 20px;
`;
const Icon = styled.div`
  margin-left: 170px;
`;
const Button = styled.button`
{
    background-color: black;
    border: 2px solid black;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 6.2em;
    cursor: pointer;
    margin-top: 85px
}
`

const MesCommandes = () => {
  const [locations, setLocations] = useState([])


  useEffect(() => {
    fetchLocations()
}, [])



const fetchLocations = async () => {
    const locations = await getLocationUser()
    setLocations(locations)
}



// console.log(annonces)

  return (
    <>
    <div className='container my-5'>
    {locations.length === 0 && <p className='text-white my-3'>Vous avez 0 commandes</p>}
      {locations.map(location => (
         <CardBox className='col-8'>
        <CardImage
          src="https://www.courte-focale.fr/wp-content/uploads/2012/07/The-Dark-Knight-Rises_0.jpg" alt=""
          >
        </CardImage>
          <CardContent className=' h-100'>
              <div>
                <h4 className='text-dark'>name</h4>
                <P className='mb-1 my-5 text-dark'>{location.price}/h€</P>  
                <P className='text-dark'>Paris</P>  
              </div>
              <div className="my-4">
                <P className='mb-1 my-5 text-dark'>Date début: {location.dateBegin}</P>  
                <P className='text-dark'>Date fin: {location.dateEnd}</P>  
              </div>
              <div>
                {/* <Icon className=''>
                    <MdOutlineEdit color="black" fontSize="30px" /> 
                    <MdDeleteOutline color="black" fontSize="30px"/>
                </Icon> */}
                <Button>En cours</Button>
              </div>
                
          </CardContent>
      </CardBox>
       ))} 
     
    </div>
    </>
  );
};

export default MesCommandes;
