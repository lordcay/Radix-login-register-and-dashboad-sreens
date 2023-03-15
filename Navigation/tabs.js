import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from '../screens/dashboard/DashBoard';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DashBoard} />
      <Tab.Screen name="Breakdown" component={LoginScreen} />
      <Tab.Screen name="Payment" component={SignUpScreen} />
      <Tab.Screen name="Cards" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default Tab