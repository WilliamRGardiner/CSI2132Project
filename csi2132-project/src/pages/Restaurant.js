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
import LocationDialog from '../components/LocationDialog'
import MenuItemDialog from '../components/MenuItemDialog'
import RatingDialog from '../components/RatingDialog'
import RestaurantDialog from '../components/RestaurantDialog'
import CustomFlatButton from '../components/CustomFlatButton'


class Restaurant extends Component {

  handleAddLocation = () => {
    this.props.store.dispatch(AdderActions.openAddLocation(this.props.store.getState().items.restaurant.selected))
  }

  handleAddRating = () => {
    this.props.store.dispatch(AdderActions.openAddRating(
      this.props.store.getState().app.user,
      this.props.store.getState().items.restaurant.selected
    ))
  }

  handleAddMenuItem = () => {
    this.props.store.dispatch(AdderActions.openAddMenuItem(this.props.store.getState().items.restaurant.selected))
  }

  handleDelete = () => {
    this.props.store.dispatch(AdderActions.openDelete(this.props.store.getState().items.restaurant.selected))
  }

  handleEdit = () => {
    this.props.store.dispatch(AdderActions.openUpdate(this.props.store.getState().items.restaurant.selected))
  }

  render() {

    const state = this.props.store.getState().items

    if(state.restaurant.fetching)
      return <div> Loading </div>

    const restaurant = state.restaurant.selected
    const menu = state.menuItem.list
    const ratings = state.rating.list

    const styles = {
      title: {
        fontSize: "18pt"
      },
      secondLine: {
        fontSize: "16pt"
      },
      image: {
        width: "100px",
        height: "100px"
      },
      tab: {
        maxHeight: "100%",
        overflow: "auto"
      }
    }

    var menuItems = menu.map(item => <MenuItemListItem store={this.props.store} item={item} primary={true} context="restaurant"/>)
    var ratingItems = ratings.map(item => <RatingListItem store={this.props.store} item={item} primary={true} context="restaurant"/>)
    var loctionItems = restaurant && restaurant.locations ? restaurant.locations.map(item => <LocationListItem store={this.props.store} item={item} />) : <div></div>

    var adder = this.props.store.getState().adder
    var adders = true//this.props.store.getState().app.user

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
          title={restaurant.Name}
          subtitle={restaurant.Type}
          rating={restaurant.Rating || "0"}
          content=""
          actions={actions}
        />
        <br />
        <Paper style={{padding: "10px", height: "500px"}}>
          <Tabs style={styles.tab}>
            <Tab label="Menu" >
              {menuItems}
              {
                adders ?
                  <Adder
                    label="Add MenuItem"
                    onClick={this.handleAddMenuItem}
                    primary={true}
                  />
                : <div></div>
              }
            </Tab>
            <Tab style={styles.tab} label="Ratings" >
              {ratingItems}
              {
                adders ?
                  <Adder
                    label="Add Review"
                    onClick={this.handleAddRating}
                    primary={true}
                  />
                : <div></div>
              }
            </Tab>
            <Tab style={styles.tab} label="Locations" >
              {loctionItems}
              {
                adders ?
                  <Adder
                    label="Add Location"
                    onClick={this.handleAddLocation}
                    primary={true}
                  />
                : <div></div>
              }
            </Tab>
          </ Tabs>
        </Paper>
        <RestaurantDialog store={this.props.store} updater={true} />
        <RatingDialog store={this.props.store} />
        <MenuItemDialog store={this.props.store} />
        <LocationDialog store={this.props.store} />
      </div>
    )
  }
}

export default muiThemeable()(Restaurant)
