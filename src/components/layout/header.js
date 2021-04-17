import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    
`;

const StyledLogo = styled.div`

`

const StyledNav= styled.nav`
    display: flex;
`

const HeaderTag = () => {
    return (
        <StyledHeader>
            <StyledLogo>
                BUD
            </StyledLogo>
            <StyledNav>
                <ul>
                    <li>
                        <a href="/"> Products </a>
                    </li>
                </ul>
                
            </StyledNav>

        </StyledHeader>
    )
}


export default HeaderTag