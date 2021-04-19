import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoundSign, faMinus } from '@fortawesome/free-solid-svg-icons'


TransactionElement.propTypes = {
    transactionData: PropTypes.shape({
        category_title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.date,
        amount: PropTypes.shape({
            value: PropTypes.number,
            currency_iso: PropTypes.string
        })
    }).isRequired
}
  

const TransactionRow = styled.tr`
     font-family: 'Roboto', sans-serif;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     color: #464646;
`;

const TransactionCol = styled.td`
     text-align: ${props => props.textRight ? "right" : props.textLeft ? 'left' : "center" };
`;

const TransactionDate = styled.p`
     text-align: center;
`;

const TransactionAmount = styled.span`
    color: ${props => props.highlight ? "#3ca9f5" : "inherit"};
    font-weight: bold;

`;


function TransactionElement({ transactionData }) {
     const ICON_NAMES = {
          MINUS: 'minus',
          POUND: 'pound'
     }
     const convertTextToIcon = (currencyName) => {
               switch (currencyName) {
                    case 'minus':
                         return faMinus
                    case 'GBP':
                         return faPoundSign
               }
     }
     const isPositive = (number) => {
          if (Math.sign(number) == 1) return true
          return false
     }
     
      const makePositive = (number) => {
          return Math.abs(number)
     }
     
     const { category_title, description, date, amount: { value, currency_iso } } = transactionData

     return (
          <TransactionRow data-testid="transaction">
               <TransactionCol textLeft> {description} </TransactionCol>
               <TransactionCol> {category_title} </TransactionCol>
               <TransactionCol>
                    <TransactionDate>
                         {date}
                    </TransactionDate>
               </TransactionCol>
               <TransactionCol textRight>
                    {    isPositive(value)
                         ?    <TransactionAmount highlight>
                                   <FontAwesomeIcon icon={convertTextToIcon(currency_iso)} size="sm" /> {value}
                              </TransactionAmount>
                         :    <TransactionAmount>
                                   <FontAwesomeIcon icon={convertTextToIcon(ICON_NAMES.MINUS)} size="xs" /> &nbsp;
                                   <FontAwesomeIcon size="sm" icon={convertTextToIcon(currency_iso)} /> 
                                   {makePositive(value)}
                              </TransactionAmount>
                    }
                    
               </TransactionCol>
          </TransactionRow>
     )
}


export default TransactionElement