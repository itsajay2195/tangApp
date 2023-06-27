import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Contact from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';

const renderItem = ({item}) => {
  return (
    <View style={styles.contact}>
      <Text>{item.displayName}</Text>
      <Text>{item.phoneNumbers[0].number}</Text>
      {item.photo && (
        <Image source={{uri: item.photo}} style={styles.profilePicture} />
      )}
    </View>
  );
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
      console.log(res)
      if (res === 'granted') {
        Contact.getAll()
          .then(con => {
            // work with contacts
            console.log(con);
            // setContactList(con);
          })
          .catch(e => {
            console.log(e);
          });
      }else{
        console.log('oooo')
      }
    });
  };

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
