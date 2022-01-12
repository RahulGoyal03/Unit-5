import { ADD_TODO } from "./actionType";


// const getDB = async () => {
//     let res = await fetch("http://localhost:5000/todo")
//     let dat = await res.json()
//     console.log(dat)
// }
// let todo = getDB()


const initialState = {
   todo : []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_TODO : 
        return {
            ...state,
            todo : [...state.todo, payload]
        }

        default:
         return state
    }
}



