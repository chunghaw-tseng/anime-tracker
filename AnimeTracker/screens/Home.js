// Home.js

import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
  ImageBackground 
 } from 'react-native';

export class Home extends Component {

  static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null,
};
navigateToScreen = () => {
  console.log("Navigate");
  // this.props.navigation.push("SettingsScreen");
  // this.props.navigation.navigate("SettingsScreen");

}

  render() {
    return (
      <View>
        <ImageBackground source={require('@static/background.jpg')} style={styles.image_bg}>
          {/* <Text style={styles.app_title} >This is the home screen</Text> */}
          <TouchableOpacity style={styles.home_btn} onPress={this.navigateToScreen}>
            <View>
              <Text style={styles.home_btn_txt}>Start</Text>
            </View>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  image_bg: {
    width: '100%', 
    height: '100%'
  },
  app_title: {
    color: "#FFF"
  },
  home_btn:{
    opacity: 1,
    borderRadius:5,
    padding:10,
    width: 200,
    height:50

  },
  home_btn_txt:{
    color: "#FFF",
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Home;