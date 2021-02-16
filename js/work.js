
// Gets from html
const payBalanceField = document.getElementById('pay-balance')
const workBtn = document.getElementById("work-btn")
const bankBtn = document.getElementById("bank-btn")
const repayBtn = document.getElementById("repay-loan-btn")
let payBalance = 0

repayBtn.hidden = true
updatePayString()

/*
* Updates the text field for the payBalance*/
function updatePayString(){
    payBalanceField.innerText = payBalance + " Kr."
}

/*
* Updates the payBalance to the given value from parameter*/
function updatePayBalance(newBalance){
    payBalance = newBalance
}

/*
* Returns the payBalance*/
function getPayBalance(){
    return payBalance
}

/*
* Show the repay loan button*/
function showRepayBtn(){
    repayBtn.hidden = false
}

/*
* If bank button is clicked, then repay 10% of payBalance to the loan (if the user has loan),
* and rest of the payment is moved to the bank balance*/
bankBtn.addEventListener('click', function () {
    if (hasLoan()){
        repayLoan(payBalance*0.1)
    }
    bankBalance += payBalance
    payBalance = 0
    updateBankStrings()
    updatePayString()
})

/*
* When work button is clicked, the pay balance is increased with 100*/
workBtn.addEventListener('click', function () {
    payBalance += 100
    updatePayString()
})

/*
* If the user click on repay loan button, then the pay balance will go for pay back the loan with the pay balance.*/
repayBtn.addEventListener('click', function () {
    if (payBalance > bankLoan){
        payBalance -= bankLoan
        bankLoan = 0
    } else{
        bankLoan -= payBalance
        payBalance = 0
    }
    updatePayString()
    updateBankStrings()
})