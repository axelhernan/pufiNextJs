import React from 'react';
import Titles from './Titles';
import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const InstagramContainer = styled.ul`
    margin: 0 auto;
    text-align: center;
    width:80%;
    display:block;

    @media screen and (min-width:768px){
        width:610px;
    }
`;

const InstagramLink = styled.a`
    &:hover{
        cursor:pointer;
    }
`;

const InstagramList = styled.li`
    display:inline-block;
    margin:1px;

    &:hover{
        opacity:0.5;
        transition:0.7s ease-in;
    }
`;

const PostsInstagram = [
    { id: 1, images: '/static/images/instagram/espufi-instagram-first.jpg' },
    { id: 2, images: '/static/images/instagram/espufi-instagram-second.jpg' },
    { id: 3, images: '/static/images/instagram/espufi-instagram-third.jpg' },
    { id: 4, images: '/static/images/instagram/espufi-instagram-four.jpg' },
    { id: 5, images: '/static/images/instagram/espufi-instagram-five.jpg' },
    { id: 6, images: '/static/images/instagram/espufi-instagram-six.jpg' }
]


const Instagram = () => {
    return (
        <>
            <Titles Caption='INSTAGRAM' Heading='#ESPUFI' />
            <InstagramContainer>
                {
                    PostsInstagram.map((post) => (
                        <InstagramList key={post.id}>
                            <InstagramLink href='http://instagram.com' alt='hola'>
                                <Image src={post.images} width='200' height='200' css={css`margin:0!important;padding:0`} />
                            </InstagramLink>
                        </InstagramList>
                    ))
                }
            </InstagramContainer>
        </>
    );
}

export default Instagram;