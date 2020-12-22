import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const pufiItems = [
    { id: 1, link: 'http://google.com', icon: '/static/images/icons/pufi-icon-puff.svg', text: 'pufi puff' },
    { id: 2, link: 'http://google.com', icon: '/static/images/icons/pufi-icon-umbrella.svg', text: 'pufi rain' },
    { id: 3, link: 'http://google.com', icon: '/static/images/icons/pufi-icon-cart.svg', text: 'pufi cart' },
    { id: 4, link: 'http://google.com', icon: '/static/images/icons/pufi-icon-nap.svg', text: 'pufi nap' }
]

const ListStyled = styled.div`
    font-family: 'Nunito', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr;

    li{
        border:1px solid var(--white);
        padding:2rem;
    }

    @media screen and (min-width:992px){
        display:flex;
        
        li{
            display:inline-flex;
            padding: 0 2rem;
            border:none;
            border-right:1px solid var(--grey);

            &:hover{
                opacity:.5;
                transition:.6s ease-in;
            }

            &:last-child{
                border:none;
            }
        }
    }
`;

const LinkStyled = styled.a`
    display:inline-grid;
    color:var(--white);
    padding: 1rem 0;
`;

const Navigation = () => {
    return (
        <ListStyled>
            { pufiItems.map((item) =>
            (<li key={item.id}>
                <LinkStyled href={item.link}>
                    <Image src={item.icon} css={css`display:block!important;`} width='20' height='20' />
                    {item.text}
                </LinkStyled>
            </li>))
            }
        </ListStyled>
    );
}

export default Navigation;