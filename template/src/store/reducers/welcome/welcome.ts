import * as actionTypes from '../../types/welcome/welcome'

export type State = {
    readonly welcome: string
}

const initialState: State = {
    welcome : 'welcome to my react native template'
}

const welcomeReducer = (state = initialState, action: actionTypes.ActionType) => {
    switch(action.type){
        case actionTypes.SET_WELCOME:
            return {
                ...state,
                welcome: action.paylaod
            }
        default:
            return state
    }
}
export {welcomeReducer}
