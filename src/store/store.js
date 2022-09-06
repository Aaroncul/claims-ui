import { configureStore } from '@reduxjs/toolkit'

const initialState = { countries : [] , lastFetch : null ,
     user:{username : "", password: "", role : "", name : ""}};

const loginReducer = (state = initialState, action) => {
    if (action.type === "clear-down") {
        return initialState;
    }
    else if (action.type === "login") {
        return {...state, user : action.value}
    }
    else if (action.type === "logout") {
        return {...state, user : {username : "", password: "", role : "", name : ""}}
    }
    else if (action.type === "save-claims") {
        return {...state, transactions : action.value, lastFetch : new Date().getTime()}
    }
    else if (action.type === "set-claims-to-edit") {
        return {...state, transactionToEdit : action.value}
    }
    else {
        console.log("unknown redux action " + action.type);
        return state;
    }

}
const myStore = configureStore({reducer : loginReducer});

export default myStore;