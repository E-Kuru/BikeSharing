import React from 'react';
import { useEffect, useState } from "react";
import { getAnnonce, deleteAnnonce } from "../../api/annonce"
import styled from "styled-components";
import { UserContext } from '../../context/User'
import { useContext } from 'react'
import { useNavigate} from "react-router-dom";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md"
import EditAnnonce from './EditAnnonce';

const Box = styled.div`
    background: white;
    border-radius: 5px;
    transition: 1s;
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
}
`
const Icon = styled.div`
    display: flex;
`

const Title = styled.div`
    display: flex
`

const MesAnnonces = () => {
    const { user } = useContext(UserContext)
    const [annonces, setAnnonces] = useState([]);
    const [index, setIndex] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetchAnnonce()
    }, [])
    
    const fetchAnnonce = async () => {
        const annonces = await getAnnonce()
        // console.log(annonces)
        const annoncesUser = annonces.filter(e => e.user === user._id)
        // console.log(annoncesUser)
        setAnnonces(annoncesUser)
    }

    const deleteAnnonces = async (id) =>{
        const deletes = await deleteAnnonce(id)
        fetchAnnonce()
    }

    const annuler = () => {
        setIndex(null)
    }
 
    return (
        <div className='container my-5'>
            <Button>+ Ajouter une annonce</Button>
            {annonces.length === 0 && <p className='text-white my-3'>0 annonces</p>}
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
                            <h3 className="text-dark ps-2">{annonce.name}</h3>
                            <Icon className=''>
                                <MdOutlineEdit color="black" fontSize="30px" onClick={()=>setIndex(i)} type="button" /> 
                                <MdDeleteOutline color="black" fontSize="30px" onClick={()=>deleteAnnonces(annonce._id)} type="button"/>
                            </Icon>
                            </Title>
                            <h4 className="text-dark ps-2">{annonce.categorie}</h4>
                            <p className="text-dark ps-2">{annonce.description}</p>
                            <p className="text-dark ps-2">{annonce.city}</p>
                            <p className="text-dark ps-2">{annonce.price}</p>
                        </Box>
                    </div>:
                    <EditAnnonce annonce={annonce} annuler={annuler} fetchAnnonce={fetchAnnonce} index={annonce._id} />
                    }       
                    </>
                    ))}
                </div>
        </div>
    );
};

export default MesAnnonces;