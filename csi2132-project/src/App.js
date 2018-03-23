import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './Theme'

//Redux
import { Provider } from 'react-redux'
import Store from './redux/Store'

//Layout
import PageLayout from './layout/PageLayout'

//Database
import DatabaseAccessFacade from './database/DatabaseAccessFacade'

class App extends Component {
  constructor(props) {
    super(props)
    DatabaseAccessFacade.setStore(Store)
  }

  render() {
    console.log(Store)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Provider  store={Store}>
          <PageLayout store={Store}/>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
