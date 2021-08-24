import { FETCH_DATA } from './actions';

const initialState = {
    data: []
}

export function fetchReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state;
    }
}

export const getData = state => state.data;