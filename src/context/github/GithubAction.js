import { Navigate } from "react-router-dom"
import axios from "axios"
const github_token = process.env.REACT_APP_GITHUB_TOKEN
const github_url = process.env.REACT_APP_GITHUB_URL


const github = axios.create({
    baseURL: github_url,
    header: { Authorization: `token ${github_token}`}
})

export const  searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return {user: user.data, repos: repos.data}
}

// export const getUser = async (login) => {
//    // setLoading();
    
//     const response = await fetch(`${github_url}/users/${login}`, {
//         headers: {
//             Authorization: `token ${github_token}`,
//         },
//     })

//     if(response.status === 404) {
//         Navigate("/notfound")
//     } else {
//         const data = await response.json()

//         return data
//     }
   
// }



// export const getUserRepo = async (login) => {
//    // setLoading();
//     try{
//         const params = new URLSearchParams({
//             sort: 'created',
//             per_page: 10
//         })
   
//         const response = await fetch(`${github_url}/users/${login}/repos?${params}`, {
//             headers: {
//                 Authorization: `token ${github_token}`,
//             },
//         })

//         const data = await response.json()

//         return data
//     } catch (e) {
//         console.error('Error fetching repos:', e);
//     }

// }