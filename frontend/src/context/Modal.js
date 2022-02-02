import { createContext, useState } from 'react'


const ModalContext = createContext({ })

const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(true)
  const [type, setType] = useState(null)

 
  const close = () => {
    setType(null)
    setVisible(false)
  }

  const open = () => {
    setVisible(true)
  }

  const handleSignupClick = () => {
    open()
    setType('signup')
  }
  
  const handleLoginClick = () => {
    open()
    setType('login')
  }

  const value = {
    visible,
    setVisible,
    type,
    setType,
    close,
    open,
    handleSignupClick,
    handleLoginClick,
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export {
  ModalContext,
  ModalProvider
}