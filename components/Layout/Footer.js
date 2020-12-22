import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Logo from '../UserInterface/Logo';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FirstListFooter = [
    { id: 1, link: 'http://google.com', text: 'pufi puff' },
    { id: 2, link: 'http://google.com', text: 'pufi rain' },
    { id: 3, link: 'http://google.com', text: 'pufi cart' },
    { id: 4, link: 'http://google.com', text: 'pufi nap' }
];

const SecondListFooter = [
    { id: 1, link: 'http://google.com', text: 'CONTACTO' },
    { id: 2, link: 'http://google.com', text: 'AYUDA' },
    { id: 3, link: 'http://google.com', text: 'COMO COMPRAR' },
    { id: 4, link: 'http://google.com', text: 'TERMINOS & CONDICIONES' }
];

const ThirdListFooter = [
    { id: 1, link: 'http://google.com', image: '/static/images/data-fiscal.png', width: '30px', height: '41px' },
    { id: 2, link: 'http://google.com', image: '/static/images/pufi-garantia.png', width: '111px', height: '36px' }
];


const Twitter = <FontAwesomeIcon icon={faTwitter} /> ; 
const Facebook = <FontAwesomeIcon icon={faFacebookF} /> ; 
const Instagram = <FontAwesomeIcon icon={faInstagram} /> ; 

const FourListFooter = [
    { id: 1, link: 'http://google.com', icon: Facebook },
    { id: 2, link: 'http://google.com', icon: Twitter },
    { id: 3, link: 'http://google.com', icon: Instagram }
];



const FooterStyled = styled.div`
    width:100%;
    padding: 5rem 2rem 0;
    -webkit-box-shadow: 5px -8px 28px 1px rgba(0,0,0,0.3); 
    box-shadow: 5px -8px 28px 1px rgba(0,0,0,0.3);
    margin-top:6rem;


    text-transform:uppercase;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size:1.2rem;
`;

const FooterContainer = styled.div`

    display:block;

    @media screen and (min-width:992px){
    display:flex;
    justify-content: center;
    align-content: space-between;
    }

`;

const ListFooter = styled.div`

    padding:2rem 0;
    border-bottom: 1px solid var(--grey);
    &:last-child{
        border:none;
    }

    @media screen and (min-width:992px){
        padding: 0 4rem;
        border-right: 1px solid var(--grey);
        border-bottom:none;
    }
    @media screen and (min-width:1440px){
        padding: 0 6rem;
    }
`;

const ParagraphFooter = styled.p`
    margin-top:0px;
`;

const SocialMedia = styled.li`
    width:20px;
    margin:0px 1rem;
    display:inline-block;

    &:first-of-type{
        width:12px;
    }

    &:hover{
        cursor:pointer;
        color:var(--grey);
        transition:.9s ease-in;
    }

    
`;

const LinksFooterStyled = styled.a`    
    color: var(--black);
    &:hover{
        cursor:pointer;
        color:var(--grey);
        transition:.9s ease-in;
    }
`;

const BrandLive = styled.div`
    padding:1rem 0;
    width: 100%;
    margin-top:4rem;
    display:flex;
    align-content: space-between;
    border-top:1px solid var(--grey);

    p{
        color:var(--grey);
        display:flex;
        margin-right: auto;
    }
`;


const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>

            <Logo />
            <ListFooter>
                <ul>
                    {
                        FirstListFooter.map((firstList) => (
                            <li key={firstList.id}>
                                <LinksFooterStyled href={firstList.link}>
                                    {firstList.text}
                                </LinksFooterStyled>
                            </li>
                        ))
                    }
                </ul>
            </ListFooter>
            <ListFooter>
                <ul>
                    {
                        SecondListFooter.map((secondList) => (
                            <li key={secondList.id}>
                                <LinksFooterStyled href={secondList.link}>
                                    {secondList.text}
                                </LinksFooterStyled>
                            </li>
                        ))
                    }
                </ul>
            </ListFooter>
            <ListFooter>
                <ParagraphFooter>Seguinos en </ParagraphFooter>
                <ul>
                    {
                        ThirdListFooter.map((thirdList) => (
                            <li key={thirdList.id} css={css`display:inline-block;margin-right:1rem`}>
                                <LinksFooterStyled href={thirdList.link}>
                                    <Image src={thirdList.image} width={thirdList.width} height={thirdList.height} />
                                </LinksFooterStyled>
                            </li>
                        ))
                    }
                </ul>
            </ListFooter>
            <ListFooter>
                <div css={css`display:flex`}>
                <ParagraphFooter>Seguinos en </ParagraphFooter>
                    <ul>
                        {
                            FourListFooter.map((fourList) => (
                                <SocialMedia key={fourList.id} >
                                    <LinksFooterStyled href={fourList.link} >
                                        {fourList.icon}
                                    </LinksFooterStyled>
                                </SocialMedia>
                            ))
                        }
                    </ul>
                </div>
            </ListFooter>
            
            </FooterContainer>

            <BrandLive>
                <p>
                    Pufi Copyright 2017 - Todos los derechos reservados
                </p>
                <Image src='/static/images/logo-brandlive.svg'  width="85" height="12" css={css`margin-left: auto; display:flex!important`}/> 
            </BrandLive>
        </FooterStyled>
    );
}

export default Footer;