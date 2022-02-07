import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from "styled-components";

const MesCommentaire = () => {
     const Div = styled.div`
     color: rgb(250, 250, 145);
     display: block;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: flex-end;
     align-items: flex-end;
     align-content: space-around;
     padding-top: 10px;
     
`; 
     const Span = styled.div`
     //    display: flex;
     color: rgb(250, 250, 145);
     
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
    const span = styled.div`
    color: black;
`;

    const Min = styled.div`
    display: flex;
`;
   const start = <i className="fas fa-star star-on"></i>
  return(
     <>
      <Navbar />
      
     <Commentaire>
      <H5>Evan D. </H5>
      <br />
      <H5>Trop bien !!!!!</H5>
     <Div>
          {start}
          {start}
          {start}
          {start}
          {start}
     </Div>
     </Commentaire>
      <br />
      <br />
     <DvToo>
          <H5>Ahmed E. </H5>
          <br />
          <H5>Ca roule ça roule..</H5>
     <Div>
          {start}
          {start}
          {start}
          {start}

     </Div>
     </DvToo>
      <br />
      <br />
     <DivThree>
          <H5>Hanaa W. </H5>
          <br />
          <H5>Oh là là super!</H5>
     <Div>

          {start}
          {start}
          {start}
    </Div>
    </DivThree>
      
  <Footer />
      
     </>


  )
}

export default MesCommentaire;
