import Axios from "axios";
import { SET_USERS } from "./actionsTypes";

export function getListOfUsers(){
    console.log('hereeee')
    return ( dispatch , getState)=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(r=>r.json()).then(res=>{
            console.log('qqqqqq',res)
            dispatch(setUsers(res))
        })
    }
    
}

function setUsers(users){
    return {
        type: SET_USERS,
        payload: users
    }
}