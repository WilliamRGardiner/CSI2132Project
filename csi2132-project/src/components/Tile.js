import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Components
import Paper from 'material-ui/Paper'

//Images
import missing_image from '../images/missing_image.png'

class Tile extends Component {
  render() {

    const style_paper = {
      large: {
        height: 270,
        width: 400,
        margin: 20,
        padding: 20,
        textAlign: 'center',
        display: 'inline-block'
      },

      small: {
        height: 270,
        width: 400,
        margin: 20,
        padding: 20,
        textAlign: 'center',
        display: 'inline-block'
      }

    }

    const style_image = {
      large: {
        height: 200,
        width: 320
      },

      small: {
        height: 200,
        width: 320
      }
    }

    const style_title = {
      large: {
        fontSize: "16pt",
        margin: "auto"
      },

      small: {
        fontSize: "16pt",
        margin: "auto"
      }
    }

    return (
        <Paper
          onClick={this.props.onClick ? this.props.onClick.bind(this, this.props.value) : null}
          style={style_paper[this.props.format] || style_paper["small"]}
          zDepth={2}
        >
          <img src={this.props.image || missing_image} style={style_image[this.props.format] || style_image["small"]} />
          <br />
          <span style={style_title[this.props.format] || style_title["small"]}> {this.props.title} </span>
        </ Paper>
    )
  }
}

export default muiThemeable()(Tile)
