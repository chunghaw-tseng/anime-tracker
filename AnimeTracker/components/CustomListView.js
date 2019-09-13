import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DataCard from "./DataCard"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const CustomListview = ({ navigation, itemList }) => {
    
    // Pass whole item to the next page
    showDetails = (item) =>{
        console.log("Showing details " + item.title);
        navigation.navigate('CardDetails', {
            title: item.title,
          });
    }

    return(
        <View style={styles.container}>
            <FlatList
                    data={itemList}
                    renderItem={({ item }) => 
                        <TouchableOpacity onPress={() => this.showDetails(item)}>
                            <DataCard
                                title={item.title}
                                episodes = {item.episodes}
                                current={item.current}
                                image_url={item.image_url}
                            />
                        </TouchableOpacity>
                    }
                />
        </View>
    )
};

export default CustomListview;