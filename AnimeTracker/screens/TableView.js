// TableView.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class TableView extends Component {

  // Navigation bar options
  static navigationOptions = {
    title: 'TableView',
  };

  // Button function
  onButtonPress(){
    console.log("Button Press");
  }

  render() {
    return (
      <View>
        <Text>Table View</Text>
        <Button onPress={() => this.props.navigation.push('SettingScreen')} title="Home"/>
        <Button onPress={this.onButtonPress} title="Button"/>
      </View>
    )
  }

}

export default TableView;