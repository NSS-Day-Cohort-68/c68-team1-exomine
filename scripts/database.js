//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ [ DATABASE ] ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\\
const database = {
    transientState: {
        governorId: 0,
        facilityId: 0,
        mineralId: 0
    },
    governors: [
        {
            id: 1,
            name: 'Daman Hartmann',
            isActive: true,
            colonyId: 2
        },
        {
            id: 2,
            name: 'Katrina Bahringer',
            isActive: true,
            colonyId: 3
        },
        {
            id: 3,
            name: 'Lola Wolff',
            isActive: true,
            colonyId: 1
        },
        {
            id: 4,
            name: 'Patricia Purdy',
            isActive: false,
            colonyId: 0
        }
    ],
    facilities: [
        {
            id: 1,
            name: 'Ganymede',
            isActive: true
        },
        {
            id: 2,
            name: 'Io',
            isActive: true
        },
        {
            id: 3,
            name: 'Titan',
            isActive: true
        }
    ],
    colonies: [
        {
            id: 1,
            name: 'Earth'
        },
        {
            id: 2,
            name: 'Mars'
        },
        {
            id: 3,
            name: 'Europa'
        }
    ],
    minerals: [
        {
            id: 1,
            mineral: 'Iron',
            amount: 25
        },
        {
            id: 2,
            mineral: 'Chromium',
            amount: 10
        },
        {
            id: 3,
            mineral: 'Molybdenum',
            amount: 100
        }
    ],
    productions: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 1
        },
        {
            id: 2,
            facilityId: 1,
            mineralId: 2
        },
        {
            id: 3,
            facilityId: 2,
            mineralId: 3
        }
    ],
    // order structure: { id: 0, governorId: 0, productionId: 0}
    orders: []
}
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ [ DATABASE ] ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑\\


const stateChangeEvent = new CustomEvent('stateChanged')


export const setGovernor = (inputId) => {
    database.transientState.governorId = inputId
    document.dispatchEvent(stateChangeEvent)
}
export const setFacility = (inputId) => {
    database.transientState.facilityId = inputId
    document.dispatchEvent(stateChangeEvent)
}
export const setMineral = (inputId) => {
    database.transientState.mineralId = inputId
    document.dispatchEvent(stateChangeEvent)
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}
export const getProductions = () => {
    return database.productions.map(production => ({ ...production }))
}
export const getOrders = () => {
    return database.orders.map(order => ({ ...order }))
}


// export const purchaseMineral = () => {
//     // [ insert code for saving purchase? ]
//     document.dispatchEvent(stateChangeEvent)
// }
