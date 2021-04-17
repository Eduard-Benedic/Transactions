

import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import TransactionElement from './TransactionElement'
import { fetchBankTransactions } from '../api/TransactionAPI'


const TransactionsTable = styled.table`
    width: 100%;
`;


function TransactionTable() {
     const [error, setError] = useState(null);
     const [transactions, setTransactions] = useState([]);

    useEffect(async () => {
         
          await fetchBankTransactions().then((data) => {
               setTransactions(data.transactions);
          })
     }, [])

     if (error) {
          return <div>Error sorry,</div>;  
     } else {
          return (
               <TransactionsTable>
                    <tbody>
                         {transactions.map(transaction => {
                              return <TransactionElement key={transaction.id}
                                                            transactionData={transaction} />
                              })
                         }
                    </tbody>
               </TransactionsTable>
          );
     }
}


export default TransactionTable