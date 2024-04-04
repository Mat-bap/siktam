import React, { useState } from "react";
import { Image,TouchableWithoutFeedback,FlatList, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, Modal } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    image: require("../assets/images/HamEggToast.jpg")
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

const UserRecord = ({ navigation, route }) => {
  const [data, setData] = useState(initialData);
  const { text } = route.params;
  console.log(route.params.text);
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

  //--modal setting--\\
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.titleText}>나의 취향</Text>
        <TouchableOpacity onPress={toggleModal}>
          <AntDesign name="questioncircleo" size={18} color="gray" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
          <View style={styles.modalview}>
            <Text style={[styles.titleText, {fontSize:30, marginTop:-200}]}>도움말</Text>
            <Text style={[styles.titleText, {fontSize:20, marginTop:10}]}>나의 취향 목록에 있는</Text>
            <Text style={[styles.titleText, {fontSize:20, marginTop:10}]}>하트 아이콘은</Text>
            <Fontisto name="heart-alt" size={23} color="black" />
            <Text style={[styles.titleText, {fontSize:20, marginTop:10}]}>내가 먹은 음식 횟수를 뜻해요</Text>
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.modalBTN}>
                <Text style={[styles.titleText, {fontSize:20}]}>  뒤로 가기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
    <View style={{width:"100%",height:"70%", position:"absolute", }}>
      <Image source={image} style={styles.image} resizeMode={'cover'}/>
    </View>

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
    flexDirection:'row',
  },
  titleText:{
    fontSize:20,
    color:'black',
    fontFamily: 'Diphylleia-Regular',
    marginRight:20
  },
  food:{
    width:Dimensions.get('window').width/2,
    height:Dimensions.get('window').width/2,
    borderColor:'white',
    borderWidth:1,
    backgroundColor:'#EAEAEA'
  },
  foodName:{
    marginLeft:Dimensions.get('window').width/2-190,
    marginTop:Dimensions.get('window').width/2-60

  },
  foodinfoText:{
    fontFamily: 'Diphylleia-Regular',
    fontSize:20,
    color:'black'
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
  modalview:{
    width:Dimensions.get('window').width-50,
    height:Dimensions.get('window').height-100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  modalBTN :{
    width:150,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:80,
    borderColor:'gray',
    borderWidth:1.5,
    borderRadius: 50,
  }
});

export default UserRecord;
