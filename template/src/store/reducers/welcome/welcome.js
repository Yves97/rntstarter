import * as actionTypes from '../../types/welcome/welcome'

const initialState = {
    welcome : 'welcome to my react native template'
}

const welcomeReducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.SET_WELCOME:
            return {
                ...state,
                welcome : action.welcome
            }
        default:
            return state
    }
}
export {welcomeReducer}
