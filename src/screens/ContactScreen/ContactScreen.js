import {StyleSheet, FlatList, View, PermissionsAndroid} from 'react-native';
import React, {useState, useEffect, useContext, useCallback} from 'react';
import Contact from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import renderItem from './components/renderItem';
import Alert from './components/MultipleNumberAlert';
import {ContactContext} from '../../context/ContactContext';
import SearchBar from '../../components/SearchBar';
import {keyExtractor} from './components/renderItem';

const ContactScreen = () => {
  const {showAlert} = useContext(ContactContext);
  const [contacts, setContacts] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(null);
  const isFocused = useIsFocused();

  const handleSearch = useCallback(
    query => {
      setSearchQuery(query);

      if (query === '') {
        setFilteredContacts(null);
      } else {
        const filtered = contacts.filter(contact => {
          return contact.displayName
            .toLowerCase()
            .includes(query.toLowerCase());
        });
        setFilteredContacts(filtered);
      }
    },
    [contacts],
  );

  const resetSearch = useCallback(() => {
    setSearchQuery('');
    setFilteredContacts(null);
  }, []);

  useEffect(() => {
    getPermission();
  }, [getPermission, isFocused]);

  const getPermission = useCallback(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(res => {
      if (res === 'granted') {
        Contact.getAll()
          .then(con => {
            // work with contacts
            setContacts(con);
          })
          .catch(e => {
            // console.log(e);
          });
      }
    });
  }, []);

  return (
    <View style={styles.cotainer}>
      {showAlert ? (
        <Alert message={'Choose a number:'} />
      ) : (
        <>
          <SearchBar
            placeholder={'search here'}
            textValue={searchQuery}
            onChangeText={handleSearch}
            resetSearch={resetSearch}
          />
          <FlatList
            data={filteredContacts !== null ? filteredContacts : contacts}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            initialNumToRender={20} //prop tells FlatList how many items to render initially.
            maxToRenderPerBatch={30} // prop controls how many items are rendered at a time when the user scrolls
            windowSize={20} //prop controls how many items are rendered around the current scroll position
            legacyImplementation={true}
            // getItemLayout={getItemLayout}
          />
        </>
      )}
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  cotainer: {flex: 1, backgroundColor: '#000'},
});
