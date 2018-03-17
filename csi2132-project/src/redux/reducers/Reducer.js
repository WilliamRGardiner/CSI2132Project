import { combineReducers } from 'redux'
import NavbarReducer from './NavbarReducer'
import AppReducer from './AppReducer'

export default (state, action) => {
  return {
    navbar: NavbarReducer(state.navbar, action),
    app: AppReducer(state, action)
  }
}
