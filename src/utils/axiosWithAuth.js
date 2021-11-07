import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: "https://localhost:5000/api/",
        headers: {
            "Content-Type": "application/json",
        Authorization: `${token}`
        }
    })
    
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth
//??? Need help understanding what's going on here, not sure if correct???