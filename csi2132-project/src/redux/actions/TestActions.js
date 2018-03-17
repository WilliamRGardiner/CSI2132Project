const ACTION_TYPES = {
    INC: "INC",
    DEC: "DEC"
}

export default {
  ACTIONS: ACTION_TYPES,

  increment: () => {
    return { type: ACTION_TYPES.INC }
  },

  decrement: () => {
    return { type: ACTION_TYPES.DEC }
  }
}
