import React from 'react'
import GlobalStyle from './gloablStyles'
import styled from 'styled-components'
import Header from './components/layout/Header'


import TransactionTable from './components/TransactionTable'


const StyledWrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 35px 25px;
    box-shadow: 2px 1px 2px rgba(0,0,0,.2);
    margin-bottom: 60px;
`;

const StyledBackground = styled.div`
    background-color: #f4f4f4;
    padding: 65px 25px;
    height: 100%;
`;

function App() {
     return (
         <div className="App">
                <GlobalStyle />
               <Header />
                <StyledBackground>
                        <StyledWrapper>
                            <TransactionTable />
                        </StyledWrapper>
                </StyledBackground>

            </div>
     );
}

export default App;