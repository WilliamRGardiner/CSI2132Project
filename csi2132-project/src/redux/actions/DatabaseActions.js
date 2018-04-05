import Database from '../../database/Mockdatabase'
import axios from 'axios'
//
const ACTION_TYPES = {
    FETCH_ALL_RESTAURANTS: "FETCH_ALL_RESTAURANTS",
    FETCH_RESTAURANT: "FETCH_RESTAURANT",
    FETCH_ALL_RESTAURANTS_IN_CATEGORY: "FETCH_ALL_RESTAURANTS_IN_CATEGORY",
    FETCH_ALL_RATINGS: "FETCH_ALL_RATINGS",
    FETCH_RATING: "FETCH_RATING",
    FETCH_ALL_MENU_ITEMS: "FETCH_ALL_MENU_ITEMS",
    FETCH_MENU_ITEM: "FETCH_MENU_ITEM",
    FETCH_ALL_MENU_ITEMS_IN_CATEGORY: "FETCH_ALL_MENU_ITEMS_IN_CATEGORY",
    FETCH_ALL_MENU_ITEM_RATINGS: "FETCH_ALL_MENU_ITEM_RATINGS",
    FETCH_MENU_ITEM_RATING: "FETCH_MENU_ITEM_RATING",
    FETCH_ALL_RATERS: "FETCH_ALL_RATERS",
    FETCH_RATER: "FETCH_RATER",
    FETCH_ALL_RATING_REVIEWS: "FETCH_ALL_RATING_REVIEWS",

    UPDATE_RESTAURANT: "UPDATE_RESTAURANT",
    UPDATE_MENU_ITEM: "UPDATE_MENU_ITEM",
    UPDATE_RATING: "UPDATE_RATING",
    UPDATE_MENU_ITEM_RATING: "UPDATE_MENU_ITEM_RATING",
    UPDATE_RATER: "UPDATE_RATER",
    UPDATE_LOCAITON: "UPDATE_LOCATION",

    ADD_RESTAURANT: "ADD_RESTAURANT",
    ADD_MENU_ITEM: "ADD_MENU_ITEM",
    ADD_RATING: "ADD_RATING",
    ADD_MENU_ITEM_RATING: "ADD_MENU_ITEM_RATING",
    ADD_RATER: "ADD_RATER",
    ADD_LOCAITON: "ADD_LOCATION",

    DELETE_RESTAURANT: "DELETE_RESTAURANT",
    DELETE_MENU_ITEM: "DELETE_MENU_ITEM",
    DELETE_RATING: "DELETE_RATING",
    DELETE_MENU_ITEM_RATING: "DELETE_MENU_ITEM_RATING",
    DELETE_RATER: "DELETE_RATER",
    DELETE_LOCAITON: "DELETE_LOCATION",

    LOGIN: "LOGIN"
}

export default {
  ACTIONS: ACTION_TYPES,

  fetchAllRestaurants: (store) => {
    return { type: ACTION_TYPES.FETCH_ALL_RESTAURANTS, payload: axios.get("/RestaurantAPI/rest/restaurant/get")}
  },

  fetchRestaurant: (id, store) => {
    return { type: ACTION_TYPES.FETCH_RESTAURANT, payload: axios.get("/RestaurantAPI/rest/restaurant/get/"+id)}
  },

  fetchAllRestaurantsInCategory: (category, store) => {
    return { type: ACTION_TYPES.FETCH_ALL_RESTAURANTS_IN_CATEGORY, payload: axios.get("/RestaurantAPI/rest/category/get/"+category+"/restaurant") }
  },

  fetchAllRatings: (restaurantID, store) => {
    return { type: ACTION_TYPES.FETCH_ALL_RATINGS, payload: axios.get("/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/rating") }
  },

  fetchRating: (restaurantID, userID, date, id, store) => {
    return { type: ACTION_TYPES.FETCH_RATING, payload: axios.get("/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/rating"+userID+"/"+date) }
  },

  fetchAllMenuItems: (restaurantID, store) => {
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS, payload: axios.get("/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/menuItem") }
  },

  fetchMenuItem: (restaurantID, id, store) => {
    return { type: ACTION_TYPES.FETCH_MENU_ITEM, payload: axios.get("/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/menuItem/"+id) }
  },

  fetchAllMenuItemsInCategory: (category, store) => {
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS_IN_CATEGORY + '_RESOLVED', payload: axios.get("/RestaurantAPI/rest/category/get/"+category+"/menuItem") }
  },

  fetchAllMenuItemRatings: (restaurantID, menuItemID, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_MENU_ITEM_RATINGS + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEM_RATINGS + '_RESOLVED', payload: Database.fetchAllMenuItemRatings(restaurantID, menuItemID) }
  },

  fetchMenuItemRating: (restaurantID, menuItemID, userID, date, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_MENU_ITEM_RATING + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_MENU_ITEM_RATING + '_RESOLVED', payload: Database.fetchMenuItemRating(restaurantID, menuItemID, userID, date) }
  },

  fetchAllRaters: (store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_RATERS + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_RATERS + '_RESOLVED', payload: Database.fetchAllRaters() }

  },

  fetchRater: (id, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_RATER + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_RATER + '_RESOLVED', payload: Database.fetchRater(id) }
  },

  login: (data, store) => {
    store.dispatch({ type: ACTION_TYPES.LOGIN + '_PENDING' })
    return { type: ACTION_TYPES.LOGIN + '_RESOLVED', payload: Database.login(data)}
  }
}
