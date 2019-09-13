// Home.js

import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
  ImageBackground 
 } from 'react-native';
 import { NavigationActions, StackActions } from 'react-navigation';

export class Home extends Component {

  static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null
};
  navigateToScreen = () => {
    this.props.navigation.dispatch(
      StackActions.reset({
       index: 0,
       actions: [NavigationActions.navigate({ routeName: "TableView" })]
        })
      );
  }

  render() {
    return (
      <View>
        <ImageBackground source={require('@static/background.jpg')} style={styles.image_bg}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.home_btn} onPress={this.navigateToScreen}>
              <View>
                <Text style={styles.home_btn_txt}>Start Watching</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column-reverse"
  },
  image_bg: {
    width: '100%', 
    height: '100%'
  },
  app_title: {
    color: "#FFF"
  },
  home_btn:{
    padding:10
  },
  home_btn_txt:{
    color: "#FFF",
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Home;