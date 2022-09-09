import { configureStore } from '@reduxjs/toolkit'

const initialState = {lastFetch : null ,
     user:{username : "", password: "", role : "", name : ""},
     claim : [],
     claimToEdit : {},
     claimStatusOptions : []};

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
    else if (action.type === "save-claim") {
        return {...state, claim : action.value, lastFetch : new Date().getTime()}
    }
    else if (action.type === "set-claim-to-edit") {
        return {...state, claimToEdit : action.value}
    }
    else {
        return state;
    }
}

const myStore = configureStore({reducer : loginReducer});

export default myStore;