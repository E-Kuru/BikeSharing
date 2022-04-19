import React from "react";
import { useEffect, useState } from "react";
import { deleteAnnonce, getAnnonceUser } from "../../api/annonce";
import styled from "styled-components";
import { UserContext } from "../../context/User";
import { useContext } from "react";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import EditAnnonce from "./EditAnnonce";
import CreateAnnonce from "./CreateAnnonce";
import moment from "moment";

const Box = styled.div`
  background: white;
  border-radius: 5px;
  transition: 1s;
  font-family: "Gilda Display", serif;
`;
const Image = styled.img`
  height: 300px;
  width: 30%;
  min-width: 100%;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid white;
  border-radius: 50px;
  color: black;
  font-weight: bold;
  font-size: 14px;
  padding: 0.6em 4.2em;
  cursor: pointer;
  margin-top: 20px;
 font-family: "Gilda Display", serif;

`;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 800px;


`

const Icon = styled.div`
  display: flex;
  height: 70px;
`;

const Title = styled.div`
  display: flex;
`;
const Box2 = styled.div`
  height:70px;
`;


const MesAnnonces = () => {
  const { user } = useContext(UserContext);
  const [annonces, setAnnonces] = useState([]);
  const [index, setIndex] = useState(null);
  const [tab, setTab] = useState(null);

  useEffect(() => {
    fetchAnnonceUser();
  }, []);

  const fetchAnnonceUser = async () => {
    const annonces = await getAnnonceUser();
    setAnnonces(annonces);
  };

  const deleteAnnonces = async (id) => {
    const deletes = await deleteAnnonce(id);
    fetchAnnonceUser();
  };

  const annuler = () => {
    fetchAnnonceUser();
    setIndex(null);
  };

  const tabCreateAnnonce = () => {
    fetchAnnonceUser();
    setTab(null);
  };



  let imageRamdon= ["https://levelomad.com/644-large_default/l-urbain.jpg",
  "https://www.cleanrider.com/wp-content/uploads/2021/07/essai-velomad-0001_271220.jpg",
  "https://dyw7ncnq1en5l.cloudfront.net/gallery/15/15441/5ae1694d-decathlon-elops-920-e-connect.jpeg",
  "https://www.journaldugeek.com/content/uploads/2022/01/pipop.jpg",
  "https://www.velo-cyclisme.com/wp-content/uploads/2017/10/le-velo-electrique.jpg",
"https://www.veloderoute.com/photos/news/zooms/2022-01-13-170923_cannondale-supersix-evo-cx[7a15f3a5f358a9202862429281bcc24c164209023234].jpg",
"https://www.veloderoute.com/photos/news/zooms/8a32172586f2e9dd75eb0d040c1692f5163646666513.jpg",
"https://www.cleanrider.com/wp-content/uploads/2022/01/essai-velo-electrique-swapfiets0019.jpg",
"https://caminade.eu/img/velos.route.et.vtt.fabriques.en.france/1610274124.21120.jpg"]
  
  
  return (
    <Container>
      <div className="container my-2">
        {!tab ? (
          <>
            <Button onClick={() => setTab(true)}>+ Ajouter une annonce</Button>
            {annonces.length === 0 && (
              <p className="text-white my-3">Vous avez 0 annonces</p>
            )}
            <div className="row">
              {annonces.map((annonce, i) => (
                  
                <>
                  {index !== i ? (
                    <div className="col-3 my-3" key={annonce.name}>
                      <Box className="my-1 h-100 ">
                        <Image
                          className="image mb-3 rounded-top"
                          src="https://levelomad.com/644-large_default/l-urbain.jpg" 
                          alt=""
                        ></Image>
                        <Title className="d-flex justify-content-between">
                          <h3 className="text-dark ps-2 fw-bolder">
                            {annonce.name.toUpperCase()}
                          </h3>
                          <Icon className="">
                            <MdOutlineEdit
                              color="black"
                              fontSize="30px"
                              onClick={() => setIndex(i)}
                              type="button"
                              
                            />
                            <MdDeleteOutline
                              color="red"
                              fontSize="30px"
                              onClick={() => deleteAnnonces(annonce._id)}
                              type="button"
                            />
                          </Icon>
                        </Title>
                        <h5 className="text-dark ps-2 fw-bolder">
                          {annonce.categorie[0].toUpperCase() +
                            annonce.categorie.slice(1)}
                        </h5>
                        {/* <Box2 className=" ">
                          <p className="text-dark ps-2" style={{  overflow: 'hidden' }}>
                            <span className="fw-bolder">Description : </span>
                            {annonce.description}
                          </p>
                        </Box2> */}
                        <p className="text-dark ps-2">
                          <span className="fw-bolder">Date début : </span>
                          {moment(annonce.dateBegin).format("DD-MM-YYYY")}
                        </p>
                        <p className="text-dark ps-2">
                          <span className="fw-bolder">Date fin : </span>
                          {moment(annonce.dateEnd).format("DD-MM-YYYY")}
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="text-dark ps-2 fw-bolder">
                            {annonce.city[0].toUpperCase() +
                              annonce.city.slice(1)}
                          </p>
                          <p className="text-dark me-2 fw-bolder">
                            {annonce.price} €
                          </p>
                        </div>
                      </Box>
                    </div>
                  ) : (
                    <EditAnnonce
                      annonce={annonce}
                      annuler={annuler}
                      fetchAnnonceUser={fetchAnnonceUser}
                      index={annonce._id}
                    />
                  )}
                </>
              ))}
            </div>
          </>
        ) : (
          <CreateAnnonce
            tabCreateAnnonce={tabCreateAnnonce}
            fetchAnnonceUser={fetchAnnonceUser}
          />
        )}
      </div>
    </Container>
  );
};

export default MesAnnonces;
