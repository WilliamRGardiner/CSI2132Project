import NavbarReducer from './NavbarReducer'
import AppReducer from './AppReducer'
import ItemsReducer from './ItemsReducer'
import AdderReducer from './AdderReducer'

export default (state, action) => {
  console.log(state)
  console.log(action)
  state = {...state, navbar: {...state.navbar, popoverAnchor: null}}
  return {
    navbar: NavbarReducer(state.navbar, action),
    app: AppReducer(state, action),
    items: ItemsReducer(state.items, action),
    adder: AdderReducer(state.adder, action)
  }
}
