import appConstants from '../../AppConstants'
import appActions from '../actions/AppActions'
import navbarActions from '../actions/NavbarActions'

export default (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case appActions.ACTIONS.SET_PAGE:
      newState.app.page = action.payload
      return newState.app
      break
    case appActions.ACTIONS.LOGOUT:
      newState.app.page = appConstants.PAGES.HOME
      newState.user = null
      return newState.app
      break
    case appActions.ACTIONS.SIGN_IN_ATTEMPT:
      newState.app.user = state.navbar.username
      return newState.app
      break
    default:
      return newState.app
      break
  }
}
