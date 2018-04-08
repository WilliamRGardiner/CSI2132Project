import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import AppActions from '../redux/actions/AppActions'
import AdderActions from '../redux/actions/AdderActions'

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
import Adder from '../components/Adder'
import RaterDialog from '../components/RaterDialog'
import CustomFlatButton from '../components/CustomFlatButton'


class Rater extends Component {

  handleDelete = () => {
    this.props.store.dispatch(AdderActions.openDelete())
  }

  handleEdit = () => {
    this.props.store.dispatch(AdderActions.openUpdate(this.props.store.getState().items.rater.selected))
  }

  render() {

    const state = this.props.store.getState()
    const rater = state.items.rater.selected || state.app.user || {}

    var actions =
      <div>
        <CustomFlatButton
          label="Edit"
          primary={this.props.primary}
          onClick={this.handleEdit}
        />
        <CustomFlatButton
          label="Delete"
          primary={this.props.primary}
          onClick={this.handleDelete}
        />
      </div>

    return (
      <div>
        <ItemHeader
          image={MissingImage}
          title={rater.username}
          subtitle={rater.Type || "No Type"}
          rating={rater.Reputation || "1"}
          content=""
          actions={actions}
        />
        <RaterDialog store={this.props.store} />
      </div>
    )
  }
}

export default muiThemeable()(Rater)
