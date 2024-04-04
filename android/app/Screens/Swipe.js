import React, {useState} from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Swipe = ({navigation}) => {
  const[text, setText]=useState('');

  const onChangeText = (input) => {
    setText(input);
  }

  return (
    <SafeAreaView>
      <ScrollView>

      <View style={styles.container}>
        <Text>swipe</Text>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="type"
        />
        <TouchableOpacity onPress={()=> navigation.navigate('UserRecord', {text: text})}>
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