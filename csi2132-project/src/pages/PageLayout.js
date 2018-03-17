import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

//Redux
import TestActions from '../redux/actions/TestActions';

//Pages

//Components
import CustomAppBar from '../components/CustomAppBar';

class PageLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.store.subscribe(this.setState.bind(this, {}));
  }

  dispatch = (action) => {
    this.props.store.dispatch(action);
  }

  render() {
    var state = this.props.store.getState();
    console.log(state);
    return (
      <div>
        <CustomAppBar store={this.props.store}/>
        <span> {state.navbar.searchString} </span>
      </div>
    );
  }
}

export default muiThemeable()(PageLayout);
