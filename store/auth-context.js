import React, { useState } from 'react';

//React Context API
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
    userName: ''
});

const  AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState('');
    const userIsLoggedIN = !!token;
    const loginHandler = (token) => {
        setToken(token.idToken);
        setUserName(token.email);
    }
    const logoutHandler = () => {
        setToken(null);
    }
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIN,
        login: loginHandler,
        logout: logoutHandler,
        userName: userName
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider};