import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAhu26OnRfP_UEHjY8Dr_eitWnHrDSdIKs',
      authDomain: 'course-manager-b16b6.firebaseapp.com',
      databaseURL: 'https://course-manager-b16b6.firebaseio.com',
      projectId: 'course-manager-b16b6',
      storageBucket: 'course-manager-b16b6.appspot.com',
      messagingSenderId: '714551409825'
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
