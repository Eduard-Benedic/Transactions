

import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import TransactionElement from './TransactionElement'
import  fetchTransactionsAPI  from '../services/transaction'
import { filterTransactions } from '../utils/transaction'

const TransactionsTable = styled.table`
    width: 100%;
`;


function TransactionTable() {
    const [isFetching, setFetchingState] = useState(true)
    const [transactions, setTransactions] = useState([]);
       

    const loadTransactions =  async () => {
        const { transactions } = await fetchTransactionsAPI();
   
        setTransactions(filterTransactions(transactions, 10))
    }

    useEffect(() => {
        
        if (isFetching) loadTransactions()
        return setFetchingState(false)
     }, [])

    if (isFetching) {
            return <div>Loading...</div>
    } else {
        return (
            <TransactionsTable>
                 <tbody>
                   {transactions.map(transaction => {
                          console.log(transaction.id)
                           return <TransactionElement  key={JSON.stringify(transaction.id)}
                                                         transactionData={transaction} />
                           })
                      }
                 </tbody>
            </TransactionsTable>
       );
    }   
      
}


export default TransactionTable