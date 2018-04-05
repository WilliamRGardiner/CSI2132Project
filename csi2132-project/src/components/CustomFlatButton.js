import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import muiThemeable from 'material-ui/styles/muiThemeable'

class CustomFlatButton extends Component {
  render() {
    return (
      <FlatButton
        style={{marginRight: "5px", color: this.props.primary ? '#ffffff' : '#000000'}}
        backgroundColor={this.props.primary ? this.props.muiTheme.palette.primary1Color : this.props.muiTheme.palette.accent2Color}
        hoverColor={this.props.primary ? this.props.muiTheme.palette.primary2Color : this.props.muiTheme.palette.accent1Color}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </ FlatButton>
    )
  }
}

export default muiThemeable()(CustomFlatButton)
