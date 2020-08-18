import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk'

import { BooksActionTypes, ACTIONS } from './types';
import { booksApi } from '../../api';


export const startSearching = (): BooksActionTypes => ({
    type: ACTIONS.SET_SEARCHING,
    payload: [],
});

export const searchBooks = (searchRequest: string): 
        ThunkAction<void, any, unknown, BooksActionTypes> =>
        async dispatch => {
            dispatch(startSearching());
            const books = await booksApi.searchBooks(searchRequest);
            return dispatch({
                type: ACTIONS.SEARCH_BOOKS,
                payload: books,
            });
        };
