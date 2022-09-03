import axios from 'axios';

const apiUrl ='http://localhost:8080/api/';

const basicAuthHeader = (username, password) => {
    console.log(btoa(`${username}:${password}`));
    return {'Authorization' : 'Basic ' + btoa(`${username}:${password}`)}
}

export const getAllCustomers = () => {
    const customers = 
    axios({
        url : apiUrl+"customer", 
        method: "GET", 
        headers : {'Accept': 'application/json'} });
    return customers;
}

export const addNewClaim = (username, password, data) =>  {
    return axios({ url : apiUrl+"claim", 
    method : "POST", 
    headers : {...basicAuthHeader("Aaron", "password"), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : data } );
}

export const getAllclaimAxiosVersion = (username, password) => {
    
    const claimPromise = axios({ url :"http://localhost:8080/api/claim/",
         method: "GET", headers: {...basicAuthHeader(username, password), 'Accept': 'application/json' } });
        
    return claimPromise;
}

export const updateClaim = (username, password, id, data) =>  {
    return axios({ url : "http://localhost:8080/api/claim/" + id, 
    method : "PUT", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : data } );
}

export const getClaim = (username, password, id) => {
    return axios(
        {url : `http://localhost:8080/api/claim/${id}`,
        method: "GET",
        headers : {...basicAuthHeader(username, password), 'Accept': 'application/json'}
        });
    }