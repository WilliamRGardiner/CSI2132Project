import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import ItemsActions from '../redux/actions/AppActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import Tile from '../components/Tile'

//Images
import RestaurantImage from '../images/restaurant.jpeg'
import MenuItemImage from '../images/menu_item.jpeg'
import FeaturedImage from '../images/featured.jpg'
import RaterImage from '../images/rater.jpg'

class MenuItemCategories extends Component {

  handleTileClick = (value) => {
    console.log(value)
    this.props.store.dispatch(ItemsActions.setMenuItemCategory(value))
    Database.fetchAllMenuItemsInCategory(value)
    this.props.store.dispatch(ItemsActions.setPage(appConstants.PAGES.MENU_ITEM_LIST))
  }

  render() {
    const tiles = appConstants.MENU_ITEM_CATEGORIES.map(
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
          value="any"
          image={MenuItemImage}
          title="Any"
          onClick={this.handleTileClick.bind(this, "any")}
          format="small"/>
        {tiles}
      </div>
    )
  }
}

export default muiThemeable()(MenuItemCategories)
