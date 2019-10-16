import React from 'react';
import firebase from 'firebase';
import { firebaseConfig } from './firebase.config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/screens/router';

export default function App() {
    firebase.initializeApp(firebaseConfig);
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router />
        </Provider>
  );
}