import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import AppActions from '../redux/actions/AppActions'
import ItemsActions from '../redux/actions/ItemsActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import Tile from '../components/Tile'

//Images
import RestaurantImage from '../images/restaurant.jpeg'
import MenuItemImage from '../images/menu_item.jpeg'
import FeaturedImage from '../images/featured.jpg'
import RaterImage from '../images/rater.jpg'

class RestaurantCategories extends Component {

  handleTileClick = (value) => {
    console.log(value)
    this.props.store.dispatch(ItemsActions.setRestaurantCategory(value))
    Database.fetchAllRestaurantsInCategory(value)
    this.props.store.dispatch(AppActions.setPage(appConstants.PAGES.RESTAURANT_LIST))
  }

  render() {

    const tiles = appConstants.RESTAURANT_CATEGORIES.map(
      (item) => {
        return (
          <Tile
            value={item}
            image={MenuItemImage}
            title={item}
            onClick={this.handleTileClick.bind(this, item)}
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
          onClick={this.handleTileClick.bind(this, "any")}
          format="small"/>
        {tiles}
      </div>
    )
  }
}

export default muiThemeable()(RestaurantCategories)
