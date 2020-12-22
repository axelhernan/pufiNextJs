import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer';
import styled from '@emotion/styled';


const AxelValdez = styled.div`
    background:var(--black);
    font-size:1.2rem;
    padding:1rem;
    text-align:center;
    color:var(--white);
`;

const Layout = props => {
    return (
        <>
            <Global
                styles={css`
                    :root{
                        --grey: #adadad;
                        --black: #000000;
                        --white: #ffffff;
                    }

                    html{
                        font-size:62.5%;
                        box-sizing:border-box;
                    }

                    *, *:before, *:after{
                        box-sizing:inherit;
                    }

                    body{
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'Open Sans', sans-serif;
                    }

                    h1, h2 {
                        margin: 0 0 2rem 0;
                        line-height:1.5;
                        font-family: 'Open Sans', sans-serif;
                        font-weight:100;
                    }

                    h1{
                        font-size:4rem;
                        @media screen and (min-width:768px){
                            font-size:6rem;
                        }
                    }

                    h3{
                        font-size:2rem;
                        font-family: 'Open Sans', sans-serif;
                        font-weight:100;
                    }

                    ul {
                        list-style:none;
                        margin: 0;
                        padding: 0;
                        font-family: 'Nunito', sans-serif;
                    }

                    a {
                        text-decoration: none;                        
                    }

                    img {
                        max-width: 100%;
                    }
                `} />

            <Head>
                <title>Pufi - Landing Page</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Open+Sans:ital,wght@0,300;1,400&display=swap" rel="stylesheet" />
                <link href="/static/css/main.css" rel="stylesheet" /> 
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
        <Footer />
        <AxelValdez>Axel Hernan Valdez @ axelhernan on github</AxelValdez>
        </>
    );
}

export default Layout;