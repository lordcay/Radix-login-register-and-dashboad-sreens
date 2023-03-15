import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {default as Ionicon} from 'react-native-vector-icons/Ionicons';
import {default as Feathericon} from 'react-native-vector-icons/Feather';
import DashBoard from '../screens/dashboard/DashBoard';
import Card from '../screens/card/Card';
import Help from '../screens/help/Help';
import More from '../screens/more/More';
import Notifications from '../screens/Notification/Notifications';


const screens = [
    {
        name:'DashBoard',
        icon:(color)=> <Ionicon name="ios-home-outline" size={30} color={color} />,
        component: DashBoard,
    },
    {
        name:'CARDS',
        icon:(color)=> <Ionicon name="ios-card-outline" size={30} color={color} />,
        component: Card,
    },
    {
        name:'HELP',
        icon:(color)=> <Ionicon name="help-circle-outline" size={30} color={color} />,
        component: Help,
    },
    {
        name:'NOTIFICATIONS',
        icon:(color)=> <Ionicon name="md-notifications-outline" size={30} color={color} />,
        component: Notifications,
    },
    {
        name:'MORE',
        icon:(color)=> <Feathericon name="more-horizontal" size={30} color={color} />,
        component: More,
    },
];

const noHeader = ['DashBoard']
const Tab = createBottomTabNavigator();

 const BottomTabNavigation =()=> {

    return (
          <Tab.Navigator
              screenOptions={{
                  tabBarLabelPosition:'below-icon',
                  tabBarStyle:{height:60},
                  tabBarLabelStyle:{paddingBottom:10},
                  headerShown:true,
                  header:({route}) => {
                      const showHeader = !noHeader.includes(route.name)
                      return showHeader && <ScreenHeader heading={route.name} showAvatar />
                  }
              }}
              initialRouteName="DashBoard"
  
  
          >
              {
                  screens.map(screen =>
                      <Tab.Screen key={screen.name}
                                  component={screen.component}
                                  name= {screen.name}
                                  options={{
                                      tabBarIcon:({focused})=>screen.icon(focused ? 'orangered' : 'black'),
                                      tabBarLabel:({focused})=>
                                          <Text
                                              style={{
                                                  color:focused ? 'orangered' : 'black',
                                                  fontSize:10,
                                              }}
                                          >
                                              {screen.name}
                                          </Text>,
                                  }}
                       /> )
              }
  
          </Tab.Navigator>
    );
  }
  
  export default BottomTabNavigation
