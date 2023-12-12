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
            colonyId: 4
        },
        {
            id: 5,
            name: 'John Doe',
            isActive: false,
            colonyId: 5
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
        },
        {
            id: 4,
            name: 'Liminality',
            isActive: false
        },
        {
            id: 5,
            name: 'The Backrooms',
            isActive: false
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
            mineral: 'Iron'
        },
        {
            id: 2,
            mineral: 'Chromium'
        },
        {
            id: 3,
            mineral: 'Molybdenum'
        },
        {
            id: 4,
            mineral: 'Copper'
        },
        {
            id: 5,
            mineral: 'Diamond'
        },
        {
            id: 6,
            mineral: 'Platinum'
        },
    ],
    productions: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 1,
            mineralAmount: 25,
        },
        {
            id: 2,
            facilityId: 2,
            mineralId: 2,
            mineralAmount: 10
        },
        {
            id: 3,
            facilityId: 2,
            mineralId: 3,
            mineralAmount: 100,
        },
        {
            id: 4,
            facilityId: 3,
            mineralId: 4,
            mineralAmount: 71,
        },
        {
            id: 5,
            facilityId: 3,
            mineralId: 3,
            mineralAmount: 17,
        },
        {
            id: 6,
            facilityId: 2,
            mineralId: 6,
            mineralAmount: 88,
        },
        {
            id: 7,
            facilityId: 1,
            mineralId: 4,
            mineralAmount: 55,
        },
        {
            id: 8,
            facilityId: 1,
            mineralId: 6,
            mineralAmount: 101,
        },
        {
            id: 9,
            facilityId: 3,
            mineralId: 5,
            mineralAmount: 311,
        }
    ],
    // order structure: { id: 0, governorId: 0, productionId: 0}
    orders: []
}
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ [ DATABASE ] ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑\\


const stateChangeEvent = new CustomEvent('stateChanged')


export const setGovernor = (inputId) => {
    database.transientState.governorId = inputId
    // document.dispatchEvent(stateChangeEvent)
}
export const setFacility = (inputId) => {
    database.transientState.facilityId = inputId
    // document.dispatchEvent(stateChangeEvent)
}
export const setMineral = (inputId) => {
    database.transientState.mineralId = inputId
    // document.dispatchEvent(stateChangeEvent)
    // console.log(database.transientState)
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

export const purchaseMineral = () => {
    database.orders.push({
        id: database.orders.length + 1,
        governorId: database.transientState.governorId,
        facilityId: database.transientState.facilityId,
        mineralId: database.transientState.mineralId
    })
    document.dispatchEvent(stateChangeEvent)
    console.log(database.orders)
}


// export const purchaseMineral = () => {
//     // [ insert code for saving purchase? ]
//     document.dispatchEvent(stateChangeEvent)
// }
