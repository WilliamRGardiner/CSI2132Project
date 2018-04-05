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
            value={state.object["Street-address"]}
            onChange={this.handleChange.bind(this, "Street-address")}
          /><br />
          <TextField
            floatingLabelText="Hour Open"
            value={state.object["Hour-open"]}
            onChange={this.handleChange.bind(this, "Hour-open")}
          /><br />
          <TextField
            floatingLabelText="Hour Closed"
            value={state.object["Hour-closed"]}
            onChange={this.handleChange.bind(this, "Hour-closed")}
          /><br />
          <TextField
            floatingLabelText="Phone Number"
            value={state.object["Phone-number"]}
            onChange={this.handleChange.bind(this, "Phone-number")}
          /><br />
          <TextField
            floatingLabelText="First-openned"
            value={state.object["First-openned"]}
            onChange={this.handleChange.bind(this, "First-openned")}
          /><br />
          <TextField
            floatingLabelText="Manager"
            value={state.object["Manager-name"]}
            onChange={this.handleChange.bind(this, "Manager-name")}
          /><br />
        </Dialog>
    )
  }
}

export default muiThemeable()(RestaurantDialog)
