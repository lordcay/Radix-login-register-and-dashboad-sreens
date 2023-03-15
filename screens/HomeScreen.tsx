import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';
import ab from '../assets/ab.png';
// import Tabs from '../Navigation/tabs';

const HomeScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView className="flex-1 bg-white-100 relative" style={styles.bgcol}>
      <ScrollView>
        {/* login icon */}
        <TouchableOpacity className="absolute z-50 top-5  right-10 items-center">
          <Ionicons
            name="person-circle"
            size={30}
            color="#363564"
            onPress={() => navigation.navigate('Login')}
          />
          <Text className="text-center text-[#363564]">Login</Text>
        </TouchableOpacity>
        {/* image logo */}

        <View style={styles.btngrid}>
          <Image
            source={ab}
            style={styles.logo}
            // resizeMethod="contain"
          />
          <View style={styles.headTxtView}>
            <Text style={styles.headerIntro}>Manage and Grow your Wealth</Text>
            <Text style={styles.headerIntro2}>
              Login to any of your Radix accounts to get started
            </Text>
          </View>

          {/* action rows over view */}
          <View className="mx-5">
            {/* Action Rows */}
            <Pressable>
              <View className="flex-row justify-between space-x-2">
                <ActionRow
                  title="My Pension"
                  screen="Login"
                  color="#363564"
                  icon="umbrella"
                  vertical
                />
                <ActionRow
                  title="My Investments"
                  screen="Login"
                  color="#363564"
                  icon="card"
                  vertical
                />
              </View>

              {/* <ActionRow
            title="My Stocks"
            screen="Login"
            color="#363564"
            icon="key"
            vertical
          /> */}

              <View className="flex-row justify-between space-x-2">
                <ActionRow
                  title="My Lifestyle"
                  screen="Login"
                  color="#363564"
                  icon="happy"
                  vertical
                />
                <ActionRow
                  title="Online Support"
                  screen="Login"
                  color="#363564"
                  icon="card"
                  vertical
                />
                {/* <Tabs /> */}
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headTxtView: {
    marginLeft: 30,
    alignItems: 'flex-start',
  },
  bgcol: {
    backgroundColor: 'white',
  },
  headerIntro: {
    fontWeight: 'bold',
    color: '#363564',
    fontSize: 18,
    marginBottom: 8,
  },
  headerIntro2: {
    color: '#28a745',
    marginBottom: 20,
  },
  btngrid: {
    marginTop: '30%',
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
    marginBottom: 10,
    marginTop: 1,
  },
});

export default HomeScreen;
