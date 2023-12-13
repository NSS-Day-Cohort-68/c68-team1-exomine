import { getOrders, getMinerals, getTransientState } from "./database.js"

const minerals = getMinerals()

const tallyMineralCounts = (orderMatchesArray) => {
    const purchasedMineralsCounter = {}
    for (const mineral of minerals) {
        purchasedMineralsCounter[`${mineral.mineral}`] = 0
    }

    for (const orderMatch of orderMatchesArray) {
        const mineralMatch = minerals.find(
            (mineral) => orderMatch.mineralId === mineral.id
        )

        purchasedMineralsCounter[`${mineralMatch.mineral}`]++
    }

    return purchasedMineralsCounter
}

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

const RenderResourcesInnerHtml = (governorIdInDropdown) => {
    const orders = getOrders()
    const orderMatches = orders.filter(
        (order) => order.governorId === governorIdInDropdown
    )
    const currentColonyResources = tallyMineralCounts(orderMatches)

    const resourcesEl = document.querySelector("#resources-log")
    resourcesEl.innerHTML = UpdateResourceList(currentColonyResources)
}

const handleGovernorSelection = (changeEvent) => {
    if (changeEvent.target.id === "governorDropdown") {
        const selectedGovernorId = parseInt(changeEvent.target.value)
        RenderResourcesInnerHtml(selectedGovernorId)
    }
}

const handlePurchaseEvent = () => {
    const currenTransientState = getTransientState()
    const currentGovernorId = currenTransientState.governorId
    RenderResourcesInnerHtml(currentGovernorId)
}

document.addEventListener("change", handleGovernorSelection)
document.addEventListener("stateChanged", handlePurchaseEvent)

export const ResourcesList = () => {
    return `<section id="resources-log"></section>`
}
