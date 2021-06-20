import * as Actions from '../actions'

const initialState = []

const pets = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_PETS_DATA:
            {
                return [
                    ...initialState,
                    ...action.payload
                ]
            }
        default:
            {
                return state
            }

    }
}
export default pets;