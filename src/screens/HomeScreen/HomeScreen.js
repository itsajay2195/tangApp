import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {SCREENS} from '../../constants/ScreenConstant';
import {ContactContext} from '../../context/ContactContext';
import theme from '../../styles/theme';

const HomeScreen = ({navigation}) => {
  const {data} = useContext(ContactContext);
  return (
    <View style={styles.container}>
      {data ? (
        <Text style={styles.numberTextStyle}>
          {data.number || data.phoneNumbers[0].number}
        </Text>
      ) : null}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.contacts);
        }}
        style={styles.btnStyle}>
        <Text style={styles.btnTextStyle}>Go to Contacts</Text>
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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.blue,
    borderRadius: 10,
  },
  btnTextStyle: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
  },
  numberTextStyle: {
    fontSize: theme.fontSizes.banerText,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
});
