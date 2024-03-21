import React from "react";
import { FlatList, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';


const DATA = [
  {
    title: '음식이름1',
    like:1,
  },
  {
    title: '음식이름 2',
    like:2,
  },
  {
    title: '스테이크',
    like:10,
  },
  {
    title: '파스타',
    like:20,
  },
  {
    title: '스시',
    like:30,
  },
  {
    title: 6,
  },
  {
    title: 7,
  },
  {
    title: 8,
  },
  {
    title: 8,
  },
  {
    title: 9,
  },
  {
    title: 10,
  },
  {
    title:11,
  },
  {
    title: 12,
  },
  {
    title: 13,
  },
  {
    title: 14,
  },
  {
    title: 15,
  },
  {
    title: 16,
  },
];

const Item = ({title, like}) => (
  <View style={styles.food}>
    <View style={styles.foodName}>
      
      <Text style={{fontFamily: 'Diphylleia-Regular',fontSize:16, color:'white'}}>{title}</Text>
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
          <Entypo name="minus" size={15} color="white"/>
        </TouchableOpacity>

        <Text style={{fontFamily: 'Diphylleia-Regular',fontSize:14, color:'white'}}>{like}</Text>
        
        <TouchableOpacity>
        <Entypo name="plus" size={15} color="white"/>
        </TouchableOpacity>
        <Fontisto name="heart-alt" size={20} color="white"/>
      </View>

    </View>
  </View>
);


const UserRecord = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.Header}>
        <Text style={styles.titleText}>나의 기록</Text>
      </View>
      
    <SafeAreaView>
      <View >
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} like={item.like} />}
        keyExtractor={(item, index) => index}
        numColumns={3}
      />
      </View>
    </SafeAreaView>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    height:Dimensions.get('window').height*2
  },
  Header:{
    width: Dimensions.get('window').width,
    backgroundColor:'white',
    height:Dimensions.get('window').height*0.08,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'black',
    borderBottomWidth:0.8
  },
  titleText:{
    fontSize:20,
    color:'black',
    fontFamily: 'Diphylleia-Regular',
  },
  food:{
    width:Dimensions.get('window').width/3,
    height:Dimensions.get('window').width/3,
    backgroundColor:'lightgrey',
    borderColor:'white',
    borderWidth:1,
  },
  foodName:{
    marginLeft:Dimensions.get('window').width/3-120,
    marginTop:Dimensions.get('window').width/3-50
  }
})
export default UserRecord;