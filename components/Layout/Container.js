import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    width:90%;
    margin:0 auto;
    max-width:320px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:768px){
        width:100%;
        margin:0 auto;
        max-width:1200px;
    }
`;

export default Container;