import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

import AdderActions from '../redux/actions/AdderActions'

import Dialog from 'material-ui/Dialog';
import CustomFlatButton from '../components/CustomFlatButton'
import TextField from 'material-ui/TextField'

class RestaurantDialog extends Component {

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
          title="New Location"
          actions={actions}
          modal={false}
          open={state.open == "location"}
          onRequestClose={this.handleCancel}
        >
        {
          // "Street-address": "",
          // "Hour-ospen": "",
          // "Hour-closed": "",
          // "Phone-number": "",
          // "First-openned": "",
          // "Manager-name": ""
        }
          <TextField
            floatingLabelText="Street Address"
            value={state.object.StreetAddress}
            onChange={this.handleChange.bind(this, "StreetAddress")}
          /><br />
          <TextField
            floatingLabelText="Hour Open"
            value={state.object.HourOpen}
            onChange={this.handleChange.bind(this, "HourOpen")}
          /><br />
          <TextField
            floatingLabelText="Hour Closed"
            value={state.object.HourClosed}
            onChange={this.handleChange.bind(this, "HourClosed")}
          /><br />
          <TextField
            floatingLabelText="Phone Number"
            value={state.object.PhoneNumber}
            onChange={this.handleChange.bind(this, "PhoneNumber")}
          /><br />
          <TextField
            floatingLabelText="First Openned"
            value={state.object["FirstOpenDate"]}
            onChange={this.handleChange.bind(this, "FirstOpenDate")}
          /><br />
          <TextField
            floatingLabelText="Manager"
            value={state.object["ManagerName"]}
            onChange={this.handleChange.bind(this, "ManagerName")}
          /><br />
        </Dialog>
    )
  }
}

export default muiThemeable()(RestaurantDialog)
