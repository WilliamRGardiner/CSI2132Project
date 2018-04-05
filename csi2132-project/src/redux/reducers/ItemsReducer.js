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

    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS+"_FULFILLED":
      newState.restaurant = { fetching: false, list: action.payload.data, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RESTAURANT+"_FULFILLED":
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RESTAURANTS_IN_CATEGORY+"_FULFILLED":
      newState.restaurant = { fetching: false, list: action.payload.data, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATINGS+"_FULFILLED":
      newState.rating = { fetching: false, list: action.payload.data, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RATING+"_FULFILLED":
      newState.rating = { ...newState.rating, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS+"_FULFILLED":
      newState.menuItem = { fetching: false, list: action.payload.data, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM+"_FULFILLED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEMS_IN_CATEGORY+"_FULFILLED":
      newState.menuItem = { fetching: false, list: action.payload.data, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_MENU_ITEM_RATINGS+"_FULFILLED":
      newState.menuItemRating = { fetching: false, list: action.payload.data, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_MENU_ITEM_RATING+"_FULFILLED":
      newState.menuItemRating = { ...newState.menuItemRating, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATERS+"_FULFILLED":
      newState.rater = { fetching: false, list: action.payload.data, selected: null }
      break
    case DatabaseActions.ACTIONS.FETCH_RATER+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.FETCH_ALL_RATING_REVIEWS+"_FULFILLED":
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

    case DatabaseActions.ACTIONS.UPDATE_RESTAURANT+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM+"_FULFILLED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.UPDATE_RATING+"_FULFILLED":
      break
    case DatabaseActions.ACTIONS.UPDATE_MENU_ITEM_RATING+"_FULFILLED":
      break
    case DatabaseActions.ACTIONS.UPDATE_RATER+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.UPDATE_LOCAITON+"_FULFILLED":
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

    case DatabaseActions.ACTIONS.ADD_RESTAURANT+"_FULFILLED":
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM+"_FULFILLED":
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.ADD_RATING+"_FULFILLED":
      break
    case DatabaseActions.ACTIONS.ADD_MENU_ITEM_RATING+"_FULFILLED":
      break
    case DatabaseActions.ACTIONS.ADD_RATER+"_FULFILLED":
      newState.rater = { ...newState.rater, fetching: false, selected: action.payload.data }
      break
    case DatabaseActions.ACTIONS.ADD_LOCAITON+"_FULFILLED":
      break

    case ItemsActions.ACTIONS.SET_RESTAURANT:
      newState.restaurant = { ...newState.restaurant, fetching: false, selected: action.payload.data }
      break
    case ItemsActions.ACTIONS.SET_MENU_ITEM:
      newState.menuItem = { ...newState.menuItem, fetching: false, selected: action.payload.data }
      break

    default:
      break
  }
  return newState
}
