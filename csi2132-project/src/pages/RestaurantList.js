import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import ItemsActions from '../redux/actions/ItemsActions'
import AppActions from '../redux/actions/AppActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import RestaurantListItem from '../components/RestaurantListItem'

class RestaurantListPage extends Component {

  render() {

    const state = this.props.store.getState().items.restaurant

    var restaurantList = []

    if(state.list)
      restaurantList = state.list.map(
        item => <RestaurantListItem store={this.props.store} item={item} />
      )

    console.log(state)

    return (
      <div>
        {state.fetching ? "Loading" : restaurantList}
      </div>
    )

  }
}

export default muiThemeable()(RestaurantListPage)
