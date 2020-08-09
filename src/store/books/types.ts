import Book from '../../types/Book';

// STATE
export type StateType = Book[];
export const initialState: Book[] = [];

// ACTION TYPES
export enum ACTIONS {
    SEARCH_BOOKS = 'SEARCH_BOOKS',
}

// export const SEARCH_BOOKS: string = 'SEARCH_BOOKS';

// ACTIONS INTERFACES
interface SearchBooksAction {
    type: typeof ACTIONS.SEARCH_BOOKS;
    payload: Array<Book>;
}

export type BooksActionTypes = SearchBooksAction;