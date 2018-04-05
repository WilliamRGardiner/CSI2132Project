import appConstants from '../../AppConstants'
import appActions from '../actions/AppActions'

import DatabaseActions from '../actions/DatabaseActions'

export default (state, action) => {
  console.log(state)
  console.log(action)
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS+"_PENDING":
      newState.restaurant = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_RESTAURANT+"_PENDING":
      newState.restaurant = { ...newState.restaurant, fetching: true, selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS+"_PENDING":
      newState.menuItem = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM+"_PENDING":
      newState.menuItem = { ...newState.menuItem, fetching: true, selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATINGS+"_PENDING":
      newState.rating = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_RATING+"_PENDING":
      newState.rating = { ...newState.rating, fetching: true, selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS_IN_CATEGORY+"_PENDING":
      newState.restaurant = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS_IN_CATEGORY+"_PENDING":
      newState.menuItem = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANT_CATEGORIES+"_PENDING":
      newState.restaurantCategory = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEM_CATEGORIES+"_PENDING":
      newState.menuItemCategory = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATERS+"_PENDING":
      newState.rater = { fetching: true, list: [], selected: null }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_RATER+"_PENDING":
      newState.rater = { ...newState.rater, fetching: true, selected: null }
      return newState
      break
<<<<<<< HEAD
    case DatabaseActions.ACTIONS.UPDATE_RESTAURANT+"_PENDING":
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM+"_PENDING":
      break
    case DatabaseActions.ACTIONS.UPDATE_RATING+"_PENDING":
      break
    case DatabaseActions.ACTIONS.UPDATE_PROFILE+"_PENDING":
      break
    case DatabaseActions.ACTIONS.ADD_RESTAURANT+"_PENDING":
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM+"_PENDING":
      break
    case DatabaseActions.ACTIONS.ADD_RATING+"_PENDING":
      break
    case DatabaseActions.ACTIONS.ADD_RATER+"_PENDING":
      break
    case DatabaseActions.ACTIONS.LOGIN+"_PENDING":
      break
    case DatabaseActions.ACTIONS.DELETE_RESTAURANT+"_PENDING":
      break
    case DatabaseActions.ACTIONS.DELETE_MENU_ITEM+"_PENDING":
=======

    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS+"_FULFILLED":
      newState.restaurant = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RESTAURANT+"_FULFILLED":
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS_IN_CATEGORY+"_FULFILLED":
      newState.restaurant = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATINGS+"_FULFILLED":
      newState.rating = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RATING+"_FULFILLED":
      newState.rating = { ...newState.rating, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS+"_FULFILLED":
      newState.menuItem = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM+"_FULFILLED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS_IN_CATEGORY+"_FULFILLED":
      newState.menuItem = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEM_RATINGS+"_FULFILLED":
      newState.menuItemRating = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM_RATING+"_FULFILLED":
      newState.menuItemRating = { ...newState.menuItemRating, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATERS+"_FULFILLED":
      newState.rater = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RATER+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATING_REVIEWS+"_FULFILLED":
      newState.ratingReviews = { fetching: true, list: [] }
>>>>>>> f4eb1d843e84b1e9fc99ef20afe46f829773d3da
      break
    case DatabaseActions.ACTIONS.DELETE_RATING+"_PENDING":
      break
    case DatabaseActions.ACTIONS.DELETE_RATER+"_PENDING":
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS+"_RESOLVED":
      newState.restaurant = { ...newState.restaurant, fetching: false, list: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_RESTAURANT+"_RESOLVED":
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS+"_RESOLVED":
      newState.menuItem = { ...newState.menuItem, fetching: false, list: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM+"_RESOLVED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
      return newState
      break
<<<<<<< HEAD
    case DatabaseActions.ACTIONS.FETCH_ALL_RATINGS+"_RESOLVED":
      newState.rating = { ...newState.rating, fetching: false, list: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_RATING+"_RESOLVED":
      newState.rating = { ...newState.rating, fetching: false, selected: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS_IN_CATEGORY+"_RESOLVED":
      newState.restaurant = { ...newState.restaurant, fetching: false, list: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS_IN_CATEGORY+"_RESOLVED":
      newState.menuItem = { ...newState.menuItem, fetching: false, list: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANT_CATEGORIES+"_RESOLVED":
      newState.restaurantCategory = { ...newState.restaurantCategory, fetching: false, list: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEM_CATEGORIES+"_RESOLVED":
      newState.menuItemCategory = { ...newState.menuItemCategory, fetching: false, list: action.payload }
      return newState
=======

    case DatabaseActions.ACTIONS.UPDATE_RESTAURANT+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM+"_FULFILLED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.UPDATE_RATING+"_FULFILLED":
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM_RATING+"_FULFILLED":
      break
    case DatabaseActions.ACTIONS.UPDATE_RATER+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.UPDATE_LOCAITON+"_FULFILLED":
>>>>>>> f4eb1d843e84b1e9fc99ef20afe46f829773d3da
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATERS+"_RESOLVED":
      newState.rater = { ...newState.rater, fetching: false, list: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.FETCH_RATER+"_RESOLVED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      return newState
      break
    case DatabaseActions.ACTIONS.UPDATE_RESTAURANT+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.UPDATE_RATING+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.UPDATE_PROFILE+"_RESOLVED":
      break
<<<<<<< HEAD
    case DatabaseActions.ACTIONS.ADD_RESTAURANT+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM+"_RESOLVED":
=======

    case DatabaseActions.ACTIONS.ADD_RESTAURANT+"_FULFILLED":
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM+"_FULFILLED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
>>>>>>> f4eb1d843e84b1e9fc99ef20afe46f829773d3da
      break
    case DatabaseActions.ACTIONS.ADD_RATING+"_FULFILLED":
      break
<<<<<<< HEAD
    case DatabaseActions.ACTIONS.ADD_RATER+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.LOGIN+"_RESOLVED":
=======
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM_RATING+"_FULFILLED":
      break
    case DatabaseActions.ACTIONS.ADD_RATER+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.ADD_LOCAITON+"_FULFILLED":
>>>>>>> f4eb1d843e84b1e9fc99ef20afe46f829773d3da
      break
    case DatabaseActions.ACTIONS.DELETE_RESTAURANT+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.DELETE_MENU_ITEM+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.DELETE_RATING+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.DELETE_RATER+"_RESOLVED":
      break
    default:
      return JSON.parse(JSON.stringify(state))
      break
  }
}
