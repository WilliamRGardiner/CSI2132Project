import Database from '../../database/Mockdatabase'
import axios from 'axios'

const ACTION_TYPES = {
    FETCH_ALL_RESTAURANTS: "FETCH_ALL_RESTAURANTS",
    FETCH_RESTAURANT: "FETCH_RESTAURANT",
    FETCH_ALL_MENU_ITEMS: "FETCH_ALL_MENU_ITEMS",
    FETCH_MENU_ITEM: "FETCH_MENU_ITEM",
    FETCH_ALL_RATINGS: "FETCH_ALL_RATINGS",
    FETCH_RATING: "FETCH_RATING",
    FETCH_ALL_RESTAURANTS_IN_CATEGORY: "FETCH_ALL_RESTAURANTS_IN_CATEGORY",
    FETCH_ALL_MENU_ITEMS_IN_CATEGORY: "FETCH_ALL_MENU_ITEMS_IN_CATEGORY",
    FETCH_ALL_RESTAURANT_CATEGORIES: "FETCH_ALL_RESTAURANT_CATEGORIES",
    FETCH_ALL_MENU_ITEM_CATEGORIES: "FETCH_ALL_MENU_ITEM_CATEGORIES",
    FETCH_ALL_RATERS: "FETCH_ALL_RATERS",
    FETCH_RATER: "FETCH_RATER",
    UPDATE_RESTAURANT: "UPDATE_RESTAURANT",
    UPDATE_MENU_ITEM: "UPDATE_MENU_ITEM",
    UPDATE_RATING: "UPDATE_RATING",
    UPDATE_PROFILE: "UPDATE_PROFILE",
    ADD_RESTAURANT: "ADD_RESTAURANT",
    ADD_MENU_ITEM: "ADD_MENU_ITEM",
    ADD_RATING: "ADD_RATING",
    ADD_RATER: "ADD_RATER",
    LOGIN: "LOGIN",
    DELETE_RESTAURANT: "DELETE_RESTAURANT",
    DELETE_MENU_ITEM: "DELETE_MENU_ITEM",
    DELETE_RATING: "DELETE_RATING",
    DELETE_RATER: "DELETE_RATER"
}

export default {
  ACTIONS: ACTION_TYPES,

  fetchAllRestaurants: (store) => {
<<<<<<< HEAD
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_RESTAURANTS + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_RESTAURANTS + '_RESOLVED', payload: Database.get('/restaurants') }
  },

  fetchRestaurant: (id, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_RESTAURANT + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_RESTAURANT + '_RESOLVED', payload: Database.get('/restaurants/'+id) }
  },

  fetchAllMenuItems: (restaurantID, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS + '_RESOLVED', payload: Database.get('/restaurant/'+restaurantID+'/menuItem') }
  },

  fetchMenuItem: (restaurantID, id, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_MENU_ITEM + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_MENU_ITEM + '_RESOLVED', payload: Database.get('/restaurant/'+restaurantID+'/menuItem/'+id)}
  },

  fetchAllRatings: (restaurantID, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_RATINGS + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_RATINGS + '_RESOLVED', payload: Database.get('/restaurant/'+restaurantID+'/rating')}
  },

  fetchRating: (restaurantID, id, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_RATING + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_RATING + '_RESOLVED', payload: Database.get('/restaurant/'+restaurantID+'/rating/'+id)}
  },

  fetchAllRestaurantsInCategory: (category, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_RESTAURANTS_IN_CATEGORY + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_RESTAURANTS_IN_CATEGORY + '_RESOLVED', payload: Database.get('/category/'+category+'/restaurant/')}
  },

  fetchAllMenuItemsInCategory: (category, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS_IN_CATEGORY + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEMS_IN_CATEGORY + '_RESOLVED', payload: Database.get('/category/'+category+'/menuItem/')}
=======
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
>>>>>>> f4eb1d843e84b1e9fc99ef20afe46f829773d3da
  },

  fetchAllRestaurantCategories: (store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_RESTAURANT_CATEGORIES + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_RESTAURANT_CATEGORIES + '_RESOLVED', payload: Database.get('/category/restaurant')}
  },

  fetchAllMenuItemCategories: (store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_RESTAURANT_CATEGORIES + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_MENU_ITEM_CATEGORIES + '_RESOLVED', payload: Database.get('/category/menuItem')}
  },

  fetchAllRaters: (store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_ALL_RATERS + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_ALL_RATERS + '_RESOLVED', payload: Database.get('/rater')}

  },

  fetchRater: (id, store) => {
    store.dispatch({ type: ACTION_TYPES.FETCH_RATER + '_PENDING' })
    return { type: ACTION_TYPES.FETCH_RATER + '_RESOLVED', payload: Database.get('/rater/'+id)}
  },

  updateRestaurant: (id, data, store) => {
    store.dispatch({ type: ACTION_TYPES.UPDATE_RESTAURANT + '_PENDING' })
    return { type: ACTION_TYPES.UPDATE_RESTAURANT + '_RESOLVED', payload: Database.put('/restaurant/'+id, data)}
  },

  updateMenuItem: (restaurantID, id, data, store) => {
    store.dispatch({ type: ACTION_TYPES.UPDATE_MENU_ITEM + '_PENDING' })
    return { type: ACTION_TYPES.UPDATE_MENU_ITEM + '_RESOLVED', payload: Database.put('/restaurant/'+restaurantID+'/menuItem/'+id, data)}
  },

  updateRating: (restaurantID, id, data, store) => {
    store.dispatch({ type: ACTION_TYPES.UPDATE_RATING + '_PENDING' })
    return { type: ACTION_TYPES.UPDATE_RATING + '_RESOLVED', payload: Database.put('/restaurant/'+restaurantID+'/rating/'+id, data)}
  },

  updateProfile: (id, data, store) => {
    store.dispatch({ type: ACTION_TYPES.UPDATE_PROFILE + '_PENDING' })
    return { type: ACTION_TYPES.UPDATE_PROFILE + '_RESOLVED', payload: Database.put('/rater/'+id, data)}
  },

  addRestaurant: (data, store) => {
    store.dispatch({ type: ACTION_TYPES.ADD_RESTAURANT + '_PENDING' })
    return { type: ACTION_TYPES.ADD_RESTAURANT + '_RESOLVED', payload: Database.post('/restaurant', data)}
  },

  addMenuItem: (restaurantID, data, store) => {
    store.dispatch({ type: ACTION_TYPES.ADD_MENU_ITEM + '_PENDING' })
    return { type: ACTION_TYPES.ADD_MENU_ITEM + '_RESOLVED', payload: Database.post('/restaurant/'+restaurantID+'/menuItem', data)}
  },

  addRating: (restaurantID, data, store) => {
    store.dispatch({ type: ACTION_TYPES.ADD_RATING + '_PENDING' })
    return { type: ACTION_TYPES.ADD_RATING + '_RESOLVED', payload: Database.post('/restaurant/'+restaurantID+'/rating', data)}
  },

  addRater: (data, store) => {
    store.dispatch({ type: ACTION_TYPES.ADD_RATER + '_PENDING' })
    return { type: ACTION_TYPES.ADD_RATER + '_RESOLVED', payload: Database.post('/rater', data)}
  },

  login: (data, store) => {
    store.dispatch({ type: ACTION_TYPES.LOGIN + '_PENDING' })
    return { type: ACTION_TYPES.LOGIN + '_RESOLVED', payload: Database.post('/login', data)}
  },

  deleteRestaurant: (id, store) => {
    store.dispatch({ type: ACTION_TYPES.DELETE_RESTAURANT + '_PENDING' })
    return { type: ACTION_TYPES.DELETE_RESTAURANT + '_RESOLVED', payload: Database.del('/restaurant/'+id)}
  },

  deleteMenuItem: (restaurantID, id, store) => {
    store.dispatch({ type: ACTION_TYPES.DELETE_MENU_ITEM + '_PENDING' })
    return { type: ACTION_TYPES.DELETE_MENU_ITEM + '_RESOLVED', payload: Database.del('/restaurant/'+restaurantID+'/menuItem/'+id)}
  },

  deleteRating: (restaurantID, id, store) => {
    store.dispatch({ type: ACTION_TYPES.DELETE_RATING + '_PENDING' })
    return { type: ACTION_TYPES.DELETE_RATING + '_RESOLVED', payload: Database.del('/restaurant/'+restaurantID+'/rating/'+id)}
  },

  deleteRater: (id, store) => {
    store.dispatch({ type: ACTION_TYPES.DELETE_RATER + '_PENDING' })
    return { type: ACTION_TYPES.DELETE_RATER + '_RESOLVED', payload: Database.del('/rater/'+id)}
  }
}
