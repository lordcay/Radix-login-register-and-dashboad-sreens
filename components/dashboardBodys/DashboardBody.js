import React from 'react';
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
import radix from '../../assets/radix.png';
import ActionRow from '../../components/ActionRow';
const DashboardBody = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.account_balance}>
          <Text style={styles.balance_T}>Accont Balance</Text>
        </View>
        <View>
          <Image
            source={radix}
            style={styles.logo}
            // resizeMethod="contain"
          />
        </View>

        <View style={styles.account_box}>
          <TouchableOpacity>
            <View style={styles.show_balance}>
              <Text style={styles.balance_text}>Show Balance</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.open_account}>
              <Text style={styles.balance_text}>Account History</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.switch}>
          <Text style={styles.switch_text}>SWITCH TO AN ENRICHED FUTURE</Text>
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
                color="#28a745"
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
                color="#28a745"
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
            </View>
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
                color="#28a745"
                icon="card"
                vertical
              />
            </View>
            <View className="flex-row justify-between space-x-2">
              <ActionRow
                title="My Lifestyle"
                screen="Login"
                color="#28a745"
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
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardBody;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#363564',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    // position: 'absolute',

    zIndex: 100,
    top: 0,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  account_balance: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 28,
    marginTop: 20,
    marginBottom: -5,
  },
  balance_T: {
    fontSize: '18px',
    fontWeight: '900',
    color: '#363564',
  },
  logo: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
    marginTop: -20,
    marginLeft: -10,
  },
  show_balance: {
    flex: 1,
    backgroundColor: '#363564',
    height: 30,
    width: 170,
    marginLeft: 8,
    padding: 3,
    // marginRight: 10,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderRadius: 30,
  },

  open_account: {
    flex: 1,
    backgroundColor: '#363564',
    height: 30,
    width: 170,
    marginRight: 10,
    alignItems: 'center',
    padding: 3,
    // marginLeft: 10,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 30,
  },
  account_box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    // marginLeft: 30,
    // marginRight: 30,
    alignItems: 'center',
    // alignContent: 'center',
    // position: 'relative',
  },
  balance_text: {
    color: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  switch: {
    marginTop: 20,
    marginLeft: 28,
    alignContent: 'center',
    margin: 15,
  },
  switch_text: {
    fontSize: '18',
    fontWeight: 'bold',
    includeFontPadding: true,
    color: '#363564',
  },
});
