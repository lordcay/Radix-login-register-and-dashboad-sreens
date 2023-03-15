import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/signUp/SignUpScreen';
import DashBoard from './screens/dashboard/DashBoard';
// import Tabs from './Navigation/tabs';
//import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: 'Welcome' }}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#f9fbfc',
//   },
// });
