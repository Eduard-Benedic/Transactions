// Filter transactions from lowest to highest and impose a limit of max

export const filterLowToHigh = (transactionA, transactionB) => {
    const amountA = transactionA.amount.value;
    const amountB = transactionB.amount.value;
    return amountA - amountB;
}

export const filterTransactions = (transactions, max) => {
    if (max > transactions.length) return transactions.sort(filterLowToHigh)
    return transactions.sort(filterLowToHigh).slice(0, max)
}