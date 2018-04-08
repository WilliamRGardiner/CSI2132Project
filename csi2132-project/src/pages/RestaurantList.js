import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import ItemsActions from '../redux/actions/ItemsActions'
import AppActions from '../redux/actions/AppActions'
import AdderActions from '../redux/actions/AdderActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import RestaurantListItem from '../components/RestaurantListItem'
import Adder from '../components/Adder'
import RestaurantDialog from '../components/RestaurantDialog'

class RestaurantListPage extends Component {

  handleAddRestaurant = () => {
    this.props.store.dispatch(AdderActions.openAddRestaurant(this.props.store.getState().items.restaurant.selected))
  }

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
          <Adder
            label="Add Restaurant"
            onClick={this.handleAddRestaurant}
            primary={true}
          />
          <RestaurantDialog store={this.props.store} />
        : <div></div>
      </div>
    )

  }
}

export default muiThemeable()(RestaurantListPage)
