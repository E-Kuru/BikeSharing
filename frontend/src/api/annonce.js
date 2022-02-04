import { options } from './config'

const getAnnonce = async () => {
  const response = await fetch("http://localhost:5000/annonce")

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

const modifyAnnonce = async ( id, values) => {
  const response = await fetch(`http://localhost:5000/annonce/${id}`, {
    method: 'put',
    ...options,
    body: JSON.stringify(
      values
    )
  })

  const data = response.json()
  return data
}

export {
  getAnnonce,
  deleteAnnonce,
  modifyAnnonce
}