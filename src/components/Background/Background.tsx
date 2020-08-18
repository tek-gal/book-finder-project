import React from 'react';

import { BackgroundStyles } from './Background.styles';
import { BackgroundProps } from './Background.types';


const Background: React.FC<BackgroundProps> = ({ children, image }) =>  {
    return (
        <BackgroundStyles className="background" image={image}>
            {children}
        </BackgroundStyles>
    );
};

export default Background;
