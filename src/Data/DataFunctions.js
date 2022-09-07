import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/';

const basicAuthHeader = (username, password) => {
    return { 'Authorization': 'Basic ' + btoa(`${username}:${password}`) }
}

export const getHealth = () => {
    const health =
        axios({
            url: apiUrl + "health",
            method: "GET",
            headers: { 'Accept': 'application/json' }
        });
    return health;
}

export const getAllUsers = () => {
    const users =
        axios({
            url: apiUrl + "user",
            method: "GET",
            headers: { 'Accept': 'application/json' }
        });
    return users;
}

export const addNewClaim = (username, password, data) => {
    return axios({
        url: apiUrl + "claim",
        method: "POST",
        headers: { ...basicAuthHeader(username, password),'Accept': 'application/json', 'Content-Type': 'application/json' },
        data: data
    });
}

export const updateClaim = (username, password, id, data) =>  {
    return axios({ url : "http://localhost:8080/api/claim/" + id, 
    method : "PUT", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : data } );
}

export const getClaim = (username, password, id) => {
    return axios(
        {
            url: `http://localhost:8080/api/claim/${id}`,
            method: "GET",
            headers: { ...basicAuthHeader(username, password), 'Accept': 'application/json' }
        });
}

export const getAllClaims = (username, password) => {
    return axios(
        {
            url: `http://localhost:8080/api/claim`,
            method: "GET",
            headers: { ...basicAuthHeader(username, password), 'Accept': 'application/json' }
        });
}
export const getMyClaims = (username, password) => {
    return axios(
        {
            url: `http://localhost:8080/api/claim/myClaims`,
            method: "GET",
            headers: { ...basicAuthHeader(username, password), 'Accept': 'application/json' }
        });
}
export const login = (username, password) => {
    return axios(
        {url : apiUrl + "login",
        method: "POST",
        headers : { ...basicAuthHeader(username,password) , 'Accept': 'application/json', 'Content-Type' : 'application/json' },
        data : {"username" : username}
    }) ;
}

export const getUserDetails = (username, password) => {
    return axios(
        {
            url: apiUrl + "user",
            method: "GET",
            headers: { 
                ...basicAuthHeader(username, password), 
                'Accept': 'application/json', 
                'Content-Type' : 'application/json' }
        });
}