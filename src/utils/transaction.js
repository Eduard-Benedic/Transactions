// Filter transactions from lowest to highest and impose a limit of max

export const filterLowToHigh = (transactionA, transactionB) => {
    const a = transactionA.amount.value;
    const b = transactionB.amount.value;
    return a - b;
}

export const filterTransactions = (transactionData, max) => {
    if ( max > transactionData.length  ) return transactionData.sort(filterLowToHigh)
    return transactionData.sort(filterLowToHigh).slice(0, max)

}