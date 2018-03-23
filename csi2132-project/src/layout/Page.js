import React, { Component } from 'react'
import appConstants from '../AppConstants'

//Pages
import HomePage from '../pages/HomePage'
import RestaurantCategories from '../pages/RestaurantCategories'
import MenuItemCategories from '../pages/MenuItemCategories'

class Page extends Component{
  render() {
    var state = this.props.store.getState()
    var page = null
    switch(state.app.page){
      case appConstants.PAGES.HOME:
        page = <HomePage store={this.props.store}/>
        break
      case appConstants.PAGES.RESTAURANT_CATEGORIES:
        page = <RestaurantCategories store={this.props.store}/>
        break
      case appConstants.PAGES.MENU_ITEM_CATEGORIES:
        page = <MenuItemCategories store={this.props.store}/>
        break
      default:
        page = <HomePage store={this.props.store}/>
        break
    }
    return page
  }
}

export default Page
