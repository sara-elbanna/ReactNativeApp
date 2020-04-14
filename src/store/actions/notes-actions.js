import Axios from "axios";
import {  ADD_NOTE, DELETE_NOTE, ADD_CATEGORY } from "./actionsTypes";

export function addCategory(category){
    console.log('category',category)
    return{
        type: ADD_CATEGORY,
        payload: category
    }

}
export function addNote(note){
    return{
        type: ADD_NOTE,
        payload: note
    }

}
export function deleteNote(noteId){
    return{
        type: DELETE_NOTE,
        payload: noteId
    }
}