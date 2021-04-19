import React from 'react'
import styled from 'styled-components'



const StyledHeader = styled.header`
    background-color: black;
`;

const HeaderWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;

    @media (max-width: 768px) {
         flex-direction: column;
         align-items: center;
         justify-content: center;
     }
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    color: white;
`;

const LogoTitle = styled.h1`
    font-size: 3rem;
    color: white;
`

const StyledList = styled.ul`
    display: flex;
    align-items: center;
`;

const StyledLink = styled.a`
    display: inline-block;
    padding: 0 15px;
    color: white;
    transition: all .2s linear;
    &:hover {
        color: #3ca9f5;
    }
`



const Header = () => {
    return (
        <StyledHeader>
            <HeaderWrapper>
               <LogoTitle>BUD</LogoTitle>
                <StyledNav>
                    <StyledList>
                        <li> <StyledLink href="/"> Products </StyledLink> </li>
                        <li> <StyledLink href="/"> Use-Cases</StyledLink> </li>
                        <li> <StyledLink href="/"> Insights </StyledLink> </li>
                    </StyledList>
                </StyledNav>
            </HeaderWrapper>
        </StyledHeader>
    )
}


export default Header