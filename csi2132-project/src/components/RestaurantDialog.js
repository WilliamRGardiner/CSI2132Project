import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

import AdderActions from '../redux/actions/AdderActions'
import DatabaseActions from '../redux/actions/DatabaseActions'

import Dialog from 'material-ui/Dialog';
import CustomFlatButton from '../components/CustomFlatButton'
import TextField from 'material-ui/TextField'

class RestaurantDialog extends Component {

  handleCancel = () => {
    this.props.store.dispatch(AdderActions.closeAdder())
  }

  handleSubmit = () => {
    const adder = this.props.store.getState().adder
    if(adder.open == "update") this.props.store.dispatch(DatabaseActions.updateRestaurant(adder.object))
    else this.props.store.dispatch(DatabaseActions.addRestaurant(adder.object))
    this.props.store.dispatch(AdderActions.submitAdder())
  }

  handleChange = (field, e) => {
    this.props.store.dispatch(AdderActions.updateObjectField(field, e.target.value))
  }

  render() {

    const state = this.props.store.getState().adder
    const actions = [
      <CustomFlatButton
        label="Submit"
        onClick={this.handleSubmit}
      />,
      <CustomFlatButton
        label="Cancel"
        onClick={this.handleCancel}
      />
    ]

    return (
      <Dialog
          title="New Restaurant"
          actions={actions}
          modal={false}
          open={state.open == "restaurant" || (state.open == "update" && this.props.updater) || false}
          onRequestClose={this.handleCancel}
        >
        <TextField
          floatingLabelText="Name"
          value={state.object.Name}
          onChange={this.handleChange.bind(this, "Name")}
        /><br />
        <TextField
          floatingLabelText="Type"
          value={state.object.Type}
          onChange={this.handleChange.bind(this, "Type")}
        /><br />
        <TextField
          floatingLabelText="URL"
          value={state.object.URL}
          onChange={this.handleChange.bind(this, "URL")}
        /><br />

        </Dialog>
    )
  }
}

export default muiThemeable()(RestaurantDialog)
