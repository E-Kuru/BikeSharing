import { options } from './config'

const getLocationUser = async () => {
    const response = await fetch("http://localhost:5000/location/lender",{
        ...options,
    })

  const data = await response.json()
    
  return data
}

export {
    getLocationUser,
}