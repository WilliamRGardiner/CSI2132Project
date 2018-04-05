import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import ItemsActions from '../redux/actions/ItemsActions'
import AppActions from '../redux/actions/AppActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import StandardListItem from '../components/StandardListItem'
import Rating from '../components/Rating'
import FlatButton from 'material-ui/FlatButton'
import CustomFlatButton from '../components/CustomFlatButton'

//Image
import MissingImage from '../images/missing_image.png'

class MenuItemListItem extends Component {

  handleViewItem = (item) => {
    this.props.store.dispatch(ItemsActions.setMenuItem(this.props.item))
    Database.fetchAllMenuItemRatings(this.props.item.RestaurantID, this.props.item.ItemID)
    this.props.store.dispatch(AppActions.setPage(appConstants.PAGES.MENU_ITEM))
  }

  handleViewRestaurant = (item) => {
    Database.fetchRestaurant(item.RestaurantID)
    Database.fetchAllMenuItemRatings(this.props.item.RestaurantID, this.props.item.ItemID)
    this.props.store.dispatch(AppActions.setPage(appConstants.PAGES.RESTAURANT))
  }

  render() {
    return (
      <StandardListItem
        title={this.props.item.Name}
        subtitle={this.props.item.Price}
        image={MissingImage}
        expandable={(
          <div>
            <span> Type: {this.props.item.Type} </span> <br />
            <span> Category: {this.props.item.Category} </span> <br />
            <br />
            <div>
              <CustomFlatButton
                label="Menu Item"
                primary={this.props.primary}
                onClick={this.handleViewItem.bind(this, this.props.item)}
              />
              {
                this.props.context != "restaurant" ?
                <CustomFlatButton
                  label="Restaurant"
                  primary={this.props.primary}
                  onClick={this.handleViewRestaurant.bind(this, this.props.item)}
                />:
                ""
              }
            </div>
          </div>
        )}
      />
    )
  }
}

export default muiThemeable()(MenuItemListItem)
