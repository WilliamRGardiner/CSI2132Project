const ACTION_TYPES = {
    LOGOUT: "LOGOUT",
    SIGN_IN_ATTEMPT: "SIGN_IN_ATTEMPT",
    SET_PAGE: "SET_PAGE",
    SET_RESTAURANT_CATEGORY: "SET_RESTAURANT_CATEGORY",
    SET_MENU_ITEM_CATEGORY: "SET_MENU_ITEM_CATEGORY",
    OPEN_UPDATE_RATER: "OPEN_UPDATE_RATER"
}

export default {
  ACTIONS: ACTION_TYPES,

  logout: () => {
    return { type: ACTION_TYPES.LOGOUT }
  },

  signIn: () => {
    return { type: ACTION_TYPES.SIGN_IN_ATTEMPT }
  },

  setPage: (payload) => {
    return { type: ACTION_TYPES.SET_PAGE, payload }
  },

  setRestaurantCategory: (payload) => {
    return { type: ACTION_TYPES.SET_RESTAURANT_CATEGORY, payload}
  },

  setMenuItemCategory: (payload) => {
    return { type: ACTION_TYPES.SET_MENU_ITEM_CATEGORY, payload}
  },

  openUpdateRater: (payload) => {
    return { type: ACTION_TYPES.OPEN_UPDATE_RATER, payload }
  }

}
