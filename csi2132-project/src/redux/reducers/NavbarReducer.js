import actions from '../actions/NavbarActions';

export default (state, action) => {
  switch(action.type) {
    case actions.ACTIONS.SET:
      return {...state, searchString: action.payload};
      break;
    case actions.ACTIONS.CLR:
      return {...state, searchString: ""};
      break;
    case actions.ACTIONS.OPEN:
      return {...state, popoverOpen: true, popoverAnchor: action.payload};
      break;
    case actions.ACTIONS.CLOSE:
      return {...state, popoverOpen: false};
      break;
    case actions.ACTIONS.SELECT:
      return {...state, popoverOpen: false};
      break;
    case actions.ACTIONS.OPEN_SIGN_IN:
      return {...state, signInOpen: true};
      break;
    case actions.ACTIONS.CLOSE_SIGN_IN:
      return {...state, signInOpen: false};
      break;
    case actions.ACTIONS.UPDATE_USERNAME:
      return {...state, username: action.payload};
      break;
    case actions.ACTIONS.UPDATE_PASSWORD:
      return {...state, password: action.payload};
      break;
    default:
      return {...state}
      break;
  }
};
