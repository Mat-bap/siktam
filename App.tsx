import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainStackNav from './android/app/navigations/MainStackNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Button, View, Text } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId: '43747563726-s9up2rhj9t1crf5g5b7ihfvunhf40ami.apps.googleusercontent.com',
    })
  }
  useEffect(()=>{
    googleSigninConfigure();
  })
    
  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}

const [isLoadingEnd, setIsLoadingEnd] = useState(false);

const checkLoggedIn = () => {
  auth().onAuthStateChanged((user) => {
      if (user) {
          setLoggedIn(true)
          console.log("loggedIn")
      } else {
          setLoggedIn(false)
          console.log("loggedOut")
      }
  }
  )
}

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <GoogleSigninButton onPress={() => onGoogleButtonPress()} />
    </View>


  );
}

export default App;

//    <NavigationContainer independent={true}>
//<Stack.Navigator screenOptions={({ route }) => ({ headerShown: false })}>
//<Stack.Screen name='MainStackNav' component={MainStackNav} />
//</Stack.Navigator>
//</NavigationContainer>