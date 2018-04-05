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

//Image
import MissingImage from '../images/missing_image.png'

class RatingListItem extends Component {

  handleView = (item) => {
    this.props.store.dispatch(ItemsActions.setMenuItem(this.props.item))
    Database.fetchAllMenuItemRatings(this.props.item.RestaurantID)
    this.props.store.dispatch(AppActions.setPage(appConstants.PAGES.MENU_ITEM))
  }

  render() {
    return (
      <StandardListItem
        title={this.props.item["Street-address"]}
        subtitle={this.props.item["Hour-open"] + " - " + this.props.item["Hour-closed"]}
        image={MissingImage}
        expandable={(
          <div>
            <span> Phone: {this.props.item["Phone-number"]} </span> <br />
            <span> Manager: {this.props.item["Manager-name"]} </span> <br />
            <span> Est.: {this.props.item["First-openned"]} </span> <br />
            <br />
          </div>
        )}
      />
    )
  }
}

export default muiThemeable()(RatingListItem)
