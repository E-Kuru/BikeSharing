import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'
const Footer = () => {
  return (
     <div className='main-footer'> 
          <div className='container'>
               <div className='row'>
                    {/* Column1 */}
                    <div className='col'>
                         <h4>EN SAVOIR PLUS</h4>
                         <ul className='list-unstyled'>
                         <li>Qui sommes-nous</li>
                          <li>Comment ça marche ?</li>
                         <li>Un service de confiance</li>
                         </ul>

                    </div>
                    {/* Column2 */}
                    <div className='col'>
                    <h4>CONTACT</h4>
                    <ul className='list-unstyled'>
                    <li>Aide</li>
                    <li>Assurance</li>
                    </ul>
                    </div>
                    {/* Column3 */}
                    <div className='col'>
                    <h4>DECOUVRIR</h4>
                    <ul className='list-unstyled'>
                    <li>Blog</li>
                    <li>Professionnels</li>
                    <li>Applis mobile</li>
                    </ul>
                    </div>

               </div>
               <div className='row'>
                    <p className='col-sm'>

                    </p>

               </div>

          </div>
          
     </div>
  )
}

export default Footer
