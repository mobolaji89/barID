import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
      	<LoginForm />
      </Provider>
    );
  }
}

export default App;