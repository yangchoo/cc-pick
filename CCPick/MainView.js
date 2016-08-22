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

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'food',
    }
  }

  static defaultProps ={
    title: "Main View",
  };

  _navigate(){
    this.props.navigator.push({
      title: 'Recommend', // Matches route.name
    })
  }

  render() {
    console.log(this);
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
          <View style={containerStyles.category}>
            <Picker
              style={containerStyles.picker}
              selectedValue={this.state.category}
              onValueChange={(cat) => this.setState({category: cat})}>
              <Picker.Item label="Food" value="food" />
              <Picker.Item label="Online" value="online" />
            </Picker>
          </View>
        </View>
        <View style={containerStyles.footer}>
          <TouchableHighlight onPress={() => this._navigate()}>
            <Text style={textStyles.next}>
              Selected {this.state.category}
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
