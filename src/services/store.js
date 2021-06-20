import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import petReducer from './reducers/petReducer'
import petsReducer from './reducers/petsReducer'
import login from './reducers/LoginReducer'
const rootReducer = combineReducers({
    petReducer, petsReducer, login
})

//Desenvolvimento
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


//Produção
//const store = createStore(rootReducer, applyMiddleware(thunk))
export default store