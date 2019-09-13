// DataCard.js

import React from 'react';
import { View, Image, Text , StyleSheet} from 'react-native';

const DataCard = ({title, episodes, current, image_url}) =>(

    <View style={styles.card_style}>
        <Image source={require('@static/hxh.jpg')} style={styles.card_img}/>
        <View style={{flexDirection:'row'}}> 
            <Text style={styles.dataTitle}>{title}</Text>
            <View style={{paddingRight:10}}>
                <Text>Last Episode : {episodes}</Text>
                <Text>Last Watched : {current}</Text>
            </View>
        </View>

    </View>
  
);

const styles = StyleSheet.create({
    
    dataTitle:{
        color: "#000",
        fontSize: 20,
        flexGrow: 1,
        paddingLeft: 10
    },
    dataDetails:{

    },
    cardInfo:{
        flexGrow: 1
    },
    card_style:{
        justifyContent: 'center',
        height: 100,
        marginTop:10,
        // paddingTop:15,
        paddingBottom:15,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#EAEAEA'
    },
    card_img: {
        width: '100%', 
        height: '70%',
        borderTopRightRadius: 10 ,
        borderTopLeftRadius: 10,
      },
  });

export default DataCard;