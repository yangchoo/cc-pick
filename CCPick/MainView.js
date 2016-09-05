/**
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableHighlight,
  TextInput
} from 'react-native';

const styles = require('./styles.js');
const CatPicker = require('./app/components/CatPicker');
const CostInput = require('./app/components/CostInput');
var ccData = require('./app/constants/db.json');

import Button from './app/components/Button'

const route = {
  type: 'push',
  route: {
    key: 'about',
    title: 'About'
  }
}


export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'nothing',
      categories: [],
      cost: '0'
    }
  }

  static defaultProps ={
    title: "Main View",
  };

  _getCat() {
    var unique = {};
    var distinct = [];
    ccData.map(function(card) {
      var cat = Object.keys(card.rewards);
      for (var i in cat) {
        if( cat[i] != "default" && typeof(unique[cat[i]]) == "undefined"){
          distinct.push(cat[i]);
        }
        unique[cat[i]] = 0;
      }
    });
    this.setState({
        category: distinct[0]
      });
    return distinct
  }

  _navigate(){
    this.props.navigator.push({
      title: 'Recommend',
      passProps: {
        category: this.state.category,
        cost: this.state.cost
      }
    })
  }

  componentDidMount() {
    this.setState({
      categories: this._getCat()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <CostInput
            onChangeText={(cost) => {
                cost = cost.replace('$', '');
                this.setState({cost})
              }
            }
            value={"$" + this.state.cost}
          />
          <CatPicker
            categories={this.state.categories}
            selectedValue={this.state.category}
            onValueChange={(cat) => this.setState({category: cat})}
          />
        </View>
        <View style={styles.navBar}>
          <TouchableHighlight onPress={() => this._navigate()}>
            <Text style={styles.next}>
              Selected {this.state.category}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
