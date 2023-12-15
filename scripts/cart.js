//add order button
//change event
//make selected mineral appear in the cart
import { setMineral } from "./database.js"
import { purchaseMineral } from "./database.js"

export const makePurchase = () => {
  document.addEventListener("click", handlePurchaseSubmisssionClick)
  return `
  <h2>Space Cart</h2>
    <div id="currentmineral"></div>
    <button id='makepurchase'>Make Purchase</button>
    `
}

const handlePurchaseSubmisssionClick = (clickEvent) => {
  if (clickEvent.target.id === "makepurchase") {
    purchaseMineral()
    document.getElementById("currentmineral").innerHTML = ``
  }
}

const handleMineralChoice = (changeEvent) => {
  if (changeEvent.target.name === "minerals") {
    const convertedtoInteger = parseInt(changeEvent.target.value)
    setMineral(convertedtoInteger)
    document.getElementById(
      "currentmineral"
    ).innerHTML = `1 ton of ${changeEvent.target.dataset.type}`
  }

  //update inner HTML of cart to display selected mineral
}

document.addEventListener("change", handleMineralChoice)
