import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import { GlobalStyle } from './style';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <Header />
      </Provider>
    );
  }
  
}

export default App;
