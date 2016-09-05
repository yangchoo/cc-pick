/**
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import MainView from './MainView';
import RecommendView from './RecommendView';
const styles = require('./styles.js')
const StatusBar = require('./app/components/StatusBar');

class MainApp extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Credit Card Picker" />
        <View style={styles.body}>
          <Navigator
            initialRoute={{ title: 'Main'}}
            renderScene={ this.renderScene}
          />
        </View>
      </View>
    );
  }

  renderScene(route, navigator) {
    if (route.title == 'Main') {
      return <MainView navigator={navigator}{...route.passProps} />
    }
    if (route.title == 'Recommend') {
      return <RecommendView navigator={navigator}{...route.passProps} />
    }
  }
}

AppRegistry.registerComponent('CCPick', () => MainApp);
