import React, { useState } from "react";
import { Image,TouchableWithoutFeedback,FlatList, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

const initialData = [
  {
    title: '스테이크',
    heart: 100,
    image: require("../assets/images/BeanCurdSteak.jpg")
  },
  {
    title: '파스타',
    heart: 2,
    image: require("../assets/images/HamEggToast.jpg")
  },
  {
    title: '연어덮밥',
    heart: 10,
  },
  {
    title: '토마호크',
    heart: 0,
  },
  {
    title: '떡볶이',
    heart: 2,
  },
  {
    title: '장어 덮밥',
    heart: 10,
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
  {
    title: 17,
  },
  {
    title: 18,
  },
  {
    title: 19,
  },
  {
    title: 20,
  },
];

const UserRecord = ({ navigation }) => {
  const [data, setData] = useState(initialData);

  //--user like puls btn--\\
  const handlePlus = (index) => {
    const newData = [...data];
    newData[index].heart += 1;
    setData(newData);
  };
  //--user like minus btn--\\
  const handleMinus = (index) => {
    const newData = [...data];
    newData[index].heart = Math.max(newData[index].heart - 1, 0);
    if (newData[index].heart === 0) {
      console.log('remove the food record');
    }
    setData(newData);
  };
 //--flatlist rendering the items--\\
  const renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback style={{flex:1}}>
    <Item
      title={item.title}
      heart={item.heart}
      handlePlus={() => handlePlus(index)}
      handleMinus={() => handleMinus(index)}
      image={item.image}
    />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.titleText}>나의 취향</Text>
      </View>

      <SafeAreaView style={{flex:1}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
      </SafeAreaView>
    </View>
  );
}

const Item = ({ title, heart, handlePlus, handleMinus, image }) => (
  <View style={styles.food}>
    {/* food image */}
    <View style={{backgroundColor:'pink', width:"100%",height:"70%"}}>
      <Image source={image} style={styles.image} resizeMode={'cover'}/>
    </View>
    <View sytle={{backgroundColor:'blue', position:"absolute", zIndex:-10}}>
      {/*margin top-text and vector icon*/}
    <View style={styles.foodName}>
      <Text style={styles.foodinfoText}>{title}</Text>
      
      {/*plus minus icon view*/}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:5 }}>
        <TouchableOpacity onPress={handleMinus}>
          <Entypo name="minus" size={15} color="black" />
        </TouchableOpacity>
        {/*num of hearts and heart icon view*/}
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Fontisto name="heart-alt" size={23} color="black" />
          <Text style={styles.heartNumText}>{heart}</Text>
        </View>
        <TouchableOpacity onPress={handlePlus}>
          <Entypo name="plus" size={15} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    </View>
  </View>
  
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    flex:1
  },
  Header:{
    width: Dimensions.get('window').width,
    backgroundColor:'white',
    height:Dimensions.get('window').height*0.08,
    position: 'relative',
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'black',
    borderBottomWidth:0.8,
  },
  titleText:{
    fontSize:20,
    color:'black',
    fontFamily: 'Diphylleia-Regular',
  },
  food:{
    width:Dimensions.get('window').width/2,
    height:Dimensions.get('window').width/2,
    backgroundColor:'grey',
    borderColor:'white',
    borderWidth:1,
  },
  foodName:{
    marginLeft:Dimensions.get('window').width/2-180,
    marginTop:Dimensions.get('window').width/2-70
  },
  foodinfoText:{
    fontFamily: 'Diphylleia-Regular',
    fontSize:20,
    color:'white'
  },
  heartNumText:{
    fontFamily: 'Diphylleia-Regular',
    fontSize:12,
    color:'black',
    position: 'absolute'
  },
  image: {
    width:"100%",
    height:"100%",
  },
});

export default UserRecord;
