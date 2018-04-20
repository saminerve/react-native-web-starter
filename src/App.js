/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { routerMiddleware, push, syncHistoryWithStore, routerReducer } from 'react-router-redux'

//import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Link } from './Routing';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(createBrowserHistory(), store)


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Text>This page is settings screen</Text>
        
      </View>
    );
  }
}


@connect(
  state => {},
  (dispatch, props) => {
    onPush: (link) => {
      dispatch(push(link))
    }
  })
class Navigation extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}

        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      
          <Button
            onPress={() => onPush('/')}
            title="Home"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />

          <Button
            onPress={() => onPush('/settings')}
            title="Settings"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
      </View>
      </View>
    );
  }
}

const Application = () => (
  <Provider store={store}>
    <Router>
      <Navigation>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/settings" component={SettingsScreen} />
        </Switch>
      </Navigation>
    </Router>
  </Provider>
)

export default Application

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
