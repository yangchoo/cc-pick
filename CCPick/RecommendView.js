/**
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

const styles = require('./styles.js');
const ListItem = require('./app/components/ListItem');
var ccData = require('./app/constants/db.json');

import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from './app/constants/Firebase'
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
const USE_LOCAL = true

export default class RecommendView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2
      }),
      cardChosen: 'unknown'
    }
    this.itemsRef = firebaseApp.database().ref();
  };

  _navigate() {
    this.props.navigator.push({
      title: 'Main', // Matches route.name
    })
  }

  _renderItem(card) {
    return (
      <ListItem
        card={card}
        chosen={card["title"] == this.state.cardChosen}
        onPress={() => {
          this.setState({cardChosen: card["title"]})
        }}
      />
    );
  }

  listenAndSortCards(itemsRef) {
    if (USE_LOCAL) {
      this.sortCards(ccData)
    } else {
      itemsRef.on('value', (snap) => {
        this.sortCards(snap.val())
      })
    }
  }

  sortCards(ccData) {
    var dataToBeReturned = [];
    var category = this.props.category;
    var cost = this.props.cost;
    var cashBack = ccData.map(function (card) {
      var rewards = card.rewards;
      if (!(category in rewards)) category = "default";
      return {
        title: card["title"],
        cashback: (rewards[category] * cost)
      }
    });
    cashBack.sort(function (a, b) {
      return b['cashback'] - a['cashback']
    });
    cashBack.map(function (card) {
      dataToBeReturned.push(card)
    });
    this.setState({cardChosen: dataToBeReturned[0]["title"]});
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(dataToBeReturned)
    })
  }

  componentDidMount() {
    this.listenAndSortCards(this.itemsRef)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            style={styles.listview}
          />
        </View>
        <View style={styles.navBar}>
          <TouchableHighlight onPress={() => {
            this._navigate()
          }}>
            <Text style={styles.next}>
              Use {this.state.cardChosen}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
