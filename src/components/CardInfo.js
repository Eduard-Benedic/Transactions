import React from 'react'
import styled from 'styled-components'




const Wrapper = styled.div`

    padding-bottom: 35px;
    box-shadow: 2px 1px 1px rgba(0,0,0,.2);
    margin-bottom: 35px;
`


const MainTitle = styled.h2`
    color: black;
    font-size: 2rem;
    margin-bottom: 40px;
    position: relative;

    &::after {
        position: absolute;
        content: ' ';
        height: 2px;
        width: 60px;
        background-color: #3ca9f5;
        top: 100%;
        margin-top: 10px;
        left: 0;
    }
`
const InfoParagraph = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: 2px;
    color: #464646;
    font-weight: bold;
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 25px;

    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
     }
`

const InfoTitle = styled.h3`
    font-size: 1.1rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 25px;
    font-weight: 300;
    width: 200px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        margin-bottom: 10px;
    }
`

const CardInfo = ({providerData: {title, account_number, sort_code, description}}) => {
    return (
        <Wrapper>
            <MainTitle>Card Info</MainTitle>
            <InfoContainer>
                <InfoTitle> Provider: </InfoTitle><InfoParagraph>{ title}</InfoParagraph>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>  Account Number: </InfoTitle><InfoParagraph>{ account_number}</InfoParagraph>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>  Sort code: </InfoTitle><InfoParagraph>{ sort_code }</InfoParagraph>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>  Description: </InfoTitle><InfoParagraph>{ description }</InfoParagraph>
            </InfoContainer>
        </Wrapper>
      

    )
}


export default CardInfo