import React from 'react'
import './categorie.css'
import img1 from '../../images/velo2.jpeg'
import img2 from '../../images/velo3.jpeg'
import img3 from '../../images/velo_foont.jpeg'
import img4 from '../../images/VELO.jpeg'


const Categorie = () => {
  return (
       <div className='contianer' > 
          
          <div> 
             <img alt='img' className='photos' src={img1} /> 
             <p className='text-one'></p>
          </div>
          <div>
            <img alt='img' className='photos' src={img2} />
            <p className='text-deux'> </p>
          </div>
          <div>
          <img alt='img' className='photos' src={img3} />
          <p className='text-trois'></p>
          </div> 
          <div>
          <img alt='img' className='photos' src={img4} />
          <p className='text-quatre'> <br /></p>
          </div>

           
           
     </div>
  )
};

export default Categorie;
