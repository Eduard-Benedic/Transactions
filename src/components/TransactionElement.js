import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoundSign, faMinus } from '@fortawesome/free-solid-svg-icons'



const TransactionRow = styled.tr`
     font-family: 'Roboto', sans-serif;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     color: black;

     @media (max-width: 768px) {
          grid-template-columns: 1fr;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid #c7c7c7;
     }
`;

const TransactionCol = styled.td`
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: ${props => props.textRight ? "right" : props.textLeft ? 'left' : "center" };
    font-weight: ${props => props.bold ? "bold" : 'regular'};
    @media (max-width: 768px) {
          text-align: left;
          padding-bottom: 10px;
          padding-top: 10px;
     }
`;

const TransactionAmount = styled.span`
    color: ${props => props.highlight ? "#3ca9f5" : "inherit"};
`;


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
               <TransactionCol textLeft bold> {description} </TransactionCol>
               <TransactionCol> {category_title} </TransactionCol>
               <TransactionCol> {date} </TransactionCol>
               <TransactionCol textRight>
                    {isPositive(value)
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