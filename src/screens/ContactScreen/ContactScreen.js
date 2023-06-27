import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  PermissionsAndroid,
  TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Contact from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import theme from '../../styles/theme';
import renderItem from './components/renderItem';

const keyExtractor = (item, index) => {
  return `contact${item.displayName}-${index}`;
};


const ContactScreen = () => {
  const [contacts, setContacts] = useState(null);
  const isFocused = useIsFocused();
  useEffect(() => {
    getPermission();
  }, [isFocused]);
  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(res => {
      console.log(res);
      if (res === 'granted') {
        Contact.getAll()
          .then(con => {
            // work with contacts
            // console.log(con);
            setContacts(con.slice(0, 11));
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log('oooo');
      }
    });
  };

  return (
    <View style={styles.cotainer}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  cotainer: {flex: 1, backgroundColor: '#000'},
});
