import { createContext, useEffect, useState } from "react";

import { getMe } from "../api/auth";



const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [annonceDate, setAnnonceDate] = useState([])


  useEffect(() => {
    getUser();
  }, []);



  const getUser = async () => {
    const fetchUser = await getMe();

    if (!fetchUser.error) {
      setUser(fetchUser);
    }
  };




  const value = {
    user,
    setUser,
    getUser,
    annonceDate,
    setAnnonceDate
    
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
