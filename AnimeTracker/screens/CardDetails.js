// CardDetails.js

import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export class CardDetails extends Component {

    // Navigation bar options
    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam('title', 'Anime Title'),
             // headerRight: {}
        }
       
    };

  render() {

    // const { navigation } = this.props;
    // const title = navigation.getParam('title', 'Anime Title');

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={require("@static/hxh.jpg")} style={{width:'100%', height:200}}/>
                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: '#FCFCFC'
  },
  description:{
    color:"#000"
  }
});

export default CardDetails;