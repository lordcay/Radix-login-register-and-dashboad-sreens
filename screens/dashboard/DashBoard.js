 import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, SafeAreaView, StyleSheet,StatusBar, Animated,useAnimatedStyle, useSharedValue,useAnimatedScrollHandler, Dimensions } from 'react-native';
// import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, Extrapolate } from 'react-native-reanimated';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../../components/header/Header';
import AccountCards from '../../components/accountCards/AccountCards'
import QuickView from '../../components/quickView/QuickView'
 import DashboardBody from '../../components/activities/Activities';
import Footer from '../../components/footer/Footer';
//  import BottomTabNavigation from '../../Navigation/index';
 //import BottomTabNavigation from '../../Navigation/BottomTabNavigation';
//import Tabs from './Tabs';
import Tabs from '../../Navigation/tabs';

import Avatar from '../../components/Avatar';
import Divider from '../../components/Divider';
import Typography from '../../components/Typography';
import Activities from '../../components/activities/Activities';
import BottomTabNavigation from '../../Navigation/BottomTabNavigation';
import LoginScreen from '../LoginScreen';
// import QuickView from './QuickView';
// import { StatusBar } from 'expo-status-bar';

// import AccountCards from './AccountCards'
// import Activities from './Activities';
// import QuickView from './QuickView'

const accounts = [
  {
      type:'RSA Balance',
      id: 123456787,
      
  },
  {
      type:'Transaction History',
      id: 123456787,
     
     
  },
  {
      type:'Deposit',
      id: 123456787,
  },
];
const DashBoard = () => {
    
  return (
   
    
    <View style={styles.root}>
        
      <StatusBar backgroundColor="#363564"  />
      <Animated.View style={[styles.header]}>
                <Avatar />
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{
                    paddingBottom:100,
                    paddingTop:80,
                }}
                // onScroll={scrollHandler}
            >

               {/* Welcome header background color */}
               <View
                    style={{
                        height:200,
                        backgroundColor:'#363564',
                        paddingHorizontal:10,
                    }}
                >
                    <Typography text="Welcome back" color="white" />
                    <Typography text="Caleb Ned" color="white" bold={true} fontSize={30} />
                    <Divider bgcolor="white" />
                </View>

                <View
                    style={{
                        marginTop:-100,
                        backgroundColor:'transparent',
                    }}
                >
                    <View style={{paddingHorizontal:10}} >
                        <Typography text="My Accounts" color="white" bold={true} />
                    </View>
                    <Animated.ScrollView
                        pagingEnabled={true}
                        snapToAlignment="end"
                        scrollEventThrottle={16}
                        contentContainerStyle={{
                            paddingHorizontal:30,
                        }}
                        decelerationRate="fast"
                        snapToInterval={Dimensions.get('window').width * 0.8}
                        horizontal={true}

                    >
                        {
                            accounts.map((account,index)=>{
                                return (
                                    <AccountCards
                                        key={index}
                                        accountNumber={account.id}
                                        type={account.type}
                                        
                                     
                                        // onButtonPress={() => navigation.navigate('password', {accountNumber:account.id})}
                                    />
                                );}
                            )
                        }
                    </Animated.ScrollView>
                </View>
                
                <QuickView />
                {/* <BottomTabNavigation /> */}
                <Activities />
                {/* <Tabs /> */}
            </Animated.ScrollView>
            

            {/* <View><Tab /></View> */}
            
                          
    </View>
    
    
  );
  
};


export default DashBoard;

const styles = StyleSheet.create({
  root:{
      backgroundColor:'whitesmoke',
      flex:1,
  },
  quick:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
  },
  // top header background color
  header:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#363564',
      padding:10,
      paddingTop:30,
      height:80,
      position:'absolute',
      top:0,
      left:0,
      right:0,
      zIndex:100,
      // marginBottom:10,
  },
});

// const styles = StyleSheet.create({
//   // container: {
//   //   // flexDirection: 'row',
//   //   // backgroundColor: '#363564',
//   //   // paddingTop: 15,
//   //   // paddingBottom: 15,
//   //   // paddingLeft: 20,
//   //   // paddingRight: 20,
//   //   // justifyContent: 'space-between',
//   //   // position: 'absolute',
//   //   // backgroundColor: '#000',
//   //   // zIndex: 100,
//   //   // top: 0,
//   // },
//   // footer: {
//   //   position: 'relative',
//   //   left: 0,
//   //   bottom: 0,
//   // },
  
// });
