const ACTION_TYPES = {
    SET_RESTAURANT_CATEGORY: "SET_RESTAURANT_CATEGORY",
    SET_MENU_ITEM_CATEGORY: "SET_MENU_ITEM_CATEGORY",
    SET_RESTAURANT: "SET_RESTAURANT",
    SET_MENU_ITEM: "SET_MENU_ITEM"
}

export default {
  ACTIONS: ACTION_TYPES,

  setRestaurantCategory: (payload) => {
    return { type: ACTION_TYPES.SET_RESTAURANT_CATEGORY, payload}
  },

  setMenuItemCategory: (payload) => {
    return { type: ACTION_TYPES.SET_MENU_ITEM_CATEGORY, payload}
  },

  setRestaurant: (payload) => {
    return { type: ACTION_TYPES.SET_RESTAURANT, payload}
  },

  setMenuItem: (payload) => {
    return { type: ACTION_TYPES.SET_MENU_ITEM, payload}
  }
}
