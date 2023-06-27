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

const keyExtractor = (item, index) => {
  return `contact${item.displayName}-${index}`;
};
const renderItem = ({item}) => {
  return (
    // <View style={styles.contact}>
    //   <Text style={{color: theme.colors.white}}>{item.displayName}</Text>
    //   <Text style={{color: theme.colors.white}}>
    //     {item.phoneNumbers[0].number}
    //   </Text>
    //   {item.photo && (
    //     <Image source={{uri: item.photo}} style={styles.profilePicture} />
    //   )}
    // </View>
    <TouchableOpacity
      style={{
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
      }}
      onPress={() => {
        navigation.navigate('ContactDetails', {
          data: item,
        });
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* <Image
          source={require('../images/user.png')}
          style={{width: 40, height: 40, marginLeft: 15}}
        /> */}
        <View style={{padding: 10}}>
          <Text style={{color: '#fff'}}>{item.displayName}</Text>
          <Text style={{color: '#fff', marginTop: 4}}>
            {item.phoneNumbers[0].number}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingRight: 15}}>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed 1')
            // const url = Communications.text(item.phoneNumbers[0].number);
          }}>
          {/* <Image
            source={require('../images/message.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: '#fff',
              marginRight: 20,
            }}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed 2')
          }}>
          {/* <Image
            source={require('../images/call.png')}
            style={{width: 20, height: 20, tintColor: '#fff'}}
          /> */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
