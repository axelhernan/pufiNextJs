import React, { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Button from '../UserInterface/Button';


const ColumsData = [
    { id: 1, image: '/static/images/products/pufi-image-rain.jpg', product: '/static/images/products/pufi-product-rain.png', width: '94px', height: '94px', classname: 'productDetails', nameProduct:'Pufi Rain' },
    { id: 2, image: '/static/images/products/pufi-image-puff.jpg', product: '/static/images/products/pufi-product-puff.png', width: '138px', height: '89px', classname: 'productDetailsInverse', nameProduct:'Pufi Puff' },
    { id: 3, image: '/static/images/products/pufi-image-cart.jpg', product: '/static/images/products/pufi-product-cart.png', width: '139px', height: '107px', classname: 'productDetails', nameProduct:'Pufi Cart' },
    { id: 4, image: '/static/images/products/pufi-image-nap.jpg', product: '/static/images/products/pufi-product-nap.png', width: '79px', height: '101px', classname: 'productDetailsInverse', nameProduct:'Pufi Nap' }
]

const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column-reverse;

    &:nth-of-type{
        direction: inherit;
    }

    @media (min-width:768px){
        display:grid;
        grid-auto-flow: dense;    
        grid-template-columns:1fr 1fr;

        &:nth-of-type(odd){
            direction: rtl;
        }
    }
`;

const BgProduct = styled.a`
    display:flex;
    height:70vh;
    align-items:center;
    justify-content:center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    

    &:hover ${Button} {
        display:block;
      }

    ${Button}{
        display:none;
    }
`;

const ProductDetails = styled.div`
    text-align: center;
    display:table;
    padding:4rem 0;
    margin:auto;

    @media (min-width:768px){
        padding:inherit;
    }
`;

const ProductLink = styled.a`
    text-transform:uppercase;
    letter-spacing: 0.2rem;
    font-size:1.2rem;
    margin:10px 0;
    display:block;
    color:var(--black);

    &:before{
        content:">";
        margin-right:5px;
    }

    &:hover{
        color:var(--grey);
        transition:.5s ease-in-out;
    }
`;


const Products = () => {

    return (
        <>
            {
                ColumsData.map((data) =>
                    <ContainerProducts className="containerProducts" key={data.id}>
                        <BgProduct className={data.classname} css={css` background-image: url(${data.image});
                        &:hover{
                            cursor:pointer;
                            background-image: linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.7) ), url(${data.image});
                            transition: .5s ease-in;
                        }
                        `} >
                            <Button className="showButton">shop</Button>
                        </BgProduct>
                        <ProductDetails>
                            <div css={css`
                                display:table-cell; vertical-align:middle;
                            `}>
                                <Image css={css`display:block`} src={data.product} width={data.width} height={data.height} />
                                <h3>{data.nameProduct}</h3>
                                <hr css={css`width:40px;display:block`} />
                                <p css={css`width:50%;margin:0 auto;padding:1.2rem 0`}>Descripción del producto. Este es un texto simulado</p>
                                <ProductLink href='http://google.com'>
                                    Ver mas
                                </ProductLink>
                            </div>
                        </ProductDetails>
                    </ContainerProducts>
                )
            }
        </>
    );
}

export default Products;