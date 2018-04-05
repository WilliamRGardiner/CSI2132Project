import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

import AdderActions from '../redux/actions/AdderActions'

import Dialog from 'material-ui/Dialog';
import CustomFlatButton from '../components/CustomFlatButton'
import TextField from 'material-ui/TextField'

class RatingDialog extends Component {

  handleCancel = () => {
    this.props.store.dispatch(AdderActions.closeAdder())
  }

  handleSubmit = () => {
    this.props.store.dispatch(AdderActions.submitAdder())
  }

  handleChange = (field, e) => {
    this.props.store.dispatch(AdderActions.updateObjectField(field, e.target.value))
  }

  render() {

    const state = this.props.store.getState().adder
    const actions = [
      <CustomFlatButton
        label="Create"
        onClick={this.handleSubmit}
      />,
      <CustomFlatButton
        label="Cancel"
        onClick={this.handleCancel}
      />
    ]

    return (
      <Dialog
          title="New Review"
          actions={actions}
          modal={false}
          open={state.open == "rating"}
          onRequestClose={this.handleCancel}
        >
        {
          // "UserID": action.payload.user.UserID,
          // "Price": "0",
          // "menuItemID": action.payload.menuItem ? action.payload.menuItem.ItemID : "",
          // "Food": "0",
          // "Mood": "0",
          // "Staff": "0",
          // "Comments": "",
          // "RestaurantID": action.payload.restaurant.RestaurantID
        }
        <TextField
          floatingLabelText="Price"
          value={state.object.Price}
          onChange={this.handleChange.bind(this, "Price")}
        /><br />
        <TextField
          floatingLabelText="Menu Item"
          value={state.object.menuItemID}
          onChange={this.handleChange.bind(this, "menuItemID")}
        /><br />
        <TextField
          floatingLabelText="Food"
          value={state.object.Food}
          onChange={this.handleChange.bind(this, "Food")}
        /><br />
        <TextField
          floatingLabelText="Mood"
          value={state.object.Mood}
          onChange={this.handleChange.bind(this, "Mood")}
        /><br />
        <TextField
          floatingLabelText="Staff"
          value={state.object.Staff}
          onChange={this.handleChange.bind(this, "Staff")}
        /><br />
        <TextField
          floatingLabelText="Comments"
          value={state.object.Comments}
          onChange={this.handleChange.bind(this, "Comments")}
        /><br />
        </Dialog>
    )
  }
}

export default muiThemeable()(RatingDialog)
