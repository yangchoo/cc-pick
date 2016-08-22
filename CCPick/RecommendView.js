/**
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableHighlight
} from 'react-native';

export default class RecommendView extends Component {
  constructor(props) {
    super(props);
  };

  _navigate(){
    this.props.navigator.push({
      title: 'Main', // Matches route.name
    })
  }

  render() {
    return (
      <View style={containerStyles.container}>
        <View style={containerStyles.body}>
          <View style={containerStyles.instructions}>
            <Text style={textStyles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={textStyles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
        </View>
        <View style={containerStyles.footer}>
          <TouchableHighlight onPress={() => this._navigate()}>
            <Text style={textStyles.next}>
              Home
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}



const textStyles = StyleSheet.create({
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
  next : {
    textAlign: 'center',
    fontSize: 16,
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
