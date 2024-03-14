import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from "react-native";

const UserRecord = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>

      <View style={styles.container}>
        <Text>user record</Text>
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
export default UserRecord;