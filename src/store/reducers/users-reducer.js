
import { SET_USERS, ADD_USER, DELETE_USER } from '../actions/actionsTypes'
let INITIAL_STATE = {
    usersList : []
}

export default function users ( state = INITIAL_STATE, action ){
    switch (action.type) {
        case SET_USERS :
          return { ...state , usersList : action.payload}
        case ADD_USER :{
          let new_user = { id : state.usersList.length + 1, ...action.payload}
          return { ...state , usersList : [...state.usersList, new_user]}
        }
        case DELETE_USER :{
          return { ...state , usersList : state.usersList.filter(user=> user.id !== action.payload)}
        }
          
        default:
          return state;
    }
}