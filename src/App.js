import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import Banner from './common/banner';
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Introduce from './pages/introduce';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <GlobalIcon />
            <Header />
            <Banner />
            <Route path='/' exact component={Home} />
            <Route path='/introduce' exact component={Introduce} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
