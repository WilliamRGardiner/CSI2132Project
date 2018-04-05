import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Components
import Rating from '../components/Rating'
import Paper from 'material-ui/Paper'

class ItemHeader extends Component {

  render() {

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
      }
    }

    return (
      <Paper style={{padding: "10px", width: "100%"}}>
        <img style={styles.image} src={this.props.image} />
        <div style={{display: "inline-block", height: "100px", padding: "20px"}}>
          <span style={styles.title}>{ this.props.title }</span><br />
          <span style={styles.secondLine}>{ this.props.subtitle }{ this.props.rating ? <Rating value={this.props.rating} /> : this.props.thirdLine}</span>
        </div>
      </ Paper>
    )
  }
}

export default muiThemeable()(ItemHeader)
