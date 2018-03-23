import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Page from './Page'

//Components
import CustomAppBar from './CustomAppBar'

class PageLayout extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.store.subscribe(this.setState.bind(this, {}))
  }

  render() {
    var state = this.props.store.getState()
    return (
      <div>
        <CustomAppBar store={this.props.store}/>
        <Page store={this.props.store}/>
      </div>
    )
  }
}

export default muiThemeable()(PageLayout)
