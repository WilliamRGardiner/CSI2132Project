import DatabaseActions from '../redux/actions/DatabaseActions'

class DatabaseAccessFacade {
  constructor() {
    this.store = null
  }

  setStore = (store) => {
    this.store = store
  }

  fetchAllRestaurants = () => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRestaurants(this.store))
  }

  fetchRestaurant = (id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchRestaurant(id, this.store))
  }

  fetchAllRestaurantsInCategory = (category) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRestaurantsInCategory(category, this.store))
  }

  fetchAllRatings = (restaurantID) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRatings(restaurantID, this.store))
  }

  fetchRating = (restaurantID, userID, date, id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchRating(restaurantID, userID, date, id, this.store))
  }

  fetchAllMenuItems = (restaurantID) => {
    console.log(restaurantID)
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllMenuItems(restaurantID, this.store))
  }

  fetchMenuItem = (restaurantID, id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchMenuItem(restaurantID, id, this.store))
  }

  fetchAllMenuItemsInCategory = (category) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllMenuItemsInCategory(category, this.store))
  }

  fetchAllMenuItemRatings = (restaurantID, menuItemID) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllMenuItemRatings(restaurantID, menuItemID, this.store))
  }

  fetchMenuItemRating = (restaurantID, menuItemID, userID, date) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchMenuItemRating(restaurantID, menuItemID, userID, date, this.store))
  }

  fetchAllRaters = () => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchAllRaters(this.store))

  }

  fetchRater = (id) => {
    if(this.store) this.store.dispatch(DatabaseActions.fetchRater(id, this.store))
  }

  login = (data) => {
    if(this.store) this.store.dispatch(DatabaseActions.login(data, this.store))
  }
}

const DAF = new DatabaseAccessFacade()
export default DAF
