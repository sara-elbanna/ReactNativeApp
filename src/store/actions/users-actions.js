import Axios from "axios";
import { SET_USERS, ADD_USER, DELETE_USER } from "./actionsTypes";

export function getListOfUsers(){
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

export function addUser(user){
    return{
        type: ADD_USER,
        payload: user
    }

}
export function deleteUser(userId){
    return{
        type: DELETE_USER,
        payload: userId
    }
}