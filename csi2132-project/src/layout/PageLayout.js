import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Page from './Page'
import Paper from 'material-ui/Paper'

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
      <div style={{width: "1200px", margin: "auto"}}>
        <CustomAppBar store={this.props.store}/>

        <Paper style={{padding: "20px"}}>
          <Page store={this.props.store}/>
        </ Paper>
      </div>
    )
  }
}

export default muiThemeable()(PageLayout)
