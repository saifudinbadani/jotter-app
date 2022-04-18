import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [ initialAuth, setInitialAuth] = useState({
        isLoggedIn: false,
        token: ''
    });
    return <AuthContext.Provider value={{initialAuth, setInitialAuth}}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }