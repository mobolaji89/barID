import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBMpoXdfxHKVeTs4JcdkZN7rnk0KdDyiec',
      authDomain: 'barid-d2840.firebaseapp.com',
      databaseURL: 'https://barid-d2840.firebaseio.com',
      storageBucket: 'barid-d2840.appspot.com',
      messagingSenderId: '742891989864'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

// CHANGE THE FIREBASE API TO OUR OWN CREDENTIALS
