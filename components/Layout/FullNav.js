import React from 'react';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import Profile from './Profile'

const MobileMenu = styled.div`
  list-style: none;
  display: ${({ open }) => open ? 'flex' : 'none'};
  justify-content:center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background: ${({ open }) => open ? 'black' : 'transparent'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

  @media screen and (min-width:992px){
      display:none;
  }
`;

const ContainerMenuMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:80%;
`;

const FullNav = ({ open }) => {
    return (
        <MobileMenu open={open}>
            <ContainerMenuMobile>
                <Navigation />
                <Profile />
            </ContainerMenuMobile>
        </MobileMenu>
    )
}

export default FullNav