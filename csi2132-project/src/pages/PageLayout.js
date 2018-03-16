import React, { Component } from 'react';
import TestActions from '../redux/actions/TestActions';

import DisplayValue from './DisplayValue';

class PageLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.store.subscribe(this.setState.bind(this, {}));
  }

  dispatch = (action) => {
    console.log(action, this.props.store.getState());
    this.props.store.dispatch(action);
  }

  render() {
    var state = this.props.store.getState();
    return (
      <div>
        <div> {+state.value} </div>
        <button type="button" onClick={this.dispatch.bind(this, TestActions.increment())}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default PageLayout;
