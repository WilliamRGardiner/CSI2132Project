import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

//Redux
import ItemsActions from '../redux/actions/AppActions'

//Database
import Database from '../database/DatabaseAccessFacade'

//Components
import Tile from '../components/Tile'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

//Image
import MissingImage from '../images/missing_image.png'

class StandardListItem extends Component {

  render() {

    return (
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          avatar={this.props.image}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {this.props.expandable}
        </CardText>
      </Card>
    )
  }
}

export default muiThemeable()(StandardListItem)
