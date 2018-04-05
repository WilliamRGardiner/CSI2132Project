import appConstants from '../../AppConstants'
import appActions from '../actions/AppActions'
import navbarActions from '../actions/NavbarActions'
import databaseAction from '../actions/DatabaseActions'

import Database from '../../database/DatabaseAccessFacade'

export default (state, action) => {
  console.log(state)
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
    case databaseAction.ACTIONS.LOGIN+"_RESOLVED":
      newState.app.user = action.payload.sucess ? action.payload.user : null
      return newState.app
      break
    default:
      return newState.app
      break
  }
}
