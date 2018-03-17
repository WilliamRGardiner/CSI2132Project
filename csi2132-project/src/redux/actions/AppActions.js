const ACTION_TYPES = {
    LOGOUT: "LOGOUT",
    SIGN_IN_ATTEMPT: "SIGN_IN_ATTEMPT"
};

export default {
  ACTIONS: ACTION_TYPES,

  logout: () => {
    return { type: ACTION_TYPES.LOGOUT };
  },

  signIn: () => {
    return { type: ACTION_TYPES.SIGN_IN_ATTEMPT };
  }

};
