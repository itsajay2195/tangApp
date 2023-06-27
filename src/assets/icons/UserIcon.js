import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '../../styles/theme';

const UserIcon = ({size}) => {
  const containerStyle = React.useMemo(() => {
    return {
      height: size || 40,
      width: size || 40,
      borderRadius: size ? size / 2 : 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.blue,
    };
  }, [size]);
  return (
    <View style={containerStyle}>
      <Icon name="user" size={size || 20} color={theme.colors.white} />
    </View>
  );
};

export default UserIcon;

const styles = StyleSheet.create({});
