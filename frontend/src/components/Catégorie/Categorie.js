import React from 'react'
import './categorie.css'

const Categorie = () => {
  return (
       <div className='contianer' > 
          
          <div> 
             <img className='photos' src='./photo/velo2.jpeg' /> 
             <p className='text-one'>VTT</p>
          </div>
          <div>
            <img className='photos' src='./photo/velo3.jpeg' /> 
            <p className='text-deux'> VTC</p>
          </div>
          <div>
          <img className='photos' src='./photo/velo_foont.jpeg' /> 
          <p className='text-trois'>VELO DE VILLE</p>
          </div> 
          <div>
          <img className='photos' src='./photo/VELO.jpeg' /> 
          <p className='text-quatre'>AUTRE <br />................</p>
          </div>

           
           
     </div>
  )
};

export default Categorie;
