import React, { Component } from 'react'
import appConstants from '../AppConstants'

//Pages
import HomePage from '../pages/HomePage'
import RestaurantCategories from '../pages/RestaurantCategories'
import RestaurantList from '../pages/RestaurantList'
import Restaurant from '../pages/Restaurant'
import MenuItemCategories from '../pages/MenuItemCategories'
import MenuItemList from '../pages/MenuItemList'
import MenuItem from '../pages/MenuItem'
import Rater from '../pages/Rater'


class Page extends Component{
  render() {
    var state = this.props.store.getState()
    var page = null
    console.log(state.app.page)
    switch(state.app.page){
      case appConstants.PAGES.HOME:
        page = <HomePage store={this.props.store}/>
        break
      case appConstants.PAGES.RESTAURANT_CATEGORIES:
        page = <RestaurantCategories store={this.props.store}/>
        break
      case appConstants.PAGES.RESTAURANT_LIST:
        page = <RestaurantList store={this.props.store}/>
        break
      case appConstants.PAGES.RESTAURANT:
        page = <Restaurant store={this.props.store}/>
        break
      case appConstants.PAGES.MENU_ITEM_CATEGORIES:
        page = <MenuItemCategories store={this.props.store}/>
        break
      case appConstants.PAGES.MENU_ITEM_LIST:
        page = <MenuItemList store={this.props.store}/>
        break
      case appConstants.PAGES.MENU_ITEM:
        page = <MenuItem store={this.props.store}/>
        break
      case appConstants.PAGES.RATER:
        page = <Rater store={this.props.store}/>
        break
      default:
        page = <HomePage store={this.props.store}/>
        break
    }
    return page
  }
}

export default Page
