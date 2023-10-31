import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { Navigate } from "react-router-dom";

const GithubContext = createContext()

// const github_token = process.env.REACT_APP_GITHUB_TOKEN
// const github_url = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({children}) => {

   const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false
   }

   const [state, dispatch] = useReducer(githubReducer, initialState)

    // const clearUsers = () => {
    //     dispatch({
    //         type: 'CLEAR_DATA',
    //     })
    // }

    // const setLoading = () => dispatch({
    //     type: 'SET_LOADING'
    // });

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        // getUser, 
        // getUserRepo, 
       // searchUsers, 
      //  clearUsers, 
        }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext