import { createContext,  useState } from "react";

const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);



  const login = (username) => {
    // Simulando la creación de un token (en una app real, esto sería generado por un servidor)
    const token = `fake-token-${username}`;
    if(username === "admin@ejemplo.com"){ //contraseña : admin1234
      setAdmin(true)
    }
    localStorage.setItem('authToken', token);
    setUser(username);
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setAdmin(false)
  };

  function verificLog(){
    const userToken = localStorage.getItem("authToken")
    if(userToken && userToken == "fake-token-admin@gmail.com"){
      setAdmin(true)
      return
    }if(userToken){
      setUser(userToken)
    }
  }
  return (
    <AuthContext.Provider value={{ user, login, logout, admin, verificLog }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext