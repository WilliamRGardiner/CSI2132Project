import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

import AdderActions from '../redux/actions/AdderActions'

import Dialog from 'material-ui/Dialog';
import CustomFlatButton from '../components/CustomFlatButton'
import TextField from 'material-ui/TextField'
import RaterDialog from '../components/RaterDialog'

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
        label="Update"
        onClick={this.handleSubmit}
      />,
      <CustomFlatButton
        label="Cancel"
        onClick={this.handleCancel}
      />
    ]

    return (
      <Dialog
          title="Update Rater"
          actions={actions}
          modal={false}
          open={state.open == "update"}
          onRequestClose={this.handleCancel}
        >
          <TextField
            floatingLabelText="Email"
            value={state.object.Price}
            onChange={this.handleChange.bind(this, "Price")}
          /><br />
          <TextField
            floatingLabelText="Type"
            value={state.object.Food}
            onChange={this.handleChange.bind(this, "Food")}
          /><br />
        </Dialog>
    )
  }
}

export default muiThemeable()(RatingDialog)
