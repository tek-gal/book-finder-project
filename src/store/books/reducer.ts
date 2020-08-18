import { Reducer } from 'redux';

import { ACTIONS, BooksActionTypes, initialState, StateType } from './types';


const reducer: Reducer<StateType, BooksActionTypes> = 
    (state = initialState, action): StateType => {
    const type: ACTIONS = action.type;
    
    switch (type) {
        case ACTIONS.SEARCH_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false,
            };
        case ACTIONS.SET_SEARCHING:
            return {
                ...state,
                loading: true,
                books: action.payload,
            };
        default:
            return { ...state }; 
    }
};


export default reducer;