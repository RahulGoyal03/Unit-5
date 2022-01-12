//action creator
//it is a function which returns an object that defines

import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes"

export const addCounter = (payload) => {
    return {
        type : ADD_COUNTER,
        payload
    }
}

export const reduceCounter = (payload) => {
    return {
        type : REDUCE_COUNTER,
        payload
    }
}


