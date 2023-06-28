import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {SCREENS} from '../../constants/ScreenConstant';
import {ContactContext} from '../../context/ContactContext';

const HomeScreen = ({navigation}) => {
  const {data, setData} = useContext(ContactContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.contacts);
        }}
        style={styles.btnStyle}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    height: 90,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
