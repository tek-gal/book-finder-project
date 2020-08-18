import Book from '../types/Book';
import booksJson from '../books.json';


export const booksApi = {
    searchBooks: async (searchRequest: string): Promise<Book[]> => {
        searchRequest = searchRequest.toLowerCase();
        
        return new Promise((resolve, rejects) => {
            const hasCoincedanseInKeys = (book: Book) => Object
                .keys(book)
                .filter(key => ['author', 'title', 'year', 'description'].includes(key))
                .map(key => (book as any)[key])
                .some(value => value.toString().toLowerCase().indexOf(searchRequest) > -1);
            const searchedBooks = booksJson.filter(hasCoincedanseInKeys);
                
            setTimeout(() => resolve(searchedBooks), 3000);
        })
    },
};