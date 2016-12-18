import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      	<View>
      		<Text>
      			Hello
      		</Text>
      	</View>
      </Provider>
    );
  }
}

export default App;