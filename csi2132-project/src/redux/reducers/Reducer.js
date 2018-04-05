import NavbarReducer from './NavbarReducer'
import AppReducer from './AppReducer'
import ItemsReducer from './ItemsReducer'

export default (state, action) => {
  console.log(state)
  console.log(action)
  return {
    navbar: NavbarReducer(state.navbar, action),
    app: AppReducer(state, action),
    items: ItemsReducer(state.items, action)
  }
}
