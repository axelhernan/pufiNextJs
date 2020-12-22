import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Button from '../UserInterface/Button'

const Item = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content:center;
`;

const ImagesSlider = [
    {id:1, image:'/static/images/slider/pufi-slider-image.jpg'},
    {id:2, image:'/static/images/slider/pufi-slider-image-secondary.jpg'},
    {id:3, image:'/static/images/slider/pufi-slider-image.jpg'}
]

const Slider = () => {
    return (
        <Carousel itemsToShow={1} showArrows={false}>
            {ImagesSlider.map((images) =>(
                <Item key={images.id} css={css`background:linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%), url(${images.image}) center center / cover no-repeat`}>
                    <h1 css={css`color:var(--white);text-align:center;padding:0 1rem;`}>
                        ESTÁR CÓMODO NUNCA 
                        FUE TAN FÁCIL.
                    </h1>
                    <Button>Shop</Button>
                </Item>
            ))}
        </Carousel>
    );
}

export default Slider;

