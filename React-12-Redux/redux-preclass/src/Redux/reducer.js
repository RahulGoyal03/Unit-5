//state, action

import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes"

const initialState = {
    counter : 1
}

export const reducer = (state = initialState, {type, payload}) => {

    switch(type) {
        case ADD_COUNTER: 
        return {
            ...state,
            counter : state.counter + payload
        };

        case REDUCE_COUNTER : 
        return {
            ...state,
            counter : state.counter - payload
        };

        default : {
            return state
        }
    }
    
}