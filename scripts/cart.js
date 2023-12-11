//add order button
//change event
//make selected mineral appear in the cart
import { setMineral } from "./database.js"


export const makePurchase = () => {
    document.addEventListener("click", handlePurchaseSubmisssionClick)
    return `
<button id='makepurchase'>Make Purchase</button>
<div id="currentmineral"></div>`

}

const handlePurchaseSubmisssionClick = (clickEvent) => {
    if (clickEvent.target.id === "makepurchase") {
        makePurchase()
    }
}

const handleMineralChoice = (changeEvent) => {
    if (changeEvent.target.name === "mineral") {
        const convertedtoInteger = parseInt(changeEvent.target.value)
        setMineral(convertedtoInteger)
        document.getElementById("currentmineral").innerHTML = `1 ton of ${mineral.mineral} `
    }
    //update inner HTML of cart to display selected mineral 
}

document.addEventListener("change", handleMineralChoice)