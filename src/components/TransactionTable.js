

import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import TransactionElement from './TransactionElement'
import  fetchTransactionsAPI  from '../services/transaction'
import { filterTransactions } from '../utils/transaction'
import CardInfo from './CardInfo'

const TransactionsTable = styled.table`
    width: 100%;

`;

const TableTitle = styled.h2`
    font-size: 1.4rem;
    padding-top: 30px;
    margin-bottom: 30px;
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


function TransactionTable() {
    const [isFetching, setFetchingState] = useState(true)
    const [cardProvider, setCardProvider] = useState({})
    const [transactions, setTransactions] = useState([]);
       

    const loadTransactions =  async () => {
        const { transactions, provider } = await fetchTransactionsAPI();
        setTransactions(filterTransactions(transactions, 10))
        setCardProvider(provider)
    }

    useEffect(() => {
        if (isFetching) loadTransactions()
        return setFetchingState(false)
     }, [])

    if (isFetching) {
            return <div>Loading...</div>
    } else {
        return (
            <div>
                <CardInfo providerData={ cardProvider }/>
               <TableTitle>Last Transactions</TableTitle>
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                                return <TransactionElement  key={JSON.stringify(transaction.id)}
                                                                transactionData={transaction} />
                                })
                            }
                    </tbody>
                </TransactionsTable>
            </div>
       );
    }   
      
}


export default TransactionTable