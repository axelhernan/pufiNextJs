import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Caption = styled.p`
    font-size: 1.5rem;
    color: var(--grey);
    text-align:center;
    font-family: 'Nunito', sans-serif;
    margin: 10rem 0 0;
`;
const Heading = styled.h2`
    text-align:center;
    font-size: 5rem;
    color: var(--black);
    margin: 0 0 5rem;

    & > span {
        display:block;
        font-size: 1.5rem;
        font-family: 'Nunito', sans-serif;
    }
`;

const Titles = props => {
    return ( 
        <>
            <Caption>{props.Caption}</Caption>
            <Heading>{props.Heading}<span>{props.Bajada}</span></Heading>
        </>
     );
}
 
export default Titles;