import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Components
import Rating from '../components/Rating'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'

//Icons
import ContentAdd from 'material-ui/svg-icons/content/add';

class Adder extends Component {

  render() {

    const styles = {
      button: {
        float: "right",
        backgroundColor: this.props.primary ? this.props.muiTheme.palette.primary1Color : this.props.muiTheme.palette.accent2Color
      },
      text: {
        fontSize: "20px"
      }
    }

    return (
      <Paper style={{margin: "5px 0px", padding: "10px", width: "100%"}}>
        <span style={styles.text}> {this.props.label} </span>
        <IconButton onClick={this.props.onClick} style={styles.button}>
          <ContentAdd
            style={{
            color: this.props.primary ? "#ffffff" : "#000000"}}
          />
        </ IconButton>
        <div style={{clear: "both"}}></div>
      </ Paper>
    )
  }
}

export default muiThemeable()(Adder)
