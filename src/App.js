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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
