
// Gets from html
const laptopSelect = document.getElementById('laptop-options')
const laptopFeaturesField = document.getElementById('laptop-features')
const laptopImage = document.getElementById('laptop-image')
const laptopTitleField = document.getElementById('laptop-title')
const laptopDescriptionField = document.getElementById('laptop-description')
const laptopPriceField = document.getElementById('laptop-price')
const laptopBuyBtn = document.getElementById('buy-laptop-btn')
const laptopBuyHeadingField = document.getElementById('buy-laptop-heading')
const laptopBuyTextField = document.getElementById('buy-laptop-text')
const buyModal = document.getElementById("buy-modal");
const buyBtn = document.getElementById("buy-laptop-btn");
const closeBuyModal = document.getElementById("close-buy-modal");

const laptopList = getLaptopList()
let currentLaptop = {} // current selected laptop from the list in html

laptopImage.hidden = true
laptopBuyBtn.hidden = true

/*
* Initialize the list with laptops to html*/
for (const laptop of laptopList){
    const laptopOption = document.createElement('option')
    laptopOption.innerText = laptop.name
    laptopOption.value = laptop.name
    laptopSelect.appendChild(laptopOption)
}

/*
* Returns the laptop with the given name*/
function getLaptop(name){
    return laptopList.find(laptop => laptop.name === name)
}

/*
* When user change to another/ choose a laptop
* If a laptop is selected, a laptop will be shown.
* If not, all the laptop items is hidden*/
laptopSelect.addEventListener('change', function () {
    const name = this.value // gets the current name from the laptop selected
    laptopFeaturesField.innerHTML = ""
    laptopTitleField.innerText = ""
    laptopDescriptionField.innerText = ""
    laptopPriceField.innerText = ""

    if (name === "default"){
        laptopImage.hidden = true
        laptopBuyBtn.hidden = true
        currentLaptop = {}
        return
    }

    currentLaptop = getLaptop(name)
    laptopImage.src = currentLaptop.imageLink
    laptopImage.hidden = false
    laptopTitleField.innerText = currentLaptop.name
    laptopDescriptionField.innerText = currentLaptop.description
    laptopPriceField.innerText = currentLaptop.price + " NOK"
    laptopBuyBtn.hidden = false

    const features = currentLaptop.featureList

    // Makes a list in html with all the features
    features.forEach(function (f){
        const listItem = document.createElement('li')
        listItem.innerHTML = f
        laptopFeaturesField.appendChild(listItem)
    })
})


/*
* When clicking buy computer, it will check if it is enough many in the bank.
* If enough money, the user will get a congratulation with new computer.
* It also subtract the price for the computer from the bank balance
* If not enough money, the user get a sorry message. */
laptopBuyBtn.addEventListener('click', function () {

    if (currentLaptop === {}){
        return
    }
    console.log(name)

    if (currentLaptop.price > bankBalance){
        laptopBuyHeadingField.innerText = "Sorry"
        laptopBuyTextField.innerText = "You dont have enough money in the bank to buy the computer."
    } else{
        bankBalance -= currentLaptop.price
        laptopBuyHeadingField.innerText = "Congratulations"
        laptopBuyTextField.innerText = "You have now bought a " + currentLaptop.name
        updateBankStrings()
    }
})

// When the user clicks the bay button, open the modal
buyBtn.onclick = function () {
    buyModal.style.display = "block";
}

// When the user clicks on x, close the modal
closeBuyModal.onclick = function () {
    buyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === buyModal) {
        buyModal.style.display = "none";
    }
}