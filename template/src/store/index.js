/**
 * Store
 * Redux 
 * Persist Store
 */
import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import reducers
import { welcomeReducer } from "./reducers/welcome/welcome";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const rootReducers = combineReducers({
    sayWelcome : welcomeReducer,  
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(persistedReducer,applyMiddleware(thunk))
const persistor = persistStore(store) 
export {store,persistor}


