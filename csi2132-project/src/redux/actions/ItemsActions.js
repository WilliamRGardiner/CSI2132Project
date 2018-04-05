const ACTION_TYPES = {
    SET_RESTAURANT_CATEGORY: "SET_RESTAURANT_CATEGORY",
    SET_MENU_ITEM_CATEGORY: "SET_MENU_ITEM_CATEGORY"
}

export default {
  ACTIONS: ACTION_TYPES,

  setRestaurantCategory: (payload) => {
    return { type: ACTION_TYPES.SET_RESTAURANT_CATEGORY, payload}
  },

  setMenuItemCategory: (payload) => {
    return { type: ACTION_TYPES.SET_MENU_ITEM_CATEGORY, payload}
  }

}
