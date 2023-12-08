import {
    getFacilities,
    getMinerals, 
    getProductions } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const productions = getProductions()

// Create HTML for FACILITIES MENU
export const FacilitiesChoices = () => {
    let facilitiesHTML = `
                <select id="facilitiesDropdown">
                    <option value="0">Choose a facility
                </option>
                `

    for (const facility of facilities) {
        if (facility.isActive) {
            facilitiesHTML += `
                    <option class="facility" value="${facility.id}">${facility.name}</option>`
        }
    }
    facilitiesHTML += `</select>`

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
                    facilityRadiosHTML += `
                    <div class="minerals">
                        <input type="radio" name="minerals" value="${mineral.id}" />${mineralAmount} tons of ${mineral.mineral}
                    </div>`
                }
            }
        }
    }
    
    return facilityRadiosHTML
}

const handleFacilityChange = (changeEvent) => {

    const facilitiesRadiosContainer = document.querySelector(".facilityRadios")
    
    if (changeEvent.target.id === "facilitiesDropdown") {

        const facilityNameContainer = document.querySelector(".facilityName")

        const chosenFacility = parseInt(changeEvent.target.value)

        for (const facility of facilities) {
            if (chosenFacility === facility.id) {
                facilityNameContainer.innerHTML = `Facility Minerals for ${facility.name}`
            }
        }

        facilitiesRadiosContainer.innerHTML = FacilitiesRadios(chosenFacility)
    }
} 

document.addEventListener("change", handleFacilityChange)










// function to find matches of FACILITIES AND PRODUCTIONS


// function to find matches of all FACILITIES AND MINERALS via PRODUCTIONS


// Facilities HTML injection
export const FacilitiesOptions = () => {
    
    let FacilitiesHTML = `<h2>Facilities Minerals</h2>`

    

    const productionMatches = productions.filter(
        (production) => {parseInt(production.facilityId) = parseInt(/*facilities.Id*/ 1)
            return `
                    <div class="minerals">
                        <input
                            type="radio"
                            name="mineral"
                            value="${minerals.id}"
                            />${minerals.amount} tons of ${minerals.name}
                    </div>`
        }
    )

    FacilitiesHTML += productionMatches.join("")
}

// Function to iterate through all PRODUCTIONS to find matches against MINERALS





// display current facilities minerals and amounts



// radio buttons for minerals



// change event facility selection










// export const findFacilityProductionMatch = (allFacilities, allProductions) => { 
    
//     const facilityProductionMatchesArray = allFacilities.filter(
//         (facility) => facility.id === allProductions.facilityId
//     )
//     // end result should be an array of objects of facilities
//     console.log(facilityProductionMatchesArray)
// }




// const findFacilityMineralMatch = () => {

//     const facilityProductionMatches = findFacilityProductionMatch(facilities, productions)

//     facilityProductionMatches.filter()
// }