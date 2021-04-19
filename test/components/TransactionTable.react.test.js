

import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import {filterTransactions} from '../../src/utils/transaction'
import TransactionTable from '../../src/components/TransactionTable'


jest.mock('../../src/services/transaction.js')


afterEach(cleanup)


describe('TransactionTable Component', () => {

    test('Fetches transactions from API and renders them on mount', async () => {
        const { getAllByTestId } = render(<TransactionTable />)
        await waitFor(() => {
            expect( getAllByTestId('transaction')).toHaveLength(2)
        })
    })

    test('Filtering the transactions from low to high', () => {
        const fakeTransactions = {
            id: "0eb7acfd6fa3449676947c9521311cfce618bf9129ac5ac07ba30c76843e0f65fddb",
            provider: {
                title: "Monzo",
                account_number: "12345678",
                sort_code: "12-34-56",
                description: "Current Account"
            },
                balance: {
                amount: 1250.32,
                currency_iso: "GBP"
            },
            transactions: [
                {
                    id: "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
                    date: "2018-06-30",
                    description: "Tesco",
                    category_title: "Groceries",
                    amount: {
                        value:510.55,
                        currency_iso: "GBP"
                    }
                },
                {
                    id: "dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc",
                    date: "2018-06-22",
                    description: "Max Mustermann",
                    category_title: "Income",
                    amount: {
                        value: -57.21,
                        currency_iso: "GBP"
                    }
                }
            ]
        };

        const transactionAmount = fakeTransactions.transactions.map((transaction) => {
            const { amount: {value} } = transaction
            return { amount: { value } }
        })

        expect(filterTransactions(transactionAmount)).toEqual([
            { amount: { value: -57.21 } },
            { amount: { value: 510.55 } }]
        );
    })

})