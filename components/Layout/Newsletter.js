import React, { useState } from 'react';
import Titles from './Titles';
import Container from './Container';
import InputNewsletter from '../UserInterface/InputNewsletter';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const ButtonSubmit = styled.button`
    position:absolute;    
    width: 30px;
    border:none;
    background: none;
    top: 20px;
    right: 10px;
    cursor:pointer;
`;

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [error, saveError] = useState(true);

    const saveEmail = e => {
        e.preventDefault();
        if (email.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
    }

    const element = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <Container>
            <Titles Caption='NEWSLETTER' Heading='SUSCRIBITE' Bajada='Y enterate de todas las novedades' />
            <form onSubmit={saveEmail} css={css`width:100%;max-width: 600px;position:relative`}>
                <InputNewsletter placeholder='Ingresa tu email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <ButtonSubmit type="submit" onSubmit={saveEmail}>
                    {element}
                </ButtonSubmit>
                {error ? null : 'Se ha suscripto correctamente al Newsletter'}
            </form>
        </Container>
    );
}

export default Newsletter;