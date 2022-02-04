// import { options } from './config'

import { options } from "./config"

const getAnnonce = async () => {
  const response = await fetch("http://localhost:5000/annonce")

  const data = await response.json()
    
  return data
}
const Annonce = async ({ titre, type, description, price, adress, picture }) => {
  const response = await fetch('http://localhost:5000/annonce', {
    method: 'post',
    ...options,
    body: JSON.stringify({
      titre: titre,
      type: type,
      description: description,
      price: price,
     adress: adress, 
     picture: picture
    }),
  })

  if (response.status >= 400) {
    throw response.statusText
  }

  const data = await response.json()
  return data
}

// const getFile = async ({ files }) => {
//   const response = await             fetch(`http://localhost:5000/files/${Annonce._id}`, {
//     method: 'post',
//     ...options,
//     body: formdata
//   })
//   if (response.status >= 400) {
//     throw response.statusText
//   }

//   const data = await response.json()
//   return data
// }

  const files = async (values, user) => {
    const formdata = new FormData()
    formdata.append('photo', values.file, values.file.name)

    const response = await fetch(`http://localhost:5000/files/${Annonce._id}`, {
      method: 'post',
      ...options,
      body: formdata
    })

    const data = await response.json()
      return data
  }
export {
    getAnnonce,
    Annonce,
    files,
   
}