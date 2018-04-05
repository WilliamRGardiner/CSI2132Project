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

class RatingListItem extends Component {

  handleView = (item) => {
    Database.fetchRater(item.UserID)
    this.props.store.dispatch(AppActions.setPage(appConstants.PAGES.RATER))
  }

  render() {

    var ratingSum = 0
    var ratingCount = 0

    ratingSum = this.props.item.Mood + this.props.item.Food + this.props.item.Staff
    ratingCount += this.props.item.Mood ? 1 : 0
    ratingCount += this.props.item.Food ? 1 : 0
    ratingCount += this.props.item.Staff ? 1 : 0

    return (
      <StandardListItem
        title={this.props.item.UserID}
        subtitle={<Rating value={this.props.item.Rating || (ratingSum/ratingCount)} />}
        image={MissingImage}
        expandable={(
          <div>
            <span> Date: {this.props.item.Date} </span> <br />
            <span> {this.props.item.Comment} </span> <br />
            <br />
            <CustomFlatButton
              label="Rater"
              primary={this.props.primary}
              onClick={this.handleView.bind(this, this.props.item)}
            />
          </div>
        )}
      />
    )
  }
}

export default muiThemeable()(RatingListItem)
