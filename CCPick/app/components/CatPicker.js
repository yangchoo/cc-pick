import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../../styles.js')
const { View, Picker } = ReactNative;

class CatPicker extends Component {
  render() {
    return (
      <View style={styles.category}>
        <Picker
          style={styles.picker}
          selectedValue={this.props.selectedValue}
          onValueChange={this.props.onValueChange}>
          {this.props.categories.map ((cat) => {
            return <Picker.Item key={cat} label={cat} value={cat}/>
          })}
        </Picker>
      </View>
    );
  }
}

module.exports = CatPicker;