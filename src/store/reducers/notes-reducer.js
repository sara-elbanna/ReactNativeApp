import { ADD_CATEGORY, EDIT_NOTE, DELETE_NOTE, ADD_NOTE, DELETE_ALL_NOTES, DELETE_SELECTED_NOTES } from "../actions/actionsTypes";
import moment from "moment";

let INITIAL_STATE = {
    categories:[
        {id:1, name:'personal', count:4},
        {id:2, name:'work', count:1},
        {id:3, name:'sport', count:0},
        {id:4, name:'ideas', count:0}
    ],
    notesList:[
        {id:1, date:1528101580 , categoryId: 1, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id:2, date:1528101680 , categoryId: 1, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id:3, date:1528201780 , categoryId: 1, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id:4, date:1528501880 , categoryId: 1, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id:5, date:1528101980 , categoryId: 2, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}

    ]
}

export default function users ( state = INITIAL_STATE, action ){

    switch (action.type) {
        case ADD_CATEGORY :{
            let new_category = { id : state.categories.length + 1, name: action.payload, count:0}
            return { ...state , categories : [...state.categories, new_category]}
          }
        case  ADD_NOTE:{
          let new_note = { id : state.notesList.length + 1, categoryId: action.payload, date: moment().unix(), content:''}
          let new_categories = [...state.categories]
          let note_category_index = new_categories.findIndex(c=> c.id === action.payload)
          new_categories[ note_category_index ].count += 1
          return { ...state , notesList : [...state.notesList, new_note], categories: new_categories}
        }
        case EDIT_NOTE :{
            let new_list = [...state.notesList]
            let index = new_list.findIndex(note=> note.id == action.payload.noteId) 
            new_list[index].content = action.payload.newContent
            new_list[index].date = moment().unix()
            return { ...state , notesList : new_list}
          }
        case DELETE_NOTE :{
          let new_categories = [...state.categories]
          let note_category_index = new_categories.findIndex(c=> c.id === action.payload.categoryId)
          new_categories[ note_category_index ].count -= 1
          return { ...state , notesList : state.notesList.filter(note=> note.id !== action.payload.id), categories: new_categories}
        }
        case DELETE_ALL_NOTES :{
          let new_categories = [...state.categories]
          let note_category_index = new_categories.findIndex(c=> c.id === action.payload)
          new_categories[ note_category_index ].count  = 0
          return { ...state , notesList : state.notesList.filter(note=> note.categoryId !== action.payload), categories: new_categories}
        }
        case DELETE_SELECTED_NOTES :{ 
          let new_categories = [...state.categories]
          let category_index = new_categories.findIndex(c=> c.id === action.payload.categoryId)
          new_categories[ category_index ].count  = new_categories[ category_index ].count - action.payload.arrayOfnotes.length
          return { ...state , notesList : state.notesList.filter(note=> !action.payload.arrayOfnotes.includes( note.id ) && note.categoryId == action.payload.categoryId ), categories: new_categories}
        }
          
        default:
          return state;
    }
}