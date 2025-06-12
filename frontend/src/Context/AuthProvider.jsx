import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    const initialAuthUSer = localStorage.getItem("User");
    const [authUser , setAuthUser] = useState(initialAuthUSer?JSON.parse(initialAuthUSer):undefined);
  return (
   <AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
   </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);


