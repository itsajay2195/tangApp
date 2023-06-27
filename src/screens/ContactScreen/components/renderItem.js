import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { SCREENS } from '../../../constants/ScreenConstant';

const ContactItem = ({item}) => {
  const navigation = useNavigation();
  const handlePressMessage = () => {
    console.log('Pressed 1');
    // const url = Communications.text(item.phoneNumbers[0].number);
  };

  const handlePressCall = () => {
    console.log('Pressed 2');
  };

  return (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => {
        navigation.navigate(SCREENS.contactDetails);
      }}>
      <View style={styles.contactContent}>
        <View style={styles.contactInfo}>
          {/* <Image
            source={require('../images/user.png')}
            style={styles.profilePicture}
          /> */}
          <View style={styles.textContainer}>
            <Text style={styles.displayName}>{item.displayName}</Text>
            <Text style={styles.phoneNumber}>
              {item.phoneNumbers[0].number}
            </Text>
          </View>
        </View>
        <View style={styles.contactActions}>
          <TouchableOpacity onPress={handlePressMessage}>
            {/* <Image
              source={require('../images/message.png')}
              style={styles.actionIcon}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressCall}>
            {/* <Image
              source={require('../images/call.png')}
              style={styles.actionIcon}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const keyExtractor = (item, index) => {
  return `contact${item.displayName}-${index}`;
};

export const renderItem = ({item}) => {
  return <ContactItem item={item} />;
};

const styles = {
  contactItem: {
    width: '90%',
    height: 70,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    marginLeft: 15,
  },
  displayName: {
    color: '#fff',
  },
  phoneNumber: {
    color: '#fff',
    marginTop: 4,
  },
  contactActions: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  actionIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    marginRight: 20,
  },
  profilePicture: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
};

export default renderItem;
