import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from "react-native";

const Category = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>

      <View style={styles.container}>
        <Text style={{color:'black'}}>category</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Swipe')}>
          <Text>go to swipe</Text>
        </TouchableOpacity>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: 'white',
  },
})
export default Category;