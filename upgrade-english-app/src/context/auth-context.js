import React from 'react'

//play with user data here 
//maybe do some test

const AuthContext = React.createContext({
    name: "james",
    onLogin : [{},()=>{}],
    accessToken: "",
    userData: {},
});

export default AuthContext;