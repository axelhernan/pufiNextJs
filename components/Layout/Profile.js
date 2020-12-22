import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ArrowDown = <FontAwesomeIcon icon={faChevronDown} />

const ListContainer = styled.ul`
    color:var(--white);
    display:flex;
    margin: 3rem 0;
        
    li{
        display:inline-block;
        padding-right: 1rem;
        border-right:1px solid var(--grey);

        &:hover{
            opacity:.5;
            cursor:pointer;
            transition:.6s ease-in;
        }

        &:last-child{
            padding-left:1rem;
            border:none;
        }
    }

    @media screen and (min-width:992px){
        padding:0
    }

`;

const Profile = () => {
    return ( 
        <ListContainer>
            <li>
                <a>
                    MI CUENTA <span css={css`width:10px;display:inline-block`}>{ArrowDown}</span>
                </a>
            </li>
            <li>
                <a>
                    MI COMPRA
                </a>
            </li>
        </ListContainer>
     );
}
 
export default Profile;