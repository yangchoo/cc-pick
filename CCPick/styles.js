// Reference: https://github.com/davideast/firebase-react-native-sample/blob/master/styles.js
const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#adcbe3',
    // borderColor: 'powderblue',
    // borderWidth: 1,
  },
  navBarTitle: {
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
  },
  body: {
    flex: 5,
  },
  navBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63ace5',
    // borderColor: 'lightgreen',
    borderBottomColor: '#eee',
    // borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
  },
  category: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F5FCFF',
    backgroundColor: '#adcbe3',
    // borderBottomColor: '#eee',
    // borderWidth: 1,

  },
  cost: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7eff6',
    // borderWidth: 1,
  },
  costText: {
    alignItems: 'center',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  picker: {
    width: 200,
  },
  li: {
    backgroundColor: '#e7eff6',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  selectedLi: {
    backgroundColor: '#adcbe3',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  listview: {
    flex: 1,
  },
})

module.exports = styles
module.exports.constants = constants;