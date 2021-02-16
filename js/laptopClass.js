class Laptop{
    constructor(name, price, description, featureList, imageLink) {
        this._name = name;
        this._price = price;
        this._description = description;
        this._featureList = featureList;
        this._imageLink = imageLink;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }

    get featureList() {
        return this._featureList;
    }

    get imageLink() {
        return this._imageLink;
    }
}

//Some laptops to test with
const laptopArr = [
    new Laptop("MacBook Air 13 (2020)", 12790,
        "New MacBook with 13'' screen and very shiny look",
        ["8GB Ram", "256GB SSD", "Apple M1 chip with 8‑core CPU"],
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603332211000"),

    new Laptop("Lenovo IdeaPad Duet Chromebook", 4190,
        "Light and cheap laptop ",
        ["4GB Ram", "128GB SSD", "MediaTek Helio P60T 2 GHz"],
        "https://www.komplett.no/img/p/5000/1159888.jpg"),

    new Laptop("ASUS ROG STRIX G G512LV", 15990,
        "Laptop with design from BMW Designworks Group ",
        ["16GB Ram", "512GB SSD", "Intel Core i7 (10. generasjon) 10870H / 2.2 GHz"],
        "https://www.komplett.no/img/p/1080/1166270_2.jpg"),

    new Laptop("Old used lenovo", 600,
        "Very cheap and old computer ",
        ["4MB Ram", "300GB HD", "Intel i5-3230M 2.6GHz"],
        "https://images.finncdn.no/dynamic/1600w/2021/2/vertical-0/15/7/208/141/917_1180189801.jpg")
]

// returns the laptoplist
function getLaptopList(){
    return laptopArr
}