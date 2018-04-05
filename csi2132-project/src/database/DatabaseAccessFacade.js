import DatabaseActions from '../redux/actions/DatabaseActions'

class DatabaseAccessFacade {
  constructor() {
    this.store = null
  }

  setStore = (store) => {
    this.store = store
  }

  fetchAllRestaurants = () => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRestaurant(this.store))
  }

  fetchRestaurant = (id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchRestaurant(id, this.store))
  }

  fetchAllMenuItems = (restaurantID) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllMenuItems(restaurantID, this.store))
  }

  fetchMenuItem = (restaurantID, id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchMenuItem(restaurantID, id, this.store))
  }

  fetchAllRatings = (restaurantID) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRatings(restaurantID, this.store))
  }

  fetchRating = (restaurantID, id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchRating(restaurantID, id, this.store))
  }

  fetchAllRestaurantsInCategory = (category) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRestaurantsInCategory(category, this.store))
  }

  fetchAllMenuItemsInCategory = (category) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllMenuItemsInCategory(category, this.store))
  }

  fetchAllRestaurantCategories = () => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRestaurantCategories(this.store))
  }

  fetchAllMenuItemCategories = () => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllMenuItemCategories(this.store))
  }

  fetchAllRaters = () => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRaters(this.store))
  }

  fetchRater = (id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchRater(id, this.store))
  }

  updateRestaurant = (id, data) => {
    if(this.store) this.store.dispatch(DatabaseActions.updateRestaurant(id, data, this.store))
  }

  updateMenuItem = (restaurantID, id, data) => {
    if(this.store) this.store.dispatch(DatabaseActions.updateMenuItem(restaurantID, id, data, this.store))
  }

  updateRating = (restaurantID, id, data) => {
    if(this.store) this.store.dispatch(DatabaseActions.updateRating(restaurantID, id, data, this.store))
  }

  updateProfile = (id, data) => {
    if(this.store) this.store.dispatch(DatabaseActions.updateProfile(id, data, this.store))
  }

  addRestaurant = (data) => {
    if(this.store) this.store.dispatch(DatabaseActions.addRestaurant(data, this.store))
  }

  addMenuItem = (restaurantID, data) => {
    if(this.store) this.store.dispatch(DatabaseActions.addMenuItem(restaurantID, data, this.store))
  }

  addRating = (restaurantID, data) => {
    if(this.store) this.store.dispatch(DatabaseActions.addRating(restaurantID, data, this.store))
  }

  addRater = (data) => {
    if(this.store) this.store.dispatch(DatabaseActions.addRater(data, this.store))
  }

  login = (data) => {
    if(this.store) this.store.dispatch(DatabaseActions.login(data, this.store))
  }

  deleteRestaurant = (id) => {
    if(this.store) this.store.dispatch(DatabaseActions.deleteRestaurant(id, this.store))
  }

  deleteMenuItem = (restaurantID, id) => {
    if(this.store) this.store.dispatch(DatabaseActions.deleteMenuItem(restaurantID, id, this.store))
  }

  deleteRating = (restaurantID, id) => {
    if(this.store) this.store.dispatch(DatabaseActions.deleteRating(restaurantID, id, this.store))
  }

  deleteRater = (id) => {
    if(this.store) this.store.dispatch(DatabaseActions.deleteRater(id, this.store))
  }
}

const DAF = new DatabaseAccessFacade()
export default DAF
