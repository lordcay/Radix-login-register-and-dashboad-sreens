import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import radix from '../../assets/radix.png';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CustomInput from '../../components/customInput/CustomInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Footer = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header_left}> */}
      <View style={styles.header_infos}>
        <Entypo name="home" size={40} color="#fff" />
        <Text style={styles.footerTxt}>Home</Text>
      </View>
      <View style={styles.header_info}>
        <MaterialIcons name="payment" size={40} color="#fff" />
        <Text style={styles.footerTxt}>Breakdown</Text>
      </View>
      {/* <View style={styles.header_info}>
          <MaterialIcons name="payment" size={40} color="#fff" />
          <Text style={styles.footerTxt}>Payments</Text>
        </View> */}
      {/* <View style={styles.header_info}>
          <MaterialIcons name="payment" size={40} color="#fff" />
          <Text style={styles.footerTxt}>Activities</Text>
        </View> */}
      {/* <View style={styles.search}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder="Search" style={styles.input} />
          </View> */}
      {/* </View> */}

      {/* <View style={styles.header_middle}> */}
      <View style={styles.header_info}>
        <MaterialIcons name="payment" size={40} color="#fff" />
        <Text style={styles.footerTxt}>Payments</Text>
      </View>
      <View style={styles.header_info}>
        <MaterialIcons name="payment" size={40} color="#fff" />
        <Text style={styles.footerTxt}>Activities</Text>
      </View>
      {/* <View style={styles.option}>
            <AntDesign name="home" size={24} color="black" />  
          </View>
          <View style={styles.option}>
            <AntDesign name="creditcard" size={24} color="black" />
          </View>
          <View style={styles.option}>
            <MaterialCommunityIcons
              name="contactless-payment"
              size={24}
              color="black"
            />
          </View> */}
      {/* </View> */}
      {/* </View> */}
      <View style={styles.header_right}>
        {/* <TouchableOpacity>
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <MaterialIcons name="forum" size={40} color="#28a745" />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <MaterialIcons name="apps" size={60} color="#28a745" />
        </TouchableOpacity>
        {/* <TouchableOpacity>
            <Ionicons name="expand-sharp" size={24} color="black" />
          </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    marginBottom: 0,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    // position: 'absolute',
    backgroundColor: '#363564',
    zIndex: 100,
    top: 0,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  header_left: {
    // height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignContent: 'space-between',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginLeft: 20,
  },
  header_info: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  header_infos: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 3,
  },
  logo: {
    width: '100%',
    maxWidth: 60,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  footerTxt: {
    color: '#fff',
  },
  search: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
    padding: 10,
    backgroundColor: '#eff2f5',
    borderRadius: 10,
    width: '60%',
  },
  input: {
    height: 20,
    border: 'none',
    backgroundColor: 'transparent',

    // marginLeft: 10,
    //borderWidth: 1,
    padding: 10,
  },
  header_middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  username: {
    marginLeft: 6,
  },
  header_right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
});
