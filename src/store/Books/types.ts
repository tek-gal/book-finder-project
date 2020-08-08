import { Book } from '../../types';

export const SEARCH_BOOKS: string = 'SEARCH_BOOKS';

interface SerachBooksAction {
    type: typeof SEARCH_BOOKS;
    payload: Array<Book>;
}

export type BooksActionTypes = SerachBooksAction;