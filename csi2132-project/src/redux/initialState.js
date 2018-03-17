import appConstants from '../AppConstants';

export default {
  app: {
    user: null,
    page: appConstants.PAGES.HOME
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
