import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";
export default class Boxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GridListItems: [
        { key: "A" },
        { key: "B" },
        { key: "C" },
        { key: "D" },
        { key: "E" },
        { key: "F" },
        { key: "G" },
        { key: "H" },
        { key: "I" },
        { key: "J" },
       
      ]
    };
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }

  render() {
     return (
       <View style={styles.container}>
         <FlatList
            data={ this.state.GridListItems }
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
              </View> }
            numColumns={2}
         />
       </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
 
  
  GridViewContainer: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 200,
   margin: 2,
   backgroundColor: '#4D243D'
},
GridViewTextLayout: {
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: '#fff',
   padding: 10,
 }
});
