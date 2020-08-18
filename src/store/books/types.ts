import Book from '../../types/Book';

// STATE
export type StateType = {
    books: Book[],
    loading: boolean,
};
export const initialState: StateType = {
    books: [],
    loading: false,
};

// ACTION TYPES
export enum ACTIONS {
    SEARCH_BOOKS = 'SEARCH_BOOKS',
    SET_SEARCHING = 'SET_SEARCHING',
}

// export const SEARCH_BOOKS: string = 'SEARCH_BOOKS';

// ACTIONS INTERFACES
interface SearchBooksAction {
    type: typeof ACTIONS.SEARCH_BOOKS;
    payload: Array<Book>;
}

interface SetSearchingAction {
    type: typeof ACTIONS.SET_SEARCHING;
    payload: Array<Book>,
}

export type BooksActionTypes = SearchBooksAction | SetSearchingAction;