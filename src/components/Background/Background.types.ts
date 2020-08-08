import { ReactNode } from 'react';


export type BackgroundProps = {
    image: string;
    children: Array<ReactNode> | ReactNode;
};