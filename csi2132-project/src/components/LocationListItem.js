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
        title={this.props.item.StreetAddress}
        subtitle={this.props.item.HourOpen + " - " + this.props.item.HourClosed}
        image={MissingImage}
        expandable={(
          <div>
            <span> Phone: {this.props.item.PhoneNumber} </span> <br />
            <span> Manager: {this.props.item.ManagerName} </span> <br />
            <span> Est.: {this.props.item.FirstOpenDate} </span> <br />
            <br />
          </div>
        )}
      />
    )
  }
}

export default muiThemeable()(RatingListItem)
