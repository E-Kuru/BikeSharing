// import { options } from './config'

const getAnnonce = async () => {
  const response = await fetch("http://localhost:5000/annonce")

  const data = await response.json()
    
  return data
}

export {
    getAnnonce
}