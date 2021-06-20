import * as Actions from '../actions'

const initialState = {}

const pet = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_PET_DATA:
            {
                return {
                    ...action.payload
                }
            }
        case Actions.CLEAR_PET_DATA:
            {
                return {}
            }
        default:
            {
                return state
            }
    }
}

export default pet;