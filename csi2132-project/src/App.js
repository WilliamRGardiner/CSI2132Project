//React
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './Theme';

//Redux
import { Provider } from 'react-redux';
import Store from './redux/Store';

//Layout
import PageLayout from './pages/PageLayout';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(Store);
    return (
      <Provider>
        <MuiThemeProvider muiTheme={theme}>
          <PageLayout store={Store}/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
