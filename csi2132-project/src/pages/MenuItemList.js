import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import ItemsActions from '../redux/actions/ItemsActions'
import AppActions from '../redux/actions/AppActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import MenuItemListItem from '../components/MenuItemListItem'

class MenuItemListPage extends Component {

  render() {

    const state = this.props.store.getState().items.menuItem

    var menuItemList = []

    if(state.list)
      menuItemList = state.list.map(
        item => <MenuItemListItem store={this.props.store} item={item} />
      )

    return (
      <div>
        {state.fetching ? "Loading" : menuItemList}
      </div>
    )

  }
}

export default muiThemeable()(MenuItemListPage)
