import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import AppActions from '../redux/actions/AppActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import Tile from '../components/Tile'

//Images
import RestaurantImage from '../images/restaurant.jpeg'
import MenuItemImage from '../images/menu_item.jpeg'
import FeaturedImage from '../images/featured.jpg'
import RaterImage from '../images/rater.jpg'

class HomePage extends Component {
  handleTileClick = (value) => {
    switch(value){
      case appConstants.PAGES.RESTAURANT_CATEGORIES:
        Database.fetchAllRestaurantCategories()
        break
      case appConstants.PAGES.RATERS:
        Database.fetchAllRaters()
        break
      case appConstants.PAGES.MENU_ITEM_CATEGORIES:
        Database.fetchAllMenuItemCategories()
        break
      case appConstants.PAGES.FEATURED:
        break
    }
    this.props.store.dispatch(AppActions.setPage(value))
  }

  render() {
    return (
      <div>
        <Tile
          value={appConstants.PAGES.RESTAURANT_CATEGORIES}
          image={RestaurantImage}
          title="Restaurants"
          onClick={this.handleTileClick}
          format="large"/>
        <Tile
          value={appConstants.PAGES.MENU_ITEM_CATEGORIES}
          image={MenuItemImage}
          title="Menu Items"
          onClick={this.handleTileClick}
          format="large"/>
        <Tile
          value={appConstants.PAGES.FEATURED}
          image={FeaturedImage}
          title="Featured"
          onClick={this.handleTileClick}
          format="large"/>
        <Tile
          value={appConstants.PAGES.RATERS}
          image={RaterImage}
          title="Raters"
          onClick={this.handleTileClick}
          format="large"/>
      </div>
    )
  }
}

export default muiThemeable()(HomePage)
