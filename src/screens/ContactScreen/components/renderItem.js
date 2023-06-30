import React, {useCallback, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../constants/ScreenConstant';
import UserIcon from '../../../assets/icons/UserIcon';
import theme from '../../../styles/theme';
import PhoneTypeRenderer from './PhoneTypeRenderer';
import {ContactContext} from '../../../context/ContactContext';

const SCREEN_HEIGHT = theme.window.height;

export const ContactItem = ({item}) => {
  const {displayName, phoneNumbers, thumbnailPath} = item;
  const {setData, setShowAlert} = useContext(ContactContext);
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    setData(item);
    if (phoneNumbers.length > 1) {
      setShowAlert(prev => !prev);
    } else {
      navigation.navigate(SCREENS.home);
    }
  }, [item, navigation, phoneNumbers.length, setData, setShowAlert]);

  return (
    <TouchableOpacity style={styles.contactItem} onPress={onPress}>
      <View style={styles.contactContent}>
        <View style={styles.contactInfo}>
          <View style={styles.leftContainerWrapper}>
            {thumbnailPath ? (
              <Image
                style={styles.userImageStyle}
                source={{uri: thumbnailPath}}
                resizeMode={'contain'}
              />
            ) : (
              <UserIcon />
            )}
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.displayName}>{displayName}</Text>
            <View style={styles.numberandTypeWraper}>
              <PhoneTypeRenderer type={phoneNumbers[0]?.label} />
              <Text style={styles.phoneNumber}>
                {phoneNumbers[0]?.number}
                {phoneNumbers.length > 1
                  ? `, ${phoneNumbers.length - 1} more...`
                  : null}
              </Text>
            </View>
          </View>
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

export const getItemLayout = (data, index) => {
  // Calculate the height of the item at the specified index.
  const height = SCREEN_HEIGHT / 9; // Assuming the height of each item is 1/9th of the screen height.

  return {
    length: height,
    offset: height * index,
  };
};

const styles = {
  contactItem: {
    width: '90%',
    height: SCREEN_HEIGHT / 9,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: theme.colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  leftContainerWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 15,
  },
  displayName: {
    color: '#fff',
  },
  phoneNumber: {
    color: '#fff',
    marginTop: 4,
    paddingLeft: 10,
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
  numberandTypeWraper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImageStyle: {height: 50, width: 50, borderRadius: 25},
};

export default renderItem;
