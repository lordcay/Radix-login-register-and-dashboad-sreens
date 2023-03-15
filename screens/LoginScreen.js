import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import radixLogo from '../assets/radixLogo.png';
import CustomInput from '../components/customInput/CustomInput';
import CustomButton from '../components/customButton/CustomButton';
import ab from '../assets/ab.png';
import { login } from '../api';
import Tabs from '../Navigation/tabs';
import DashBoard from './dashboard/DashBoard';
// API CLIENT
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
// import { Form, FormItem } from 'react-native-form-component';

import { Platform } from 'react-native';
import queryString from 'query-string';
import { Buffer } from 'buffer';
// import { BASE_URL } from './constants';

const LoginScreen = ({ navigation }) => {
  const [message, setMessage] = useState();
  const [messageType, setmessageType] = useState();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [data, setData] = useState();

  const { height } = useWindowDimensions();

  const BASE_URL = 'http://127.0.0.1:4000/users/authenticate';
  const onLoginPressed = async (username, password, navigation) => {

    // try {
    //   const response = await fetch(`${BASE_URL}/authenticate`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });
    //   const responseJson = await response.json();
    //   if (response.ok) {
    //     console.log('welcome')
    //     navigation.navigate('Dashboard', { accessToken: responseJson.access_token });
    //   } else {
    //     throw new Error(responseJson.message);
    //   }
    // } catch (error) {
    //   throw error;
    // }

    try {
      const response = await axios.post(`${BASE_URL}/authenticate`, {
        username,
        password,
      });
      if (response.status === 200) {
         navigation.navigate('DashBoard', { accessToken: response.data.access_token });
        // navigation.navigate('DashBoard');
      } else {
        throw new Error(response.data.message);
      }

    } catch (error) {
      throw error;
    }
    
    
  };

  const onForgotPasswordPressed = async () => {
    console.warn(' onForgotPasswordPressed pressed');
    try {
      const response = await axios.post(
        'http://127.0.0.1:4000/users/authenticate',
        {
          username,
          password,
        }
      );
      if (response.data.success) {
        // Navigate to the next screen
        navigation.navigate('DashBoard');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
    }
  };
  const onSignInFacebook = async () => {
    console.warn('facebooks');

    const response = await fetch('http://127.0.0.1:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      // Login successful
      console.log('successful');
      navigation.navigate('DashBoard');
    } else {
      // Login failed
      navigation.navigate('HomeScreen');
    }
  };
  const onSignInGoogle = () => {
    console.warn('Google');

    Promise.all([
      fetch('http://127.0.0.1:1433/users/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    ])
      .then((response) => response.json())
      .then((data) => {
        setData(JSON.stringify(data));
        // console.log(data); // Do something with the response data
        navigation.navigate('DashBoard');
      })
      .catch((error) => {
        console.error(error);
        console.log('your error is ' + error.message);
        throw error;
      });
    
  };
  const onSignInApple = () => {
    console.warn('Apple');
  };
  const onSignUpPressed = () => {
    console.warn('pls Sign Up');
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setmessageType(messageType);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
       
        <Image
          source={ab}
          style={styles.logo}
          // resizeMethod="contain"
        />
        <CustomInput
          placeholder="RSA PIN, Mobile or Email"
          value={username}
          setValue={setUsername}
          // onChangeText={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          // onChangeText={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Sign In" onPress={onLoginPressed} />
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <CustomButton
          text="Forgot password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Sign In with Facebook"
          onPress={onLoginPressed}
          bgColor="#E7EAF4"
          fgColor={'#4765A9'}
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor={'#DD4D44'}
        />
       
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <View>
        <Text type={messageType}>{message}</Text>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  
  logo: {
    width: '100%',
    maxWidth: 300,
    height: 200,
  },
  MsgBox: {
    textAlign: 'center',
    fontSize: '13px',
    color: 'red',
  },
});
export default LoginScreen;
