import axios from 'axios';


export const booksApi = {
    searchBooks: async (searchRequest: string): Promise<any> => {
        const baseURL: string = `https://www.google.com/search?tbm=bks&q=${searchRequest}`;
        const response = await axios.get(baseURL, {
            headers: {
                'Access-Control-Allow-Origin': 'https://www.google.com',
            },
        });
        console.log(response);
        return response;
    },
};