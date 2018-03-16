import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './redux/Store';

import PageLayout from './pages/PageLayout';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(Store);
    return (
      <Provider>
        <PageLayout store={Store}/>
      </Provider>
    );
  }
}

export default App;
