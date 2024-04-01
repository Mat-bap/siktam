import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Swipe = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>

      <View style={styles.container}>
        <Text>swipe</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('UserRecord')}>
          <Text>go to user record</Text>
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
export default Swipe;