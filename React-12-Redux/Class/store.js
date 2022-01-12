
import { createStore } from "redux";
import { AddTodo } from "./action.js";
import { reducer } from "./reducre.js";

const init = {count : 0, todo : []}

export const store = createStore(reducer, init)

store.dispatch({type : "ADD_TODO", payload: "hello"})

console.log(store.getState())


















































// const action  = {type : "", payload : ""}
// const reducer = (store, action) => {
//     return store
// }

// class Store{
//     constructor(reducer, init) {
//         this.reducer = reducer
//         this.state = init
//     }
//     getState() {
//      return   this.state
//     }
// }
// const init = {count : 0}

// const store = new Store(reducer, init)
