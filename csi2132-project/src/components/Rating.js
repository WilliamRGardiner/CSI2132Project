import React, { Component } from 'react'
import appConstants from '../AppConstants'
import muiThemeable from 'material-ui/styles/muiThemeable'

import FullStar from 'react-material-icons/icons/toggle/star'
import HalfStar from 'react-material-icons/icons/toggle/star-half'
import NoStar from 'react-material-icons/icons/toggle/star-border'

class Rating extends Component {

  render() {
    const rating = !isNaN(this.props.value) ? Number(this.props.value) : 0

    var stars = []

    for(var i = 1; i <= 5; i++)
        if(rating > i -0.75)
          if(rating > i - 0.25) stars[i] = <FullStar />
          else stars[i] = <HalfStar />
        else stars[i] = <NoStar />

    return (
      <div>{stars}</div>
    )

  }
}

export default muiThemeable()(Rating)
