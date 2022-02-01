import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ModalContext = createContext({ })

const ModalProvider = ({ children }) => {
  const location = useLocation()
  const [visible, setVisible] = useState(true)
  const [type, setType] = useState(null)

  useEffect(() => {
    setVisible(false)
    setType(null)
  }, [location])

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