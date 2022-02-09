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

  if (response.status >= 400) {
    throw response.statusText
  }

  const data = await response.json()
  return data
}


// const files = async (values, user) => {
//   const formdata = new FormData()
//   formdata.append('photo', values.file, values.file.name)

//   const response = await fetch(`http://localhost:5000/files/${Annonce._id}`, {
//     method: 'post',
//     ...options,
//     body: formdata
//   })
// }

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

export {
  getAnnonce,
  deleteAnnonce,
  modifyAnnonce,
  getAnnonceUser,
  createAnnonce,
  getAnnonceDate
}