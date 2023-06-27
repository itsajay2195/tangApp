import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '../../styles/theme';

const UserIcon = ({size}) => {
  return (
    <View>
      <Icon name="user" size={size || 20} color={theme.colors.white} />
    </View>
  );
};

export default UserIcon;

const styles = StyleSheet.create({});
