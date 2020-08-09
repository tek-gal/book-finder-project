import { Reducer } from 'redux';

import Book from '../../types/Book';
import { ACTIONS, BooksActionTypes, initialState, StateType } from './types';


const reducer: Reducer<StateType | undefined, BooksActionTypes> = 
    (state = initialState, action): StateType => {
    const type: ACTIONS = action.type;

    switch (type) {
        case ACTIONS.SEARCH_BOOKS:
            return [...state, ...action.payload];
        default:
            return [...state]; 
    }
};


export default reducer;