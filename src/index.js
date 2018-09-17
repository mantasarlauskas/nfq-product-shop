import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer';
import Orders from './containers/OrdersContainer';
import OrderInfo from './containers/OrderInfoContainer';
import CurrentOrder from './containers/CurrentOrder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/order" component={CurrentOrder} />
        <Route path="/order/:id" component={OrderInfo} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
