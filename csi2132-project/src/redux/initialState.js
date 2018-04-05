import appConstants from '../AppConstants';

export default {
  app: {
    user: null,
    page: appConstants.PAGES.HOME,
  },
  items: {
    restaurantCategory: { fetching: false, list: [], selected: null },
    menuItemCategory: { fetching: false, list: [], selected: null },
    restaurant: { fetching: false, list: [], selected: null },
    menuItem: { fetching: false, list: [], selected: null },
    rater: { fetching: false, list: [], selected: null },
    rating: { fetching: false, list: [], selected: null }
  },
  navbar: {
    searchString: "",
    dataSource: [],
    popoverOpen: false,
    popoverAnchor: null,
    signInOpen: false,
    username: "",
    password: ""
  }
};
