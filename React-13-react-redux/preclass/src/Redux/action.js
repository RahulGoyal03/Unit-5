import { ADD_TODO } from "./actionType";

//action creator

export const addtodo = payload => {
    return {
        type :ADD_TODO,
        payload
    }
}