import appConstants from '../../AppConstants'
import appActions from '../actions/AppActions'

import DatabaseActions from '../actions/DatabaseActions'
import ItemsActions from '../actions/ItemsActions'

export default (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS+"_PENDING":
      newState.restaurant = { fetching: true, list: [], selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_RESTAURANT+"_PENDING":
      newState.restaurant = { ...newState.restaurant, fetching: true, selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS_IN_CATEGORY+"_PENDING":
      newState.restaurant = { fetching: true, list: [], selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATINGS+"_PENDING":
      newState.rating = { fetching: true, list: [], selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_RATING+"_PENDING":
      newState.rating = { ...newState.rating, fetching: true, selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATING_REVIEWS+"_PENDING":
      newState.ratingReviews = { fetching: true, list: [] }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS+"_PENDING":
      newState.menuItem = { fetching: true, list: [], selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM+"_PENDING":
      newState.menuItem = { ...newState.menuItem, fetching: true, selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS_IN_CATEGORY+"_PENDING":
      newState.menuItem = { fetching: true, list: [], selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEM_RATINGS+"_PENDING":
      newState.menuItemRating = { fetching: true, list: [], selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM_RATING+"_PENDING":
      newState.menuItemRating = { ...newState.menuItemRating, fetching: true, selected: null };
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATERS+"_PENDING":
      newState.rater = { fetching: false, list: [], selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RATER+"_PENDING":
      newState.rater = { ...newState.rater, fetching: true, selected: null }
      break

    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS+"_RESOLVED":
      newState.restaurant = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RESTAURANT+"_RESOLVED":
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS_IN_CATEGORY+"_RESOLVED":
      newState.restaurant = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATINGS+"_RESOLVED":
      newState.rating = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RATING+"_RESOLVED":
      newState.rating = { ...newState.rating, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS+"_RESOLVED":
      newState.menuItem = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM+"_RESOLVED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS_IN_CATEGORY+"_RESOLVED":
      newState.menuItem = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEM_RATINGS+"_RESOLVED":
      newState.menuItemRating = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM_RATING+"_RESOLVED":
      newState.menuItemRating = { ...newState.menuItemRating, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATERS+"_RESOLVED":
      newState.rater = { fetching: false, list: action.payload, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RATER+"_RESOLVED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATING_REVIEWS+"_RESOLVED":
      newState.ratingReviews = { fetching: true, list: [] }
      break

    case DatabaseActions.ACTIONS.UPDATE_RESTAURANT+"_PENDING":
      newState.restaurant = { ...newState.restaurant, fetching: true }
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM+"_PENDING":
      newState.menuItem = { ...newState.menuItem, fetching: true }
      break
    case DatabaseActions.ACTIONS.UPDATE_RATING+"_PENDING":
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM_RATING+"_PENDING":
      break
    case DatabaseActions.ACTIONS.UPDATE_RATER+"_PENDING":
      newState.rater = { ...newState.rater, fetching: true }
      break
    case DatabaseActions.ACTIONS.UPDATE_LOCAITON+"_PENDING":
      break

    case DatabaseActions.ACTIONS.UPDATE_RESTAURANT+"_RESOLVED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM+"_RESOLVED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.UPDATE_RATING+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM_RATING+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.UPDATE_RATER+"_RESOLVED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.UPDATE_LOCAITON+"_RESOLVED":
      break

    case DatabaseActions.ACTIONS.ADD_RESTAURANT+"_PENDING":
      newState.restaurant = { ...newState.restaurant, fetching: true }
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM+"_PENDING":
      newState.menuItem = { ...newState.menuItem, fetching: true }
      break
    case DatabaseActions.ACTIONS.ADD_RATING+"_PENDING":
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM_RATING+"_PENDING":
      break
    case DatabaseActions.ACTIONS.ADD_RATER+"_PENDING":
      newState.rater = { ...newState.rater, fetching: true }
      break
    case DatabaseActions.ACTIONS.ADD_LOCAITON+"_PENDING":
      break

    case DatabaseActions.ACTIONS.ADD_RESTAURANT+"_RESOLVED":
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM+"_RESOLVED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.ADD_RATING+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM_RATING+"_RESOLVED":
      break
    case DatabaseActions.ACTIONS.ADD_RATER+"_RESOLVED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload }
      break
    case DatabaseActions.ACTIONS.ADD_LOCAITON+"_RESOLVED":
      break

    case ItemsActions.ACTIONS.SET_RESTAURANT:
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload }
      break
    case ItemsActions.ACTIONS.SET_MENU_ITEM:
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload }
      break

    default:
      break
  }
  return newState
}
