import React, { ReactNode } from 'react';

import { ContainerStyles } from './Container.styles';

type ContainerProps = {
    children: Array<ReactNode> | ReactNode;
};


const Container: React.FC<ContainerProps> = ({ children }) =>  {
    return (
        <ContainerStyles className="container">
            {children}
        </ContainerStyles>
    );
};

export default Container;
