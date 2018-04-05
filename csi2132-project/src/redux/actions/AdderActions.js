const ACTION_TYPES = {
    OPEN_ADD_RESTAURANT: "OPEN_ADD_RESTAURANT",
    OPEN_ADD_MENU_ITEM: "OPEN_ADD_MENU_ITEM",
    OPEN_ADD_RATING: "OPEN_ADD_RATING",
    OPEN_ADD_LOCATION: "OPEN_ADD_LOCATION",
    CLOSE_ADDER: "CLOSE_ADDER",
    SUBMIT: "SUBMIT_ADD_RESTAURANT",
    UPDATE_FIELD: "UPDATE_FIELD"
}

export default {
  ACTIONS: ACTION_TYPES,

  openAddRestaurant: () => {
    return { type: ACTION_TYPES.OPEN_ADD_RESTAURANT, payload: "" }
  },

  openAddMenuItem: (payload) => {
    return { type: ACTION_TYPES.OPEN_ADD_MENU_ITEM, payload }
  },

  openAddLocation: (payload) => {
    return { type: ACTION_TYPES.OPEN_ADD_LOCATION, payload }
  },

  openAddRating: (user, restaurant, menuItem) => {
    return { type: ACTION_TYPES.OPEN_ADD_RATING, payload: { user, restaurant, menuItem}}
  },

  closeAdder: () => {
    return { type: ACTION_TYPES.CLOSE_ADDER, payload: "" }
  },

  submitAdder: () => {
    return { type: ACTION_TYPES.SUBMIT, payload: "" }
  },

  updateObjectField: (field, value) => {
    return { type: ACTION_TYPES.UPDATE_FIELD, payload: { field, value }}
  }
}
