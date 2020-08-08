import styled from 'styled-components';


const EmptyBookListStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  
  img {
    height: 80px;
    width: 80px;
    opacity: 0.4;
  }

  p {
    font-size: 16px;
    margin-top: 1em;
    opacity: 0.4;
  }
`;

export default EmptyBookListStyles;
