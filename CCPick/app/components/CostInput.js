import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../../styles.js')
const { View, Text, TextInput } = ReactNative;

class CostInput extends Component {
  render() {
    return (
      <View style={styles.cost}>
        <Text style={styles.costText}>
          Total Cost
        </Text>
        <InputBox
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}

class InputBox extends Component {
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderTopWidth: 1, textAlign: 'center', justifyContent: 'center'}}
        {...this.props}
        editable={true}
        maxLength={20}
        numberOfLines={1}
        defaultValue="0"
        keyboardType={"numeric"}
      />
    )
  }
}


module.exports = CostInput;