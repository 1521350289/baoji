import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import Banner from './common/banner';
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIcon />
        <Header />
        <Banner />
      </Provider>
    );
  }

}

export default App;
