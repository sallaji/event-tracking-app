import React, {createContext, useState, useEffect} from 'react';
import doFetch from "../network/NetworkUtil";

// import doFetch from "../network/NetworkUtil";
//TODO: https://www.youtube.com/watch?v=A23O4aUftXk

export const UserContext = createContext(null);


// const context = createContext(null);
// const UserProvider = ({children}) => {
//   const {user, setUser} = useState({});
//
//   useEffect(() => {
//     fetch("/api/users")
//     .then(res => res.json())
//     .then(json => setUser(json))
//     .catch(err => console.error(err))
//   }, []);
//   return (<context.Provider value={user}>
//     {children}
//   </context.Provider>)
// };
// UserProvider.context = context;

// export default UserProvider