import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
  render() {
    var card = this.props.card
    var viewStyle = styles.li
    if (this.props.chosen) viewStyle = styles.selectedLi
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={viewStyle} >
          <Text style={styles.liText}>
            {card.title},
            ${card.cashback.toFixed(2)}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;