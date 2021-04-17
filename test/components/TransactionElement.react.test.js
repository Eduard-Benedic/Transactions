
import React from 'react'
import {render} from '@testing-library/react'
import TransactionElement from '../../src/components/TransactionElement'





describe('TransactionElement', () => {

    const transactionData = {
        id: "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
        date: "2018-06-30",
        description: "Tesco",
        category_title: "Groceries",
        amount: {
            value: 57.21,
            currency_iso: "GBP"
        }
    }

    test('Mount TransactionElement and check inner functionality', () => {
        const table= document.createElement('tbody')
        render(<TransactionElement transactionData={transactionData} />, {
            container: document.body.appendChild(table)
        })
    })

    test('TransactionAmount is highlighted when is positive', () => {
        // To avoid :  Warning: validateDOMNesting(...): create the tablebody and append the tr to it
        const table = document.createElement('tbody')
        const { container } = render(<TransactionElement transactionData={transactionData} />, {
            container: document.body.appendChild(table)
        })

        const amountEl = container.querySelector('span');
        const amountElementStyle = window.getComputedStyle(amountEl) 

        expect(amountElementStyle.fontWeight).toBe('bold')
        expect(amountElementStyle.color).toBe("rgb(60, 169, 245)")
    })

    
})




    
    
