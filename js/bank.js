
// Gets from html
const confirmLoanBtn = document.getElementById("confirm-loan-modal-btn");
const inputLoan = document.getElementById("input-loan")
const loanMsg = document.getElementById("loan-msg")
const bankLoanStr = document.getElementById('bank-loan')
const bankLoanBalanceStr = document.getElementById('bank-loan-value')
const bankBalanceStr = document.getElementById('bank-balance')
const loanModal = document.getElementById("loan-modal");
const getLoanBtn = document.getElementById("loan_btn");
const closeLoanModal = document.getElementById("close-loan-modal");

let bankBalance = 1000 // Starting with 1000, for easier to test the functionality
let bankLoan = 0

bankBalanceStr.innerText = bankBalance + " Kr."

/*
* Returns true if the loan is not zero, else return false*/
function hasLoan(){
    return bankLoan !== 0
}

/*
* Repays the loan with the given value as parameter.
* If the given value is bigger than the loan, the rest is placed back to payBalance*/
function repayLoan(repaySum){
    bankLoan -= repaySum
    updatePayBalance(getPayBalance() - repaySum)

    if (bankLoan < 0){
        updatePayBalance(getPayBalance() + bankLoan*-1)
        bankLoan = 0
    }
}

/*
* Updates the string fields at the html page based on the values here in js*/
function updateBankStrings() {
    bankLoanStr.innerText = ""
    bankLoanBalanceStr.innerText = ""
    if (hasLoan()){
        showRepayBtn()
        bankLoanBalanceStr.innerText =  + bankLoan + " Kr."
        bankLoanStr.innerText = "Outstanding loan: "
    }
    bankBalanceStr.innerText = bankBalance + " Kr."
}

/*
* When clicking on the button for get loan, it will try to take a loan if possible.
* If not, it returns a description for the reason that is not possible. */
confirmLoanBtn.addEventListener('click', function () {
    let number = parseInt(inputLoan.value)

    if (number < 0){
        loanMsg.innerText = "The loan can not be negative"
    } else if (bankLoan > 0) {
        loanMsg.innerText = "You must pay back the loan you have, before getting another loan."
    } else if (number > bankBalance * 2) {
        loanMsg.innerText = "Max loan you can take is " + (bankBalance * 2) + " Kr."
    } else {
        bankLoan += number
        bankBalance += number
        loanMsg.innerText = "The loan is taken."
        updateBankStrings()
    }
})

// When the user clicks the get loan button, open the modal
getLoanBtn.onclick = function () {
    loanModal.style.display = "block";
}


// When the user clicks on x, close the modal
closeLoanModal.onclick = function () {
    loanMsg.innerText = ""
    inputLoan.value = ""
    loanModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === loanModal) {
        loanMsg.innerText = ""
        loanModal.style.display = "none";
    }
}