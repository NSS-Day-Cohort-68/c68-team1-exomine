// get use selected governor and return html for the colony name 
const colonyChangeHandler = async (changeEvent) => {
    const response = await fetch("http://localhost:8088/colonies")
    const governors = await response.json()
    let colonyNameHTML = ''

    if (changeEvent.target.id === "governor") {
        const colonyFK = changeEvent.target.colonyfk
        for (const colony of colonies) {
            if (colony.id === colonyFK) {
                colonyNameHTML += `${colony.name}`
           }
        
       }
    }
    return colonyNameHTML
 }

export const GovernorChoices = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()

    let governorChoicesHTML = `
                    <select id='governorDropdown'>
                        <option value='0'>
                            Choose a governor...
                        </option>
                        `
  
    for (const governor of governors) {
        if (governor.isActive) {
            governorChoicesHTML += `
                <option id="governor" value='${governor.id} colonyfk=${governor.colonyId}'>
                    ${governor.name}            
                </option>
                `
        }
    }
    governorChoicesHTML += `</select>`
    return governorChoicesHTML
}



