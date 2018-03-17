import React, { Component } from 'react'
import appConstants from '../AppConstants'
import HomePage from '../pages/HomePage'

class Page extends Component{
  render() {
    var state = this.props.store.getState()
    var page = null
    switch(state.app.page){
      case appConstants.PAGES.HOME:
        page = <HomePage store={this.props.store}/>
        break
      default:
        page = <HomePage store={this.props.store}/>
        break
    }
    return page
  }
}

export default Page
