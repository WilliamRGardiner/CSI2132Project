import Database from '../../database/Mockdatabase'
import axios from 'axios'

const ADDRESS="http://localhost:8080"

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

  fetchAllRestaurants: () => {
    return { type: ACTION_TYPES.FETCH_ALL_RESTAURANTS, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get")}
  },

  fetchRestaurant: (id) => {
    return { type: ACTION_TYPES.FETCH_RESTAURANT, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get/"+id)}
  },

  fetchAllRestaurantsInCategory: (category) => {
    return { type: ACTION_TYPES.FETCH_ALL_RESTAURANTS_IN_CATEGORY, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/category/get/"+category+"/restaurant") }
  },

  fetchAllRatings: (restaurantID) => {
    return { type: ACTION_TYPES.FETCH_ALL_RATINGS, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/rating") }
  },

  fetchRating: (restaurantID, userID, date, id) => {
    return { type: ACTION_TYPES.FETCH_RATING, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/rating"+userID+"/"+date) }
  },

  fetchAllRatingVotes: (restaurantID) => {
    return { type: ACTION_TYPES.FETCH_RATING, payload: axios.get() }
  },

  fetchAllMenuItems: (restaurantID) => {
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/menuItem") }
  },

  fetchMenuItem: (restaurantID, id) => {
    return { type: ACTION_TYPES.FETCH_MENU_ITEM, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/menuItem/"+id) }
  },

  fetchAllMenuItemsInCategory: (category) => {
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS_IN_CATEGORY, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/category/get/"+category+"/menuItem") }
  },

  fetchAllMenuItemRatings: (restaurantID, menuItemID) => {
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEM_RATINGS, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/menuItem/"+menuItemID+"/rating") }
  },

  fetchMenuItemRating: (restaurantID, menuItemID, userID, date) => {
    return { type: ACTION_TYPES.FETCH_MENU_ITEM_RATING, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/restaurant/get/"+restaurantID+"/menuItem/"+menuItemID+"/rating/"+userID+"/"+date) }
  },

  fetchAllRaters: () => {
    return { type: ACTION_TYPES.FETCH_ALL_RATERS, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/rater/get") }
  },

  fetchRater: (id) => {
    return { type: ACTION_TYPES.FETCH_RATER, payload: axios.get(ADDRESS+"/RestaurantAPI/rest/rater/get/"+id) }
  },

  updateRestaurant: (data) => {
    return { type: ACTION_TYPES.UPDATE_RESTAURANT, payload: axios.put(ADDRESS+"/RestaurantAPI/rest/restaurant/UPDATE", data)}
  },

  updateMenuItem: (data) => {
    return { type: ACTION_TYPES.UPDATE_MENU_ITEM, payload:
    // axios({
    //   method: 'put',
    //   url: ADDRESS+"/RestaurantAPI/rest/menuItem/UPDATE",
    //   data: data,
    //   headers: {
    //     'accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // }) }
      axios.put(ADDRESS+"/RestaurantAPI/rest/menuItem/UPDATE", data)}
  },

  updateRating: (data) => {
    return { type: ACTION_TYPES.UPDATE_RATING, payload: axios.put(ADDRESS+"/RestaurantAPI/rest/rating/UPDATE", data)}
  },

  updateRatingVote: (data) => {
    return { type: ACTION_TYPES.UPDATE_RATING, payload: axios.put(ADDRESS+"/RestaurantAPI/rest/ratingVotes/UPDATE")}
  },

  updateMenuItemRating: (data) => {
    return { type: ACTION_TYPES.UPDATE_MENU_ITEM_RATING, payload: axios.put(ADDRESS+"/RestaurantAPI/rest/ratingItem/UPDATE", data)}
  },

  updateRater: (data) => {
    return { type: ACTION_TYPES.UPDATE_RATER, payload: axios.put(ADDRESS+"/RestaurantAPI/rest/rater/UPDATE", data)}
  },

  updateLocation: (data) => {
    return { type: ACTION_TYPES.UPDATE_LOCAITON, payload: axios.put(ADDRESS+"/RestaurantAPI/rest/location/UPDATE", data)}
  },

  addRestaurant: (data) => {
    return { type: ACTION_TYPES.ADD_RESTAURANT, payload: axios.post(ADDRESS+"/RestaurantAPI/rest/restaurant/ADD", data)}
  },

  addMenuItem: (data) => {
    return { type: ACTION_TYPES.ADD_MENU_ITEM, payload: axios.post(ADDRESS+"/RestaurantAPI/rest/menuItem/ADD", data)}
  },

  addRating: (data) => {
    return { type: ACTION_TYPES.ADD_RATING, payload: axios.post(ADDRESS+"/RestaurantAPI/rest/rating/ADD", data)}
  },

  addRatingVote: (data) => {
    return { type: ACTION_TYPES.ADD_RATING, payload: axios.post(ADDRESS+"/RestaurantAPI/rest/ratingVotes/ADD", data)}
  },

  addMenuItemRating: (data) => {
    return { type: ACTION_TYPES.ADD_MENU_ITEM_RATING, payload: axios.post(ADDRESS+"/RestaurantAPI/rest/ratingItem/ADD", data)}
  },

  addRater: (data) => {
    return { type: ACTION_TYPES.ADD_RATER, payload: axios.post(ADDRESS+"/RestaurantAPI/rest/rater/ADD", data)}
  },

  addLocation: (data) => {
    return { type: ACTION_TYPES.ADD_LOCAITON, payload: axios.post(ADDRESS+"/RestaurantAPI/rest/location/ADD", data)}
  },

  deleteRestaurant: (restaurantId) => {
    return { type: ACTION_TYPES.DELETE_RESTAURANT, payload: axios.delete(ADDRESS+"/RestaurantAPI/rest/restaurant/DELETE/"+restaurantId)}
  },

  deleteMenuItem: (menuItemID) => {
    return { type: ACTION_TYPES.DELETE_MENU_ITEM, payload: axios.delete(ADDRESS+"/RestaurantAPI/rest/menuItem/DELETE/"+menuItemID)}
  },

  deleteRating: (raterID, date, restaurantID) => {
    return { type: ACTION_TYPES.DELETE_RATING, payload: axios.delete(ADDRESS+"/RestaurantAPI/rest/rating/DELETE/"+raterID+"/"+date+"/"+restaurantID)}
  },

  deleteRatingVote: (userID, raterID, date, restaurantID) => {
    return { type: ACTION_TYPES.DELETE_RATING, payload: axios.delete(ADDRESS+"/RestaurantAPI/rest/ratingVotes/DELETE/"+userID+"/"+raterID+"/"+restaurantID+"/"+date)}
  },

  deleteMenuItemRating: (userID, date, itemID) => {
    return { type: ACTION_TYPES.DELETE_MENU_ITEM_RATING, payload: axios.delete(ADDRESS+"/RestaurantAPI/rest/ratingItem/DELETE/"+userID+"/"+date+"/"+itemID)}
  },

  deleteRater: (raterID) => {
    return { type: ACTION_TYPES.DELETE_RATER, payload: axios.delete(ADDRESS+"/RestaurantAPI/rest/rater/DELETE/"+raterID)}
  },

  deleteLocation: (locationID) => {
    return { type: ACTION_TYPES.DELETE_LOCAITON, payload: axios.delete(ADDRESS+"/RestaurantAPI/rest/location/DELETE/"+locationID)}
  },

  login: (data) => {
    return { type: ACTION_TYPES.LOGIN, payload: axios.post(ADDRESS+"/login", data)}
  }
}
