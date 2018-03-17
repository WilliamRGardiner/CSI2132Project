const ACTION_TYPES = {
    SET: "SET_SEARCH_STRING",
    CLR: "CLEAR_SEARCH_STRING",
    OPEN: "ACCOUNT_POPOVER_OPEN",
    CLOSE: "ACCOUNT_POPOVER_CLOSE",
    SELECT: "ACCOUNT_OPITON_SELECT",
    UPDATE_USERNAME: "UPDATE_LOGIN_USERNAME",
    UPDATE_PASSWORD: "UPDATE_LOGIN_PASSWORD",
    OPEN_SIGN_IN: "OPEN_SIGN_IN_DIALOG",
    CLOSE_SIGN_IN: "CLOSE_SIGN_IN_DIALOG"
}

export default {
  ACTIONS: ACTION_TYPES,

  setSearchString: (payload) => {
    return { type: ACTION_TYPES.SET, payload }
  },

  clearSearch: () => {
    return { type: ACTION_TYPES.CLR }
  },

  openPopover: (payload) => {
    return { type: ACTION_TYPES.OPEN, payload }
  },

  closePopover: () => {
    return { type: ACTION_TYPES.CLOSE }
  },

  selectPopoverItem: (payload) => {
    return { type: ACTION_TYPES.SELECT, payload }
  },

  openSignInDialog: () => {
    return { type: ACTION_TYPES.OPEN_SIGN_IN }
  },

  closeSignInDialog: () => {
    return { type: ACTION_TYPES.CLOSE_SIGN_IN }
  },

  updateUsername: (payload) => {
    return { type: ACTION_TYPES.UPDATE_USERNAME, payload }
  },

  updatePassword: (payload) => {
    return { type: ACTION_TYPES.UPDATE_PASSWORD, payload }
  }

}
