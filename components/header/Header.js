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

const Header = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_left}>
        <View style={styles.header_info}>
          <Ionicons name="person-circle-outline" size={50} color="#28a745" />
          <View style={styles.username}>
            <Text style={styles.username_T}>Hi,</Text>
            <Text style={styles.username_T}>Caleb Ned</Text>
          </View>
        </View>
        {/* <Ionicons
          name="ios-apps-sharp"
          size={45}
          color="black"
          style={styles.logo}
        /> */}
        {/* <View style={styles.search}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholder="Search" style={styles.input} />
        </View> */}
      </View>

      <View style={styles.header_middle}>
        {/* <View style={styles.search}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholder="Search" style={styles.input} />
        </View> */}
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
      </View>
      <View style={styles.header_right}>
        {/* <TouchableOpacity>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <MaterialIcons name="forum" size={35} color="#ffff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" size={35} color="#ffff" />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Ionicons name="expand-sharp" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    height: 60,
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
    height: 40,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  logo: {
    width: '100%',
    maxWidth: 60,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
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
    justifyContent: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  header_info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    marginLeft: 6,
  },
  username_T: {
    color: '#ffff',
  },
  header_right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
