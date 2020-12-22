import React from 'react';
import styled from '@emotion/styled';


const Button = styled.button`
    border:1px solid var(--white);
    padding: 1rem 5rem;
    background:none;
    color: var(--white);
    text-transform:uppercase;
    letter-spacing: 0.6rem;

    &:hover{
        background:var(--white);
        color:var(--black);
        cursor:pointer;
        transition: .5s ease-in;
    }
`;
 
export default Button;