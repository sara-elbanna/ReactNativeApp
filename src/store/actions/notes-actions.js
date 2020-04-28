import Axios from "axios";
import {  ADD_NOTE, DELETE_NOTE, ADD_CATEGORY, EDIT_NOTE, DELETE_ALL_NOTES, DELETE_SELECTED_NOTES } from "./actionsTypes";

export function addCategory(category){
    console.log('category',category)
    return{
        type: ADD_CATEGORY,
        payload: category
    }

}
export function addNote(categoryId){
    return{
        type: ADD_NOTE,
        payload: categoryId
    }

}
export function editNote(noteId, newContent){
    return{
        type: EDIT_NOTE,
        payload: {noteId, newContent}
    }
}
export function deleteNote(note){
    return{
        type: DELETE_NOTE,
        payload: note
    }
}
export function deleteAllNotes(categoryId){
    return{
        type: DELETE_ALL_NOTES,
        payload: categoryId
    }
}
export function deleteSelectedNotes(categoryId, arrayOfnotes){
    return{
        type: DELETE_SELECTED_NOTES,
        payload: { categoryId, arrayOfnotes}
    }
}