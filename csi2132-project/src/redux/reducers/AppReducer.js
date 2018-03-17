import appConstants from '../../AppConstants'
import appActions from '../actions/AppActions'
import navbarActions from '../actions/NavbarActions'

export default (state, action) => {
  switch(action.type){
    case navbarActions.ACTIONS.SELECT:
      return { ...state.app, page: action.payload }
      break
    case appActions.ACTIONS.LOGOUT:
      return { ...state.app, page: appConstants.PAGES.HOME, user: null }
      break
    case appActions.ACTIONS.SIGN_IN_ATTEMPT:
      return { ...state.app, user: state.navbar.username }
      break
    default:
      return { ...state.app }
      break
  }
}
