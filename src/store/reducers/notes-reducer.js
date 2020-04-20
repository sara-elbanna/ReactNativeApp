import { ADD_CATEGORY } from "../actions/actionsTypes";

let INITIAL_STATE = {
    categories:[
        {id:1, name:'personal', count:1},
        {id:2, name:'work', count:0},
        {id:3, name:'sport', count:0},
        {id:4, name:'ideas', count:0}
    ],
    notesList:[
        {id:1, name:'', date:1528101580, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', categoryId: 1},
        {id:2, name:'', date:1528101680, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', categoryId: 1},
        {id:3, name:'', date:1528201780, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', categoryId: 1},
        {id:4, name:'', date:1528501880, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', categoryId: 1},
        {id:5, name:'', date:1528101980, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', categoryId: 1}

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