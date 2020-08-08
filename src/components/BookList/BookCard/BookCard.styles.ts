import styled from 'styled-components';


export const BookCardWrapper = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    margin: 0 50px;

    .book-list__item-coverage {
        margin-right: 20px;
        height: 100px;
        width: 70px;
        overflow: hidden;
        flex-shrink: 0;
        
        img {
            height: 100px;
            width: auto;
        }
    }

    .book-list__item-info {
        flex-shrink: 1;
        text-align: left;
        
        h3 {
            font-size: 16px;
            margin: 0;
            margin-bottom: 8px;
        }

        p {
            margin: 4px 0;
            font-size: 14px;
            opacity: 0.6;
        }
    }
`;
