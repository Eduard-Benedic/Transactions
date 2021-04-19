import React, { Fragment } from 'react'
import GlobalStyle from './gloablStyles'
import styled from 'styled-components'

import TransactionTable from './components/TransactionTable'


const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 35px 25px;
    border-right: 1px solid #d0d0d0;
    border-left: 1px solid #d0d0d0;
    box-shadow: 2px 1px 2px rgba(0,0,0,.2);
    margin-top: 60px;
    margin-bottom: 60px;
`;

const StyledBackground = styled.div`
    background-color: #f4f4f4;
`;

function App() {
     return (
         <div className="App">
                 <GlobalStyle />
                 <StyledBackground>
                        <StyledWrapper>
                            <TransactionTable />
                        </StyledWrapper>
                </StyledBackground>

            </div>
     );
}

export default App;