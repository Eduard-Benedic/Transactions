

export const fetchBankTransactions = function () {
    return new Promise((resolve, reject) => {
        fetch('http://www.mocky.io/v2/5c62e7c33000004a00019b05')
            .then(res => resolve(res.json()))
    })
}