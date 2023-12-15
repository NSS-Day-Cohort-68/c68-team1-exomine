import {
    getFacilities,
    getMinerals,
    getProductions,
    getTransientState,
    setFacility
} from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const productions = getProductions()

const localMineralAmounts = {}
for (const mineral of minerals) {
    localMineralAmounts[`${mineral.mineral}`] = 0
}

// Create HTML for FACILITIES MENU
export const FacilitiesChoices = () => {
    // initial HTML
    let facilitiesHTML = `
                <select id="facilitiesDropdown" class='dropdown'>
                    <option value="0">Choose a facility
                </option>
                `

    // populate the dropdown with active facilities
    for (const facility of facilities) {
        if (facility.isActive) {
            facilitiesHTML += `
                    <option class="facility" value="${facility.id}">${facility.name}</option>`
        }
    }
    // close the dropdown HTML element tag
    facilitiesHTML += `</select>`

    // hold onto the final infor for the dropdown
    return facilitiesHTML
}

// this function compares facilityValue with production.facilityID
const FacilitiesRadios = (facilityValue) => {
    // find mineralID and facilityID of all PRODUCTIONS
    let facilityRadiosHTML = ""

    for (const production of productions) {
        if (facilityValue === production.facilityId) {
            let mineralAmount = production.mineralAmount
            for (const mineral of minerals) {
                if (mineral.id === production.mineralId) {
                    // debugger
                    const currentMineralAmount = mineralAmount + localMineralAmounts[mineral.mineral]
                    facilityRadiosHTML += `
                    <div class="minerals">
                        <input type="radio" name="minerals" value="${mineral.id}" data-type="${mineral.mineral}" />${currentMineralAmount} tons of ${mineral.mineral}
                    </div>`
                }
            }
        }
    }

    return facilityRadiosHTML
}


const renderRadioButtons = (chosenFacility) => {
    const facilitiesRadiosContainer = document.querySelector(".facilityRadios")
    const facilityNameContainer = document.querySelector(".facilityName")


    for (const facility of facilities) {
        if (chosenFacility === facility.id) {
            facilityNameContainer.innerHTML = `Facility Minerals for ${facility.name}`
        }
    }

    facilitiesRadiosContainer.innerHTML = FacilitiesRadios(chosenFacility)
}

const handleFacilityChange = (changeEvent) => {
    if (changeEvent.target.id === "facilitiesDropdown") {
        const chosenFacility = parseInt(changeEvent.target.value)
        setFacility(chosenFacility)
        renderRadioButtons(chosenFacility)

    }
}

const handleStateChange = () => {
    const state = getTransientState()
    let selectedMineral = null
    for (const mineral of minerals) {
        if (mineral.id === state.mineralId) {
            selectedMineral = mineral.mineral
        }
    }

    localMineralAmounts[selectedMineral] -= 1

    renderRadioButtons(state.facilityId)
}

document.addEventListener("change", handleFacilityChange)

document.addEventListener("stateChanged", handleStateChange)

