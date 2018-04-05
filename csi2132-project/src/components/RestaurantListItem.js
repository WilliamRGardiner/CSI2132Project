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

class RestaurantListItem extends Component {

  handleView = () => {
    console.log(this.props.item)
    this.props.store.dispatch(ItemsActions.setRestaurant(this.props.item))
    Database.fetchAllMenuItems(this.props.item.RestaurantID)
    Database.fetchAllRatings(this.props.item.RestaurantID)
    this.props.store.dispatch(AppActions.setPage(appConstants.PAGES.RESTAURANT))
  }

  render() {
    return (
      <StandardListItem
        title={this.props.item.Name}
        subtitle={<Rating value={this.props.item.Rating} />}
        image={MissingImage}
        expandable={(
          <div>
            <span> Type: {this.props.item.Type} </span> <br /> <br />
            <span> Website: {this.props.item.URL} </span> <br /> <br />
            <div>
              <CustomFlatButton
                label="Restaurant"
                primary={this.props.primary}
                onClick={this.handleView.bind(this, this.props.item)}
              />
            </div>
          </div>
        )}
      />
    )
  }
}

export default muiThemeable()(RestaurantListItem)
