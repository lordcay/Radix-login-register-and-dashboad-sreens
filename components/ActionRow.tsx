import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  screen: any;
  color: string;
  requireLogin: boolean;
  vertical?: boolean;
};
const ActionRow = ({
  title,
  screen,
  color,
  requireLogin,
  icon,
  vertical,
}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex m-2
       flex-1 justify-center items-center py-6 rounded-lg space-x-2 ${
         vertical ? 'flex-col' : flex - row
       }`}
      style={{ backgroundColor: color }}
    >
      <Ionicons name={icon} size={30} color={'#ffff'} />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: '#ffc107',
  },
});
export default ActionRow;
