import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import velodeville from "../images/velodeville.png";

const BikeDescription = () => {

const navigate = useNavigate()

const Info = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction : column;
     padding-left: 30%;

     div{
          text-align : center;
     }

     button{
          margin-top : 4%;
          color: black;
          font-size: 18px;
          text-align: center;
          border : none;
          background-color: white;
          padding: 5px;
          width : 35%;
          border-radius: 30px;
     }
`;
                       
const Div = styled.div`
     color: rgb(250, 250, 145);
     display: block;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: flex-end;
     align-items: flex-end;
     align-content: space-around;
     padding-top: 12px;
     
`;
          
const Span = styled.div`
     //    display: flex;
     color: rgb(250, 250, 145);
     margin :10PX;
`;

const Commentaire = styled.div`
     margin: auto;
     width: 80%;
     border: 2px solid white;
     padding: 20px;
     border-radius: 17px;
     background-color: white;
`;
          
const DvToo = styled.div`
     margin: auto;
     width: 80%;
     border: 2px solid white;
     padding: 20px;
     border-radius: 17px;
     background-color: white;
     color: white;
     
 `;
     
const DivThree = styled.div`
     margin: auto;
     width: 80%;
     border: 2px solid white;
     padding: 20px;
     border-radius: 17px;
     background-color: white;
`;
    

const P = styled.div`
     color: white importn;
     padding-left: 8%;
     margin: 40px;

 `; 
const H5 = styled.div`
     color: black;
 `;
    
const Min = styled.div`
     display: flex;
     padding: 2px;
`;

const Card = styled.div`
     width: 300px;
     height: 200px;
     border-radius:  white; 
     // content: "";
     display: block;
     position: absolute;
     bottom: 21em;
     z-index: -1;
     
 `;

 const H4 = styled.div`
     color: black;
     display: block;
     position: absolute;
     bottom: 19em;
     z-index: -1;
     color:white;
     
 `;

 const H2 = styled.div`
     display: flex;
     color:white;
`;

const star = <i className="fas fa-star star-on"></i>
   
  return (

      <>
       <Navbar />

       <Container className='container'>

            <Info >
            <Link to={`/location-borrower/:id`}
            style={{
              color: "white",
              padding: "20px",
              textDecoration: "none",
              fontSize: "18px",
              textAlign: "center",
              
            }}
          >
               <div>    
               <h3>Description : </h3>
               <p>Lorem Ipsum is simply dummy text of the printing.
                and <br/>typesetting industry.Lorem Ipsum has been the industry<br/> standard dummy text  since the 1500s,
                when an unknown<br/> printer took a galley of type and scrambled it to make a type <br/>specimen book.
                It has survived not only five centuries.</p>
               
               <Button>RESERVER</Button>
              
               </div>
               </Link >
              </Info>
              <Card
      style={{
        background : `url(${velodeville}) no-repeat center/cover`,
        
      }}
      >
      </Card>
      <H4>VELO DE VILLE</H4>
      <Span>
           
           <Min>
                {start}
                {start}
                {start}
           <H2> 3commentaire</H2>
           </Min>
      </Span>
     </Container>
        <P>Commentaire</P>
     <Commentaire>
      <H5>Evan D. </H5>
      <br />
      <H5>Trop bien !!!!!</H5>
     <Div>
          {star}
          {star}
          {star}
          {star}
          {star}
     </Div>
     </Commentaire>
      <br />
      <br />
     <DvToo>
          <H5>Ahmed E. </H5>
          <br />
          <H5>Ca roule ça roule..</H5>
     <Div>
          {star}
          {star}
          {star}
          {star}

     </Div>
     </DvToo>
      <br />
      <br />
     <DivThree>
          <H5>Hanaa W. </H5>
          <br />
          <H5>Oh là là super!</H5>
     <Div>
          {star}
          {star}
          {star}
    </Div>
    </DivThree>
      
  <Footer />
       </>
)}

export default BikeDescription;


           
 

 

          
 
     
     
     
      

       
     

     


     
