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
import CustomFlatButton from '../components/CustomFlatButton'
import MenuItemDialog from '../components/MenuItemDialog'

class MenuItem extends Component {

  handleDelete = () => {
    this.props.store.dispatch(AdderActions.openDelete())
  }

  handleEdit = () => {
    this.props.store.dispatch(AdderActions.openUpdate(this.props.store.getState().items.menuItem.selected))
  }

  render() {

    const state = this.props.store.getState().items
    const menuItem = state.menuItem.selected
    const ratings = state.menuItemRating.list

    const styles = {
      tab: {
        maxHeight: "100%",
        overflow: "auto"
      }
    }


    if(ratings && ratings.length > 0){
      var ratingSum = 0
      var ratingCount = 0
      for(var r of ratings) {
        ratingSum += r.Rating
        ratingCount += r.Rating > 0 ? 1 : 0
      }
    }
    var ratingItems = ratings.map(item => <RatingListItem store={this.props.store} item={item} primary={true}/>)

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
          title={menuItem.Name}
          subtitle={menuItem.Type}
          rating={ratingSum/ratingCount}
          content=""
          actions={actions}
        />
        <br />
        <Paper style={{padding: "10px", height: "500px"}}>
          <Tabs style={styles.tab}>
            <Tab style={styles.tab} label="Ratings" >
              {ratingItems}
            </Tab>
          </ Tabs>
        </Paper>
        <MenuItemDialog store={this.props.store} updater={true}/>
      </div>
    )
  }
}

export default muiThemeable()(MenuItem)
