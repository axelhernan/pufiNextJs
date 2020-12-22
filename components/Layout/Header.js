import React from 'react';
import styled from '@emotion/styled';
import Logo from '../UserInterface/Logo';
import Navigation from './Navigation';
import Profile from './Profile';
import Burger from '../UserInterface/Burger';


const HeaderContent = styled.header`
    max-width:1200px;
    width:95%;
    margin:0 auto;
    position:absolute;
    left:0;
    right:0;
    top:15px;
    margin-left:auto;
    margin-right:auto;
    z-index:10000;
    display:flex;
    align-items: center;
    justify-content:space-between;
`;

const NavBar = styled.div`
    display:none;
    @media screen and (min-width:992px){
        display:flex;
        align-items: center;
        justify-content:space-between;
    }
`;

const Header = () => {
    return (
        <HeaderContent>
            <Logo ColourLogo={false} />
            <NavBar>
                <Navigation />
            </NavBar>
            <NavBar>
                <Profile />
            </NavBar>
            <Burger />
        </HeaderContent>
    );
}

export default Header;