import { options } from './config'

const modifyInfosUser = async ( values) => {
    const response = await fetch(`http://localhost:5000/users/user/modifier`, {
      method: 'put',
      ...options,
      body: JSON.stringify(
        values
      )
    })
  
    const data = response.json()
    return data
}

const getUser = async () => {
    const response = await fetch(`http://localhost:5000/users/infos`, {
      ...options,
    })
  
    const data = response.json()
    return data
}

export {
  modifyInfosUser,
  getUser
}