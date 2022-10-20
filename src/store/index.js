// eslint-disable-next-line camelcase
import { legacy_createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { LoginInfoReducer } from './reducer'

const newRootReducer = combineReducers({
  loginInfo: LoginInfoReducer
})

const store = legacy_createStore(newRootReducer, composeWithDevTools())

export default store
