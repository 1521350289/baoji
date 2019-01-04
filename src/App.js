import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import Banner from './common/banner';
import { GlobalStyle } from './style';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <Header />
        <Banner />
      </Provider>
    );
  }

}

export default App;
