import { getOrders, getProductions, getMinerals } from "./database.js"

const orders = getOrders()
const productions = getProductions()
const minerals = getMinerals()

// loop through the array of orders that were placed by the selected governor, and count the number of times each mineral was purchased.
// return an object of updated mineral counts (i.e. purchasedMineralsCounter = {"iron": 2, "chromium": 0, .....})
const tallyMineralCounts = (orderMatchesArray) => {
    const purchasedMineralsCounter = {}
    for (const mineral of minerals) {
        purchasedMineralsCounter[`${mineral.mineral}`] = 0
    }
    console.log("purchasedMineralsCounter: ", purchasedMineralsCounter)

    for (const orderMatch of orderMatchesArray) {
        const productionMatch = productions.find(
            (production) =>
                orderMatch.facilityId === production.facilityId &&
                orderMatch.mineralId === production.mineralId
        )

        console.log("productionMatch is: ", productionMatch)

        const mineralMatch = minerals.find(
            (mineral) => productionMatch.mineralId === mineral.id
        )

        purchasedMineralsCounter[`${mineralMatch.mineral}`]++
    }

    console.log("updated purchasedMineralsCounter: ", purchasedMineralsCounter)

    return purchasedMineralsCounter
}

// create an array of mineral names (which are the keys of the purchasedMineralsCounter object)
// use the array of keys to loop through the object.
// if the counter value for a key != 0 (i.e. the mineral has been purchased by the selected governor), then create an html <article> for it and append it onto the html string
// return the completed html string
const UpdateResourceList = (talliedMineralsObject) => {
    const mineralNames = Object.keys(talliedMineralsObject)
    let html = ""
    for (const mineral of mineralNames) {
        if (talliedMineralsObject[mineral] != 0) {
            html += `
                <article class="available-resource">
                ${talliedMineralsObject[mineral]} tons of ${mineral}
                </article>
            `
        }
    }
    return html
}

// when a governor is selected, display the list of minerals that are currently available to that colony. the available minerals can be obtained from the orders array, where governorId = selected governor.id
// first, find the order matches for the selected governor and store them in an array
// second, tally the mineral counts for all of the order matches
// last, generate html for each mineral whose count != 0
const handleGovernorSelection = (changeEvent) => {
    if (changeEvent.target.id === "governorDropdown") {
        const selectedGovernorId = parseInt(changeEvent.target.value)
        console.log("selectedGovernorId", selectedGovernorId)

        const orderMatches = orders.filter(
            (order) => order.governorId === selectedGovernorId
        )
        console.log("orderMatches array: ", orderMatches)

        const currentColonyResources = tallyMineralCounts(orderMatches)

        const resourcesEl = document.querySelector("#resources-log")
        const resourcesHtml = UpdateResourceList(currentColonyResources)
        resourcesEl.innerHTML = resourcesHtml
    }
}

document.addEventListener("change", handleGovernorSelection)

export const ResourcesList = () => {
    return `<section id="resources-log"></section>`
}
