import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import AppActions from '../redux/actions/AppActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Images
import MissingImage from '../images/missing_image.png'

//Components
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import MenuItemListItem from '../components/MenuItemListItem'
import RatingListItem from '../components/RatingListItem'
import LocationListItem from '../components/LocationListItem'
import Rating from '../components/Rating'
import ItemHeader from '../components/ItemHeader'

class Rater extends Component {

  render() {

    const state = this.props.store.getState()
    const rater = state.items.rater.selected || state.app.user || {}

    return (
      <div>
        <ItemHeader
          image={MissingImage}
          title={rater.username}
          subtitle={rater.Type || "No Type"}
          rating={rater.Reputation || "1"}
        />
      </div>
    )
  }
}

export default muiThemeable()(Rater)
