import { INC_COUNT, DSC_COUNT } from "./actionType.js";


export const incCount = (data) => {
    return {type : INC_COUNT, payload: data}
}


export const AddTodo = (data) => {
    return {type : "ADD_TODO", payload: data}
}