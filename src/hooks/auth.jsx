import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data;

      localStorage.setItem("@foodexp:token", token)
      localStorage.setItem("@foodexp:user", JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token });
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível prosseguir")
      }
    }
  }

  function signOut() {

    localStorage.removeItem("@foodexp:token")
    localStorage.removeItem("@foodexp:user");

    setData({});
  }


  useEffect(() => {
    const token = localStorage.getItem('@foodexp:token')
    const user = localStorage.getItem('@foodexp:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ 
        token, 
        user: JSON.parse(user)
      })

    }
  }, [])

  return (
    <AuthContext.Provider value={{ 
      user: data.user,
      signIn,
      signOut
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);


  return context;
}



export { AuthProvider, useAuth };