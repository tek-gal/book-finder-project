import { ThunkAction } from 'redux-thunk'

import { BooksActionTypes, ACTIONS } from './types';
import { booksApi } from '../../api';


export const searchBooks = (searchRequest: string): 
        ThunkAction<void, any, unknown, BooksActionTypes> => 
    async dispatch => {
        booksApi.searchBooks(searchRequest);
        return dispatch({
            type: ACTIONS.SEARCH_BOOKS,
            payload: [],
        });
};
