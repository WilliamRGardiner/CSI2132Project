import React, { Component } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Page from './Page'

//Redux
import TestActions from '../redux/actions/TestActions'

//Components
import CustomAppBar from '../components/CustomAppBar'

class PageLayout extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.store.subscribe(this.setState.bind(this, {}))
  }

  dispatch = (action) => {
    this.props.store.dispatch(action)
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
