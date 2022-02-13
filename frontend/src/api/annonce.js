import { options } from './config'


const getAnnonce = async () => {
  const response = await fetch("http://localhost:5000/annonce", {
    ...options
  })

  const data = await response.json()
    
  return data
}

const getAnnonceUser = async () => {
  const response = await fetch("http://localhost:5000/annonce/user",{
        ...options,
    })

  const data = await response.json()
    
  return data
}

const createAnnonce = async (values) => {
  const response = await fetch('http://localhost:5000/annonce', {
    method: 'post',
    ...options,
    body: JSON.stringify(values),
  })

  const data = await response.json()
  return data
}


const deleteAnnonce = async _id => {
  const response = await fetch(`http://localhost:5000/annonce/${_id}`, {
    method: 'delete',
    ...options
  })

  const data = response.json()
  return data
}

const modifyAnnonce = async ( _id, values) => {
  const response = await fetch(`http://localhost:5000/annonce/${_id}`, {
    method: 'put',
    ...options,
    body: JSON.stringify(
      values
    )
  })

  const data = await response.json()
  return data
}

const getAnnonceDate = async (dateBegin, dateEnd) => {
  const response = await fetch(`http://localhost:5000/annonce/${dateBegin}/${dateEnd}`, {
    ...options,
  })

  const data = await response.json()
  return data
}

const getAnnonceAddress = async (lat, lng) => {
  const response = await fetch(`http://localhost:5000/annonce/location/${lat}/${lng}`, {
    ...options,
  })

  const data = await response.json()
  return data
}

const getAnnonceAddressDate = async (dateBegin, dateEnd, lat, lng) => {
  const response = await fetch(`http://localhost:5000/annonce/research/${dateBegin}/${dateEnd}/${lat}/${lng}`, {
    ...options,
  })

  const data = await response.json()
  return data
}

export {
  getAnnonce,
  deleteAnnonce,
  modifyAnnonce,
  getAnnonceUser,
  createAnnonce,
  getAnnonceDate,
  getAnnonceAddress,
  getAnnonceAddressDate
}