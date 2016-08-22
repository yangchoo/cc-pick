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

class MainApp extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={containerStyles.container}>
        <View style={containerStyles.header}>
          <Text style={textStyles.welcome}>
            Header {this.props.title}
          </Text>
        </View>
        <View style={containerStyles.body}>
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
      return <MainView navigator={navigator} />
    }
    if (route.title == 'Recommend') {
      return <RecommendView navigator={navigator} />
    }
  }
}

const textStyles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  body: {
    flex: 5,
  },
  footer: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  picker: {
    width: 200,
  },
});

AppRegistry.registerComponent('CCPick', () => MainApp);
