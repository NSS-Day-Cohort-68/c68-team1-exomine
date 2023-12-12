import { getColonies, getGovernors, setGovernor } from "./database.js"
const colonies = getColonies()
const governors = getGovernors()

// get use selected governor and return html for the colony name
const handleGovernorChange = (changeEvent) => {
  if (changeEvent.target.id === "governorDropdown") {
    const colonyNameContainer = document.querySelector(".colonyName")
    const chosenGov = changeEvent.target.value
    const setGovernerState = setGovernor(parseInt(chosenGov))
    for (const governor of governors) {
      if (parseInt(chosenGov) === governor.id) {
        for (const colony of colonies) {
          if (colony.id === governor.colonyId) {
            colonyNameContainer.innerHTML = `${colony.name} Minerals`
          }
        }
      }
    }
  }
}

document.addEventListener("change", handleGovernorChange)

export const GovernorChoices = () => {
  let governorChoicesHTML = `
                    <select id='governorDropdown'>
                        <option value='0'>
                            Choose a governor...
                        </option> 
                        `

  for (const governor of governors) {
    if (governor.isActive) {
      governorChoicesHTML += `
                <option id="governor" value='${governor.id}' colonyfk='${governor.colonyId}'>
                    ${governor.name}            
                </option>
                `
    }
  }
  governorChoicesHTML += `</select>`
  return governorChoicesHTML
}
