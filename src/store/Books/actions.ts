import { BooksActionTypes, SEARCH_BOOKS } from './types';


export const searchBooks = (searchRequest: string): BooksActionTypes => ({
    type: SEARCH_BOOKS,
    payload: [],
});
