
import { INC_COUNT, DSC_COUNT } from "./actionType.js";

export const reducer = (state, {type, payload}) => {

    switch(type) {
        case INC_COUNT:
        return {...state, count : state.count + payload};
        case DSC_COUNT : 
        return {...state, count : state.count - payload};
        case "ADD_TODO" : 
        return {...state, todo : [...state.todo, payload]}
        default :
        return state
    }

};