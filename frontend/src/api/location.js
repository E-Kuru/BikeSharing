import { options } from './config'

const getCommandeUser = async () => {
    const response = await fetch("http://localhost:5000/location/lender",{
        ...options,
    })

  const data = await response.json()
    
  return data
}

const getLocationUser = async () => {
    const response = await fetch("http://localhost:5000/location/borrower",{
        ...options,
    })

  const data = await response.json()
    
  return data
}

const getOneLenderRental = async () => {
    const response = await fetch("http://localhost:5000/location/borrower",{
        ...options,
    })

  const data = await response.json()
    
  return data
}

const confirmLocation = async ( _id) => {
  const response = await fetch(`http://localhost:5000/location/location/${_id}`, {
    method: 'put',
    ...options,
  })

  const data = await response.json()
  return data
}

export {
  getCommandeUser,
  getLocationUser,
  confirmLocation
}