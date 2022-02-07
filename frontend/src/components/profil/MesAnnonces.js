import React from "react";
import { useEffect, useState } from "react";
import { deleteAnnonce, getAnnonceUser } from "../../api/annonce"
import styled from "styled-components";
import { UserContext } from '../../context/User'
import { useContext } from 'react'
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md"
import EditAnnonce from './EditAnnonce';
import CreateAnnonce from "./CreateAnnonce";


const Box = styled.div`
  background: white;
  border-radius: 5px;
  transition: 1s;
  font-family: Gilda Display;
`
const Image = styled.img`
  height: 250px;
  width: 50px;
  min-width: 100%;
`

const Button = styled.button`
{
    background-color: white;
    border: 2px solid white;
    border-radius: 50px;
    color: black;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 4.2em;
    cursor: pointer;
    margin-top: 20px;
    font-family: Gilda Display;
}
`
const Icon = styled.div`
    display: flex;
`

const Title = styled.div`
    display: flex
`
const Box2 = styled.div`
    height: 70px
`

const MesAnnonces = () => {
    const { user } = useContext(UserContext)
    const [annonces, setAnnonces] = useState([]);
    const [index, setIndex] = useState(null)
    const [tab, setTab] = useState(null)

    useEffect(() => {
        fetchAnnonceUser()
    }, [])
    
    const fetchAnnonceUser = async () => {
        const annonces = await getAnnonceUser()
        setAnnonces(annonces)
    }

    const deleteAnnonces = async (id) =>{
        const deletes = await deleteAnnonce(id)
        fetchAnnonceUser()
    }

    const annuler = () => { 
        fetchAnnonceUser()
        setIndex(null)
    }

    const tabCreateAnnonce = () => { 
        fetchAnnonceUser()
        setTab(null)
    }
 
    return (
        <div className='container my-4'>
            {!tab ?
            <>
                <Button onClick={()=>setTab(true)}>+ Ajouter une annonce</Button>
                {annonces.length === 0 && <p className='text-white my-3'>Vous avez 0 annonces</p>}
                <div className="row">
                    {annonces.map((annonce, i) => (
                    <>
                    {index !== i ?
                    <div className="col-3 my-3" key={annonce.name} >
                        <Box className="my-1 h-100 " >
                            <Image className="image mb-3 rounded-top"
                            src="https://www.courte-focale.fr/wp-content/uploads/2012/07/The-Dark-Knight-Rises_0.jpg" alt="" 
                            >
                            </Image>
                            <Title className='d-flex justify-content-between'>
                            <h3 className="text-dark ps-2 fw-bolder">{annonce.name.toUpperCase()}</h3>
                            <Icon className=''>
                                <MdOutlineEdit color="black" fontSize="30px" onClick={()=>setIndex(i)} type="button" /> 
                                <MdDeleteOutline color="red" fontSize="30px" onClick={()=>deleteAnnonces(annonce._id)} type="button"/>
                            </Icon>
                            </Title>
                            <h5 className="text-dark ps-2 fw-bolder">{annonce.categorie[0].toUpperCase() + annonce.categorie.slice(1)}</h5>
                            <Box2 className=" ">
                                <p className="text-dark ps-2"><span className="fw-bolder">Description :</span> {annonce.description}</p>
                            </Box2>
                            <div className="d-flex justify-content-between">
                                <p className="text-dark ps-2 fw-bolder">{annonce.city[0].toUpperCase() + annonce.city.slice(1)}</p>
                                <p className="text-dark me-2 fw-bolder">{annonce.price} €</p>
                            </div>    
                        </Box>
                    </div>:
                    <EditAnnonce annonce={annonce} annuler={annuler} fetchAnnonceUser={fetchAnnonceUser} index={annonce._id} />
                    }       
                    </>
                    ))}
                </div>
            </>:
            <CreateAnnonce tabCreateAnnonce={tabCreateAnnonce} fetchAnnonceUser={fetchAnnonceUser} />
            }
        </div>
    );
};

export default MesAnnonces;
