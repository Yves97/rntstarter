import * as actionTypes from '../../types/welcome/welcome'


//action creator
export const setWelcome = (welcome: string): actionTypes.ActionType => ({type: actionTypes.SET_WELCOME, paylaod: welcome})