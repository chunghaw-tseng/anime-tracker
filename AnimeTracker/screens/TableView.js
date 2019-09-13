// TableView.js

import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';

import CustomListView from '@components/CustomListView'

export class TableView extends Component {

  // Navigation bar options
  static navigationOptions = {
    title: 'Currently Watching'
    // headerRight: {}
  };

  // Get the data for the list
  getData(){
    return [
      {
        id: '1',
        title: "Hunter X Hunter",
        episodes: '24',
        current: '12',
        image_url: "@static/hxh.jpg"
      },
      {
        id: '2',
        title: "Hunter X Hunter 2",
        episodes: '12',
        current: '10',
        image_url: "@static/hxh.jpg"
      }
    ]    
  }

  // Button function
  onButtonPress(){
    console.log("Button Press");
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomListView navigation={this.props.navigation} itemList={this.getData()}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC'
  }
});

export default TableView;