import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    
  } from 'react-native';
  import React, { useState } from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import LoginScreen from '../LoginScreen';
//   import CustomInput from '../components/customInput/CustomInput';

const SignUpScreen =({navigation}) =>{
    const [nin, setNin] = useState('');
    const [surname, setSurname] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
   
    const SignUp = () => {
        console.warn(' you signed up');
      };
    const onTermsOfUsePressed = () => {
        console.warn(' you onTermsOfUsePressed');
      };
    const onPrivacyPressed = () => {
        console.warn(' you onPrivacyPressed');
      };
    // const onSignInPressed = (navigation) => {
    //     onPress={ navigation.navigate('SignUp')}
    //   };
   
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
       <Text style={styles.title}> Come On Board</Text>


       <CustomInput
          placeholder="NIN"
          value={nin}
          setValue={setNin}
        />
       <CustomInput
          placeholder="Surname"
          value={surname}
          setValue={setSurname}
        />
       <CustomInput
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
        />
       <CustomInput
          placeholder=" Middle Name"
          value={middleName}
          setValue={setMiddleName}
        />
       <CustomInput
          placeholder=" Phone Number"
          value={phoneNo}
          setValue={setPhoneNo}
        />
       <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
       <CustomInput
          placeholder="address"
          value={address}
          setValue={setAddress}
        />

<CustomButton
          text="Submit"
          onPress={SignUp}          
        />
        
        <Text style={styles.text}>By registering, you confirm that you accept our {' '}
         <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use </Text> and {' '}
        <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text> </Text>

        <CustomButton
          text="have a RSN pin? Sign in"
          onPress={() => navigation.navigate('Login')}
          type="TERTIARY"
         
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
   
  
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C60',
    margin:10,
  },
  text:{
    color:'gray',
    marginVertical:10,
  },
  link:{
    color:'#FDB075',
  },
});
  

  
export default SignUpScreen
