import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import AppActions from '../redux/actions/AppActions'

//Components
import Tile from '../components/Tile'

//Images
import RestaurantImage from '../images/restaurant.jpeg'
import MenuItemImage from '../images/menu_item.jpeg'
import FeaturedImage from '../images/featured.jpg'
import RaterImage from '../images/rater.jpg'

class HomePage extends Component {

  handleTileClick = (value) => {
    this.props.store.dispatch(AppActions.setRestaurantCategory(value))
    this.props.store.dispatch(AppActions.setPage(appConstants.PAGES.RESTAURANT_LIST))
  }

  render() {

    const state = this.props.store.getState().items.restaurantCategory
    console.log(state)

    if(state.fetching) return <div> Loading </div>
    else {

      const tiles = state.list.map(
        (item) => {
          return (
            <Tile
              value={item}
              image={MenuItemImage}
              title={item}
              onClick={this.handleTileClick}
              format="small"/>
          )
        }
      )

      return (
        <div>
          <Tile
            value=""
            image={MenuItemImage}
            title="Any"
            onClick={this.handleTileClick}
            format="small"/>
          {tiles}
        </div>
      )
    }
  }
}

export default muiThemeable()(HomePage)
