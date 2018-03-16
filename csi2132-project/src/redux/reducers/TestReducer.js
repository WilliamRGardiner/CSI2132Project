import actions from '../actions/TestActions';

export default (state, action) => {
  switch(action.type) {
    case actions.ACTIONS.INC:
      return state.value + 1;
      break;
    case actions.ACTIONS.DEC:
      return state.value - 1;
      break;
  }

  return 0;
}
