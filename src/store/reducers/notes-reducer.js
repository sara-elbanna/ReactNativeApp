import { ADD_CATEGORY } from "../actions/actionsTypes";

let INITIAL_STATE = {
    categories:[
        {id:1, name:'personal', count:1},
        {id:2, name:'work', count:0},
        {id:3, name:'sport', count:0},
        {id:4, name:'ideas', count:0}
    ],
    notesList:[
        {id:1, name:'', date:9, description:'vvvv', category: 'personal'}
    ]
}

export default function users ( state = INITIAL_STATE, action ){
    switch (action.type) {
        case ADD_CATEGORY :{
            let new_category = { id : state.categories.length + 1, name: action.payload, count:0}
            console.log('gggg', new_category)

            return { ...state , categories : [...state.categories, new_category]}
          }
        // case ADD_USER :{
        //   let new_user = { id : state.usersList.length + 1, ...action.payload}
        //   return { ...state , usersList : [...state.usersList, new_user]}
        // }
        // case DELETE_USER :{
        //   return { ...state , usersList : state.usersList.filter(user=> user.id !== action.payload)}
        // }
          
        default:
          return state;
    }
}