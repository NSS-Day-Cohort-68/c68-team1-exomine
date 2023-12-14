import {
    getFacilities,
    getMinerals, 
    getProductions, 
    getTransientState, 
    setFacility} from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const productions = getProductions()

const localMineralAmounts = {}
for(const mineral of minerals) {
    localMineralAmounts[`${mineral.mineral}`] = 0
}

// Create HTML for FACILITIES MENU
export const FacilitiesChoices = () => {
    // initial HTML
    let facilitiesHTML = `
                <select id="facilitiesDropdown">
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
                    facilityRadiosHTML += `
                    <div class="minerals">
                        <input type="radio" name="minerals" value="${mineral.id}" data-type="${mineral.mineral}" />${mineralAmount + localMineralAmounts.mineral.mineral} tons of ${mineral.mineral}
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

// const handleStateChange = () => {
//     localMineralAmount-=1
//     renderRadioButtons(getTransientState().facilityId)
// }

document.addEventListener("change", handleFacilityChange)

// document.addEventListener("stateChanged", handleStateChange)










// function to find matches of FACILITIES AND PRODUCTIONS


// function to find matches of all FACILITIES AND MINERALS via PRODUCTIONS


// Facilities HTML injection
// export const FacilitiesOptions = () => {
    
//     let FacilitiesHTML = `<h2>Facilities Minerals</h2>`

    

//     const productionMatches = productions.filter(
//         (production) => {parseInt(production.facilityId) = parseInt(/*facilities.Id*/ 1)
//             return `
//                     <div class="minerals">
//                         <input
//                             type="radio"
//                             name="mineral"
//                             value="${minerals.id}"
//                             />${minerals.amount} tons of ${minerals.name}
//                     </div>`
//         }
//     )

//     FacilitiesHTML += productionMatches.join("")
// }

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