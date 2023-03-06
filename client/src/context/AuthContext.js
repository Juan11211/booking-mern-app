// import { createContext, useReducer, useEffect } from "react"

// const INITIAL_STATE = { 
//     user: JSON.parse(localStorage.getItem('user')) || null,
//     loading: false, 
//     error: null,
// }

// export const AuthContext = createContext(INITIAL_STATE)

// const AuthReducer = (state, action) => { 
//     switch(action.type){
//         case "LOGIN_START": // how it first appears. empty. 
//         return { 
//             user: null, 
//             loading: true, 
//             error: null,
//         }
//         case "LOGIN_SUCCESS":
//             return {
//                 user: action.payload, // login has been successfully passed -- payload refers to the data that is passed along with an action that is dispatched to the AuthReducer function. 
//                 loading: false, 
//                 error: null,
//             };
//         case "LOGIN_FAILURE":
//             return {
//                 user: null, 
//                 loading: false, 
//                 error: action.payload, // payload is holding an error message.
//             }
//         case "LOGOUT": 
//             return { 
//                 user: null, 
//                 loading: false, 
//                 error: null,
//             }
//         default:
//             return state;
//     }
//     };
// // whenever we change our search info, this will run.

// export const AuthContextProvider = ({children}) => { 
//     const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

// useEffect(() => { 
//     localStorage.setItem("user", JSON.stringify(state.user));
// }, [state.user]);

// return ( 
//     <AuthContext.Provider value={{
//         user: state.user, 
//         loading: state.loading, 
//         error: state.error,
//         dispatch,
//     }}>
//         {children}
//     </AuthContext.Provider>
// )
// }

import { createContext, useEffect, useReducer } from "react";

const user = localStorage.getItem("user");
const parsedUser = user ? JSON.parse(user) : null;

const INITIAL_STATE = {
  user: parsedUser,
  loading: false,
  error: null,
};


export const AuthContext = createContext(INITIAL_STATE);


const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};