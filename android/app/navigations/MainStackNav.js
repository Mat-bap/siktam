import Category from "../Screens/Category";
import Swipe from "../Screens/Swipe";
import UserRecord from "../Screens/UserRecord";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Swipe" component={Swipe} />
      <Stack.Screen name="UserRecord" component={UserRecord} />
    </Stack.Navigator>
  )
};

export default MainStackNav;