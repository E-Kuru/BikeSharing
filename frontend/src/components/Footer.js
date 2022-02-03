import styled from 'styled-components'


const Footer = () => {

    const Container = styled.div`
    border-top: 2px solid white;
    width: 100%;
    height: 100%;
    `
    const Info = styled.div`
    font-family: 'Gilda Display', serif;
    text-align: center;
    padding: 40px;
    `

    const Div = styled.div`
    display: flex;
    flex-direction: column;
    border: red 1px solid;
    `

  return (
     <Container  className='container'> 
               <Info className='row'>
                    <div className='col-6'>
                         <h4>EN SAVOIR PLUS</h4>
                         <Div>
                         <p className='col-6'>
                         <p>Qui sommes-nous</p>
                          <p>Comment ça marche ?</p>
                         <p>Un service de confiance</p>
                         <p className='col-6'>
                             <p>Aide</p>
                             <p>Contact</p>
                         </p>
                         </p>
                         </Div>
                    </div>
                    <div className='col-6'>
                         <h4>DECOUVRIR</h4>
                         <Div>
                         <p className='col-6'>
                         <p>Asssurance</p>
                          <p>blog</p>
                         <p className='col-6'>
                             <p>Professionnels</p>
                             <p>Applis mobile</p>
                         </p>
                         </p>
                         </Div>
                    </div>
               </Info>
     </Container>
  )
}

export default Footer