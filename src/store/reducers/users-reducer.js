
import { SET_USERS } from '../actions/actionsTypes'
let INITIAL_STATE = {
    usersList : []
}

export default function users ( state = INITIAL_STATE, action ){
    switch (action.type) {
        case SET_USERS :
          return { ...state , usersList : action.payload}
        default:
          return state;
    }
}