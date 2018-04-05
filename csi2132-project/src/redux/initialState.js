import appConstants from '../AppConstants';

export default {
  app: {
    user: null,
    page: appConstants.PAGES.HOME,
  },
  items: {
    restaurant: { fetching: false, list: [], selected: null },
    rating: { fetching: false, list: [], selected: null },
    menuItem: { fetching: false, list: [], selected: null },
    menuItemRating: { fetching: false, list: [], selected: null },
    rater: { fetching: false, list: [], selected: null }
  },
  navbar: {
    searchString: "",
    dataSource: [],
    popoverOpen: false,
    popoverAnchor: null,
    signInOpen: false,
    username: "",
    password: "",
    signInError: false
  },
  adder: {
    open: null,
    object: {}
  }
};
