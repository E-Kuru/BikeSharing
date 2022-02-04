import { options } from './config'

const login = async ({ email, password }) => {
  const response = await fetch('http://localhost:5000/auth/login', {
    method: 'post',
    ...options,
    body: JSON.stringify({
      email,
      password
    }),
  })

  if (response.status >= 400) {
    throw response.statusText
  }

  const data = await response.json()
  return data
}

const getMe = async () => {
  
  const response = await fetch('http://localhost:5000/auth/me', {
    ...options
  })
  
  const data = response.json()
  return data
}

const signUp = async ({ firstName, lastName, adress, phoneNumber, email, password }) => {
  const response = await fetch('http://localhost:5000/auth/signup', {
    method: 'post',
    ...options,
    body: JSON.stringify({
      firstName,
      lastName,
      adress,
      phoneNumber,
      email,
      password,
    })
  })

  const data = await response.json()
  return data
}

const logout = async () => {
  const response = await fetch(`http://localhost:5000/auth/logout`, {
    method: 'delete',
    ...options
  })

  const data = response.json()
  return data
}


export {
    login,
    getMe,
    signUp,
    logout
}